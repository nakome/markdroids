import { HtmlTemplate } from "./Templates";

/**
 * Check if is mobile
 */
export const IsMobile = !!navigator.userAgent.toLowerCase().match(/mobile/i);

/**
 * Log with color
 *
 * @param message string message
 */
export const Log = (message: string | number) => {
  let baseStyles = [
    "color: #fff",
    "background-color: #444",
    "padding: 2px 4px",
    "border-radius: 2px",
  ].join(";");
  console.log(`%cMarkdroids: ${message}`, baseStyles);
};

/**
 * Print iframe
 * @returns
 */
export const PrintFrame = () => {
  return window.frames[0].print();
};

/**
 * Encode string
 *
 * @param str string
 * @returns
 */
export function encodeUnicode(str: string) {
  // first we use encodeURIComponent to get percent-encoded UTF-8,
  // then we convert the percent encodings into raw bytes which
  // can be fed into btoa.
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match: any, p1: string) {
        let n: string = `0x${p1}`;
        return String.fromCharCode(<string | any>n);
      }
    )
  );
}

/**
 * Decode string
 *
 * @param str string
 * @returns
 */
export function decodeUnicode(str: string) {
  // Going backwards: from bytestream, to percent-encoding, to original string.
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

/**
 * Wait a momment solution
 *
 * @param milliseconds number
 * @returns
 */
export const Sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/**
 * Save html file
 */
export const SaveFile = () => {
  const body = window.frames[0].document.querySelector("main");
  // add theme
  let dataTheme = "";
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    dataTheme = 'data-theme="dark"';
    window.frames[0].document.body.setAttribute("data-theme", "dark");
  } else {
    dataTheme = 'data-theme="light"';
    window.frames[0].document.body.setAttribute("data-theme", "light");
  }
  // template
  const template = HtmlTemplate(dataTheme, body.innerHTML);
  // blob
  const blob = new Blob([template], {
    type: "text/html",
  });
  // create link
  const anchor = document.createElement("a");
  // download file
  anchor.download = "markdroids-file.html";
  anchor.href = window.URL.createObjectURL(blob);
  anchor.dataset.downloadurl = ["text/html", anchor.download, anchor.href].join(
    ":"
  );
  anchor.click();
};

/**
 * Save Markdown file
 *
 * @param editor HTMLTextAreaElement
 */
export const SaveFileMd = (editor: HTMLTextAreaElement) => {
  const blob = new Blob([editor.value], {
    type: "text/markdown",
  });

  const anchor = document.createElement("a");
  // download file
  anchor.download = "markdroids-file.md";
  anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
  anchor.dataset.downloadurl = [
    "text/markdown",
    anchor.download,
    anchor.href,
  ].join(":");
  anchor.click();
};

/**
 * Read file
 *
 * @param file HTMLInputElement
 * @returns
 */
export const readFile = (file: HTMLInputElement) => {
  const progress = (evt: any) => {
    const loadingPercentage = (100 * evt.loaded) / evt.total;
    Log(loadingPercentage);
  };

  return new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.addEventListener("loadstart", () => Log("Start Loading"));
    fr.addEventListener("load", (res) => resolve(res.target.result), false);
    fr.addEventListener("progress", (res) => progress(res), false);
    fr.addEventListener("error", (err) => reject(err), false);
    fr.addEventListener("abort", () => Log("Interrupted"), false);
    try {
      fr.readAsText(file as any);
      file.value = "";
    } catch (error: object | any) {
      Log(error.message);
    }
  });
};

/**
 *
 * @param name string
 * @param editor
 * @returns
 */
export const GetTemplate = async (
  name: string,
  editor: HTMLTextAreaElement
) => {
  let url = `./public/${name}.md`;
  let response = await fetch(url);
  let output = await response.text();
  return (editor.value = output);
};

/**
 * Create element tag
 *
 * @param element tag name
 * @param where element to append
 * @param args arguments
 * @returns
 */
type createElementOpts = {
  element: string;
  where: HTMLElement;
  args?: object;
}
export function CreateElement({
  element,
  where,
  args,
}: createElementOpts):HTMLElement {
  let tagEl = document.createElement(element);
  if (args) {
    for (const [key, val] of Object.entries(args)) {
      let k = key as keyof typeof args;
      (tagEl[k] as string) = val;
    }
  }
  try {
    where.appendChild(tagEl);
    return tagEl;
  } catch (error: object | any) {
    Log(error.message);
  }
}
