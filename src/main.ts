import Split from "split.js";
// utils
import {
  IsMobile,
  readFile,
  PrintFrame,
  SaveFileMd,
  SaveFile,
  CreateElement,
} from "./modules/Utils";
// Icons
import {
  RenderIcon,
  SaveMdIcon,
  SaveHtmlIcon,
  LightModeIcon,
  DarkModeIcon,
  PrintIcon,
  RobotIcon,
  AboutIcon,
  EyeIcon,
  EyeIconSlash,
} from "./modules/Icons";
// editor
import Editor, { RunDemoEditor } from "./modules/Editor";
// default template
import { defaultTpl, HtmlTemplate } from "./modules/Templates";
// shortcodes
import "./modules/Shortcodes.js";
// style
import "./styles/main.css";
// config
import config from "./config/lang.json";
// modal
import Modal from "./modules/Modal";
// transform markdown
import TransformMD from "./modules/TransformMd";


/**
 * - Estructure
 * -----------------------------*/
const header: HTMLElement = CreateElement({ element: "header", where: document.body, args: {} });
const headerLeft: HTMLElement = CreateElement({
    element: "section", where: header, args: {
      className: "left",
    }
  });
const headerRight: HTMLElement = CreateElement({
    element: "section", where: header, args: {
      className: "right",
    }
  });
const main: HTMLElement = CreateElement({ element: "main", where: document.body, args: {} });
const editorArea: HTMLElement = CreateElement({
    element: "textarea", where: main, args: {
      id: "editorArea",
      spellCheck: false,
    }
  });
const iFramePreview: HTMLElement = CreateElement({
    element: "iframe", where: main, args: {
      id: "iFrameContent",
      src: "./frame.html",
      frameBorder: 0,
    }
  });
/* -----------------------------*/


// overide elements
const ea = editorArea as HTMLElement;
const ifr = iFramePreview as HTMLIFrameElement;

// init app external
const iFrame = ifr.contentWindow;
// Create editor
const editor = new Editor(ea);

if (IsMobile) {
  ea.classList.add("isMobile");
  ifr.classList.add("isMobile");
} else {
  // Int split
  Split(["#editorArea", "#iFrameContent"], {
    sizes: [50, 50],
  });
}

interface KeyboardEvent {
  shiftKey: boolean;
  keyCode: number;
  ctrlKey: boolean;
}
// key events
editor.area.onkeydown = (evt: KeyboardEvent) => {
  // Press `Shift + Tab` to outdent
  if (evt.shiftKey && evt.keyCode == 9) {
    editor.outdent("    ");
    return false;
  }

  // Press `Tab` to indent
  if (evt.keyCode == 9) {
    editor.indent("    ");
    return false;
  }

  // Ctrl + Enter
  if (evt.ctrlKey && evt.keyCode == 13)
    TransformMD(editorArea as HTMLTextAreaElement, iFrame);
  // print iframe
  if (evt.ctrlKey && evt.keyCode == 80) PrintFrame();
};

/**
 * - Buttons
 * -----------------------------*/
// Create render button in desktop only
if (!IsMobile) {
  CreateElement({
      element: "button", where: headerLeft as HTMLElement, args: {
        className: "button",
        innerHTML: RenderIcon,
        type: "button",
        title: config.renderMdAlt,
        onclick: () => TransformMD(editorArea as HTMLTextAreaElement, iFrame),
      }
    });
}

// eye preview in mobile only
if (IsMobile) {
  const eyeBtn = CreateElement({
      element: "button", where: headerLeft as HTMLElement, args: {
        className: "button",
        innerHTML: EyeIcon,
        type: "button",
        title: config.renderMdAlt,
        onclick: () => togglePreview(),
      }
    });

  // toggle preview mode
  function togglePreview() {
    ea.classList.toggle("hide");
    ifr.classList.toggle("show");
    if (ea.classList.contains("hide")) {
      (eyeBtn as HTMLElement).innerHTML = EyeIconSlash;
      TransformMD(editorArea as HTMLTextAreaElement, iFrame);
    } else {
      (eyeBtn as HTMLElement).innerHTML = EyeIcon;
    }
  }
}

// open file button in desktop only
if (!IsMobile) {
  CreateElement({
      element: "input", where: headerLeft as HTMLElement, args: {
        type: "file",
        accept: ".md",
        className: "file-input",
        onchange: async (evt: { target: { files: any[]; }; }) => {
          let response: any = await readFile(evt.target.files[0]);
          (editorArea as HTMLTextAreaElement).value = response;
        },
      }
    });
}

// save to md button
CreateElement({
    element: "button", where: headerLeft as HTMLElement, args: {
      className: "button",
      innerHTML: SaveMdIcon,
      type: "button",
      title: config.saveToMdAlt,
      onclick: () => SaveFileMd(editorArea as HTMLTextAreaElement),
    }
  });

// save to html button
CreateElement({
    element: "button", where: headerLeft as HTMLElement, args: {
      className: "button",
      innerHTML: SaveHtmlIcon,
      type: "button",
      title: config.saveToHtmlAlt,
      onclick: () => SaveFile(),
    }
  });

let darkModeBtn = CreateElement({
    element: "button", where: headerRight as HTMLElement, args: {
      className: "button",
      innerHTML: LightModeIcon,
      type: "button",
      title: config.darkMode,
      onclick: () => {
        if (document.body.getAttribute("data-theme") === "light") {
          document.body.setAttribute("data-theme", "dark");
          window.frames[0].document.body.setAttribute("data-theme", "dark");
          (darkModeBtn as HTMLElement).innerHTML = DarkModeIcon;
        } else {
          document.body.setAttribute("data-theme", "light");
          window.frames[0].document.body.setAttribute("data-theme", "light");
          (darkModeBtn as HTMLElement).innerHTML = LightModeIcon;
        }
      },
    }
  });

// print button
CreateElement({
    element: "button", where: headerRight as HTMLElement, args: {
      className: "button",
      innerHTML: PrintIcon,
      type: "button",
      title: config.printAlt,
      onclick: () => PrintFrame(),
    }
  });

// demo button
CreateElement({
    element: "button", where: headerRight as HTMLElement, args: {
      className: "button",
      innerHTML: RobotIcon,
      type: "button",
      title: config.demoAlt,
      onclick: () => RunDemoEditor(editor),
    }
  });

// About button
CreateElement({
    element: "button", where: headerRight as HTMLElement, args: {
      className: "button",
      innerHTML: AboutIcon,
      type: "button",
      title: config.aboutAlt,
      onclick: () => {
        (Modal as HTMLElement).className = "modal modal-open";
      },
    }
  });
/*-----------------------------*/

// Check localStorage if exists
// and if exists append in editor
window.localStorage.getItem("markdroids-saved")
  ? editor.insert(window.localStorage.getItem("markdroids-saved"))
  : editor.insert(defaultTpl);

  
// on load
window.addEventListener("load", async () => {
  // check theme color
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.setAttribute("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
  }
  // compile markdown
  TransformMD(editorArea as HTMLTextAreaElement, iFrame);
});
