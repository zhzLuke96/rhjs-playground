import { transform } from "@babel/standalone";

import dd from "dedent";
import RhjsPreset from "./RhjsPreset";

let files: Record<string, string> = {};
let cache: Record<string, string> = {};
let dataToReturn: Record<string, string> = {};

function uid(str: string) {
  return Array.from(str)
    .reduce((s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0, 0)
    .toString();
}

function babelTransform(filename: string, code: string) {
  let { code: transformedCode } = transform(code, {
    plugins: [
      // Babel plugin to get file import names
      function importGetter() {
        return {
          visitor: {
            Import(path: any) {
              const importee: string = path.parent.arguments[0].value;

              cache[importee] = path.parent.arguments[0].value =
                transformImportee(importee);
            },
            ImportDeclaration(path: any) {
              const importee: string = path.node.source.value;
              // Replace relative imports, as import maps don't seem to be able to handle them properly
              cache[importee] = path.node.source.value =
                transformImportee(importee);
            },
          },
        };
      },
    ],
    presets: [
      [RhjsPreset, {}],
      ["typescript", { onlyRemoveTypeImports: true }],
    ],
    filename: filename + ".tsx",
  });

  return transformedCode!.replace("render(", "window.dispose = render(");
}

// Returns new import URL
function transformImportee(fileName: string) {
  // There's no point re-visiting a node again, as it's already been processed
  if (fileName in cache) {
    return cache[fileName];
  }
  if (!fileName) {
    return "";
  }

  // Base cases
  if (fileName.includes("://") || !fileName.startsWith(".")) {
    if (fileName.endsWith(".css")) {
      const id = uid(fileName);
      const js = dd`
        (() => {
          let link = document.getElementById('${id}');
          if (!link) {
            link = document.createElement('link')
            link.setAttribute('id', ${id})
            document.head.appendChild(link)
          }
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('href', '${fileName}')
        })()
      `;
      const url = URL.createObjectURL(
        new Blob([js], { type: "application/javascript" })
      );
      return url;
    }
    if (fileName.includes("://")) return fileName;
    else {
      dataToReturn[fileName] = `https://jspm.dev/${fileName}`;
      return fileName;
    }
  }
  if (fileName.endsWith(".css")) {
    const contents = files[fileName];
    const id = uid(fileName);
    const js = dd`
    (() => {
      let stylesheet = document.getElementById('${id}');
      if (!stylesheet) {
        stylesheet = document.createElement('style')
        stylesheet.setAttribute('id', ${id})
        document.head.appendChild(stylesheet)
      }
      const styles = document.createTextNode(\`${contents}\`)
      stylesheet.innerHTML = ''
      stylesheet.appendChild(styles)
    })()
  `;
    const url = URL.createObjectURL(
      new Blob([js], { type: "application/javascript" })
    );
    return url;
  }

  // Parse file and all its children through recursion
  cache[fileName] = ""; // Prevent infinite recursion
  const js = babelTransform(fileName, files[fileName]);
  const url = URL.createObjectURL(
    new Blob([js], { type: "application/javascript" })
  );
  return url;
}

export function bundle(entryPoint: string, fileRecord: Record<string, string>) {
  files = fileRecord;
  for (let out in dataToReturn) {
    const url = dataToReturn[out];
    if (url.startsWith("blob:")) URL.revokeObjectURL(dataToReturn[out]);
  }
  cache = {};
  dataToReturn = {};
  dataToReturn[entryPoint] = transformImportee(entryPoint);
  return dataToReturn;
}
