import shortcode from "shortcode-parser";
import marked from "marked";

/**
 *  [Info] text here [/Info]
 *  [Info name=note] text here [/Info]
 */
shortcode.add("Info", (element: HTMLElement | unknown, options: InfoOpts) => {
  let name = options.name ? options.name : "Info";
  let open = options.open ? "open" : "";
  return `<details class="info" ${open}><summary>${name}</summary><div class="info-body">${marked.parseInline(
    element
  )}</div></details>`;
});

/**
 *  [Color name=red] text here [/Color]
 */
shortcode.add(
  "Color",
  function (element: HTMLElement | unknown, options: ColorOpts) {
    var color = options.name ? options.name : "red";
    return `<span style="color:${color}">${marked.parseInline(element)}</span>`;
  }
);

/**
 *  [Justify] text here [/Justify]
 */
shortcode.add(
  "Justify",
  function (element: HTMLElement | unknown, options?: ColorOpts) {
    return `<section style="text-align:justify">${marked.parse(element)}</section>`;
  }
);

/**
 *  [Center] text here [/Center]
 */
shortcode.add(
  "Center",
  function (element: HTMLElement | unknown, options?: ColorOpts) {
    return `<section style="text-align:center">${marked.parse(element)}</section>`;
  }
);

/**
 *  [Right] text here [/Right]
 */
shortcode.add(
  "Right",
  function (element: HTMLElement | unknown, options?: ColorOpts) {
    return `<section style="text-align:right">${marked.parse(element)}</section>`;
  }
);
/**
 *  [Divider num=3]
 */
shortcode.add(
  "Divider",
  function (element: HTMLElement | unknown, options: DividerOpts) {
    let num = options.num ? options.num : 1;
    return `<div class="divider" style="margin:${num}em auto">&nbsp;</div>`;
  }
);

/**
 *  [Note] text here [/Note]
 *  [Note type=info] text here [/Note]
 */
shortcode.add(
  "Note",
  function (element: HTMLElement | unknown, options: NoteOpts) {
    let cls = options.type
      ? `class="note-${options.type}"`
      : 'class="note-info"';
    return `<div ${cls}>${marked.parseInline(element)}</div>`;
  }
);

/**
 *  [Columns num=3] text here [/Columns]
 */
shortcode.add(
  "Columns",
  function (element: HTMLElement | unknown, options: ColumnsOpts) {
    let num = options.num ? options.num : 2;
    return `<section class="col-${num}">${marked.parseInline(element)}</section>`;
  }
);


/**
 *  [Comment] text here [/Comment]
 */
 shortcode.add(
  "Comment",
  function (element: HTMLElement | unknown, options?: null) {
    return `<!--  ${element} -->`;
  }
);
