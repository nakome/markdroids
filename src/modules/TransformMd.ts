import marked from "marked";
import shortcode from "shortcode-parser";
// utils
import { encodeUnicode } from "./Utils";

// use options
marked.use({
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

// convert tasks with checkbox
const renderer = {
  listitem(text: string, task: any) {
    if (task) {
      return `<li class="task"><label>${text.replace(
        /^<li>([\s\S]*)<\/li>\n$/,
        "$1"
      )}</label></li>`;
    } else {
      return `<li>${text}</li>`;
    }
  },
};

// use tasks
marked.use({ renderer });

/**
 * Transform markdown and send to iframe
 */
export default function TransformMD(inputEl:HTMLTextAreaElement, outpoutEl:any) {
  // editor value
  let editorValue = (inputEl as HTMLTextAreaElement).value;
  // iframe main content
  let main = outpoutEl.document.querySelector("main");
  // clean iframe main content
  main.innerHTML = "";
  // save editor value in localStorage
  window.localStorage.setItem("markdroids-saved", editorValue);
  // parse shortcodes
  const parse = shortcode.parse(editorValue),
    content = marked(parse);

  // send to iframe
  outpoutEl.postMessage(
    JSON.stringify({
      body: encodeUnicode(content),
    }),
    "*"
  );
}
