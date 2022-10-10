// utils
import { CreateElement } from "./Utils";
// config
import config from "../config/lang.json";


const Modal = CreateElement({
    element: "section", where: document.body as HTMLElement, args: {
      className: "modal",
    }
  });

const modalHeader = CreateElement({
    element: "header", where: Modal as HTMLElement, args: {
      className: "modal-header",
    }
  });

CreateElement({
    element: "button", where: modalHeader as HTMLElement, args: {
      type: "button",
      className: "modal-close",
      innerHTML: "&times;",
      onclick: (evt: Event) => {
        evt.preventDefault();
        (Modal as HTMLElement).className = "modal";
      },
    }
  });

CreateElement({
    element: "section", where: Modal as HTMLElement, args: {
      className: "modal-body",
      innerHTML: `<h3>${config.modal.title}</h3>
    <p>${config.modal.txt} <a rel="noopener" target="_blank" href="${config.modal.link}">${config.modal.linkTxt}</a></p>
    `,
    }
  });

export default Modal;