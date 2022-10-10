import { Sleep } from "./Utils";
import { shortcodesTpl } from "./Templates";

export default class Editor<T> {
  area: any;
  undo: number;
  redo: number;
  history: any[];

  public constructor(source: HTMLElement) {
    this.history = [];
    this.undo = 0;
    this.redo = null;
    this.area = source;

    this.history[this.undo] = {
      value: this.area.value,
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.undo++;
  }

  /**
   * Collect data from selected text inside a textarea
   *
   * <code>
   *   var editor = new Editor(elem);
   *   elem.onmouseup = function() {
   *       alert(editor.selection().start);
   *       alert(editor.selection().end);
   *       alert(editor.selection().value);
   *   };
   * </code>
   *
   */
  selection() {
    let start = this.area.selectionStart,
      end = this.area.selectionEnd,
      value = this.area.value.substring(start, end),
      before = this.area.value.substring(0, start),
      after = this.area.value.substring(end),
      data = {
        start: start,
        end: end,
        value: value,
        before: before,
        after: after,
      };
    return data;
  }

  /**
   * Select portion of text inside a textarea
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.select(7, 11);
   * </code>
   *
   */
  select(start: number, end: number) {
    this.area.focus();
    this.area.setSelectionRange(start, end);
  }

  /**
   * Replace portion of selected text inside a textarea with something
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.replace(/foo/, "bar");
   * </code>
   *
   */
  replace(from: RegExp, to: string) {
    let sel: any = this.selection(),
      start: number = sel.start,
      end: number = sel.end,
      selections = sel.value.replace(from, to);

    this.area.value = sel.before + selections + sel.after;
    this.select(start, start + selections.length);
    this.updateHistory(this.area.value, {
      value: this.area.value,
      selectionStart: start,
      selectionEnd: start + selections.length,
    });
  }

  /**
   * Replace selected text inside a textarea with something
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.insert('foo');
   * </code>
   *
   */
  insert(insertion:string) {
    let sel = this.selection(),
      start: number = sel.start,
      end: number = sel.end;

    this.area.value = sel.before + insertion + sel.after;
    this.select(start + insertion.length, start + insertion.length);

    this.updateHistory(this.area.value, {
      value: this.area.value,
      selectionStart: start + insertion.length,
      selectionEnd: start + insertion.length,
    });
  }

  /**
   * Wrap selected text inside a textarea with something
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.wrap('<strong>', '</strong>');
   * </code>
   *
   */
  wrap(open: string, close: string) {
    let sel = this.selection(),
      selections = sel.value,
      before = sel.before,
      after = sel.after;

    this.area.value = before + open + selections + close + after;
    this.select(
      before.length + open.length,
      before.length + open.length + selections.length
    );

    this.updateHistory(this.area.value, {
      value: this.area.value,
      selectionStart: before.length + open.length,
      selectionEnd: before.length + open.length + selections.length,
    });
  }

  /**
   * Indent selected text inside a textarea with something
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.indent('\t');
   * </code>
   *
   */
  indent(chars: string) {
    let sel = this.selection();
    if (sel.value.length > 0) {
      // Multi line
      this.replace(/(^|\n)([^\n])/gm as any, "$1" + chars + "$2");
    } else {
      // Single line
      this.area.value = sel.before + chars + sel.value + sel.after;
      this.select(sel.start + chars.length, sel.start + chars.length);
      this.updateHistory(this.area.value, {
        value: this.area.value,
        selectionStart: sel.start + chars.length,
        selectionEnd: sel.start + chars.length,
      });
    }
  }

  /**
   * Outdent selected text inside a textarea from something
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.outdent('\t');
   * </code>
   *
   */
  outdent(chars: string) {
    let sel = this.selection();

    if (sel.value.length > 0) {
      let regex = `(^|\n)${chars}`;
      let multiline: string | any = new RegExp(regex, "gm");
      // Multi line
      this.replace(multiline, "$1");
    } else {
      // Single line
      let before = sel.before.replace(new RegExp(chars + "$"), "");
      this.area.value = before + sel.value + sel.after;
      this.select(before.length, before.length);
      this.updateHistory(this.area.value, {
        value: this.area.value,
        selectionStart: before.length,
        selectionEnd: before.length,
      });
    }
  }

  /**
   * Call available history data
   *
   * <code>
   *   var editor = new Editor(elem);
   *   alert(editor.callHistory(2).value);
   *   alert(editor.callHistory(2).selectionStart);
   *   alert(editor.callHistory(2).selectionEnd);
   * </code>
   *
   */
  callHistory(index: number) {
    return typeof index == "number" ? this.history[index] : this.history;
  }

  /**
   * Update history data
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.area.onkeydown = function() {
   *       editor.updateHistory();
   *   };
   * </code>
   *
   */
  updateHistory(data: string, index: Object) {
    let value =
      typeof data != "undefined"
        ? data
        : {
            value: this.area.value,
            selectionStart: this.selection().start,
            selectionEnd: this.selection().end,
          };

    this.history[typeof index == "number" ? index : this.undo] = value;
    this.undo++;
  }

  /**
   * Undo from previous action or previous Redo
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.undo();
   * </code>
   *
   */
  undoHistory(callback: void) {
    let data: any;
    if (this.history.length > 1) {
      if (this.undo > 1) {
        this.undo--;
      } else {
        this.undo = 1;
      }
      data = this.callHistory(this.undo - 1);
      this.redo = this.undo <= 0 ? this.undo - 1 : this.undo;
    } else {
      return;
    }
    this.area.value = data.value;
    this.select(data.selectionStart, data.selectionEnd);
    if (typeof callback == "function") callback;
  }

  /**
   * Redo from previous Undo
   *
   * <code>
   *   var editor = new Editor(elem);
   *   editor.redo();
   * </code>
   *
   */

  redoHistory(callback: void) {
    let data: any;
    if (this.redo !== null) {
      data = this.callHistory(this.redo);
      if (this.redo < this.history.length - 1) {
        this.redo++;
      } else {
        this.redo = this.history.length - 1;
      }
      this.undo = this.redo >= history.length - 1 ? this.redo + 1 : this.redo;
    } else {
      return;
    }
    this.area.value = data.value;
    this.select(data.selectionStart, data.selectionEnd);
    // console.log(redo);
    if (typeof callback == "function") callback;
  }
}

type editorOpts = {
  select: (arg0: number, arg1: number) => void,
  insert: (arg0: string) => void,
  wrap: (arg0: string, arg1: string) => void,
  replace:(arg0:RegExp, arg1: string) => void,
  indent: (arg0:string) => void,
  outdent: (arg0:string) => void
}

export function RunDemoEditor(editor:editorOpts) {
  const textArea = document.getElementById("editorArea") as HTMLTextAreaElement;
  Sleep(500).then(() => editor.select(0, textArea.value.length));
  Sleep(1000).then(() => editor.insert("Hi, i'm Mark, Markdroids\n"));
  Sleep(2500).then(() =>
    editor.insert("I have been created to edit Markdown files\n")
  );
  Sleep(3500).then(() => editor.insert("With Shortocodes, like\n"));
  Sleep(4000).then(() => editor.wrap("[Note]", "[/Note]\n"));
  Sleep(5000).then(() => editor.insert("I'm inside one **note**"));
  Sleep(6000).then(() => editor.wrap(" [Color name=blue]", "[/Color]"));
  Sleep(7000).then(() => editor.insert("I'm a asdf"));
  Sleep(8000).then(() =>
    editor.select(textArea.value.length - 20, textArea.value.length)
  );
  Sleep(9000).then(() => editor.replace(/asdf/, "color"));
  Sleep(10000).then(() => editor.insert("color[/Color][/Note]\nSorry :(\n"));
  Sleep(11000).then(() => editor.insert("You can use Tabs to indent"));
  Sleep(12000).then(() => editor.indent("\t"));
  Sleep(13000).then(() => editor.insert(":)"));
  Sleep(14000).then(() =>
    editor.select(textArea.value.length - 3, textArea.value.length)
  );
  Sleep(14500).then(() => editor.insert("\n"));
  Sleep(15000).then(() => editor.insert("And obviously using Markdown\n"));
  Sleep(16000).then(() => editor.select(0, textArea.value.length));
  Sleep(17000).then(() => editor.insert("# I'm a header 1\n\n"));
  Sleep(18000).then(() =>
    editor.insert(
      "A paragrahps, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n"
    )
  );
  Sleep(19000).then(() => editor.insert("> Blockquotes\n\n"));
  Sleep(20000).then(() => editor.insert(`## Shortcodes example 😀\n`));
  Sleep(21000).then(() => editor.insert(shortcodesTpl));
}
