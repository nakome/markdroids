export const defaultTpl = `# Hi i'm Mark.. Markdroids

I'm a Markdown editor but special, Why?, because i have Shortcodes.

Click on robot icon for demo.

I can add [Color name=red] Color [/Color] like [Color name=blue] Blue[/Color] or [Color name=green] green [/Color]

[Info name='Notes' open]
[Note type=info]I can add Notes with info color[/Note]
[Note type=success]I can add Notes with success color[/Note]
[Note type=danger]I can add Notes with danger color[/Note]
[/Info]

[Info name='Align text']
[Center]## Center headers or text[/Center]
[Right]## Right headers[/Right]
[Justify]## Center headers[/Justify]
[Justify]Jusfify text, En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.[/Justify]
[/Info]`;

export const shortcodesTpl = `
### Notes
[Note]En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos yquebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.[/Note]
[Note type=success]En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos yquebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.[/Note]
[Note type=danger]En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos yquebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.[/Note]

### Justify text?
[Justify]En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos yquebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.[/Justify]

### Right text?
[Right]En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos yquebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.[/Right]

### Colors
[Color name=blue]**blue text** ➡[/Color]
[Color name=red]**red text** ➡[/Color]
[Color name=orange]**orange text** ➡[/Color]

### Info hidden

[Info name='Notes' open]
[Note type=info]I can add Notes with info color[/Note]
[Note type=success]I can add Notes with success color[/Note]
[Note type=danger]I can add Notes with danger color[/Note]
[/Info]

### Columns

[Columns num=2]
[Justify]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. Quis varius quam quisque id diam vel. Nunc lobortis mattis aliquam faucibus purus. Vel pharetra vel turpis nunc eget. Et netus et malesuada fames ac. Mauris a diam maecenas sed enim. Dolor morbi non arcu risus quis varius quam quisque. Justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit pellentesque habitant. In mollis nunc sed id semper. Et odio pellentesque diam volutpat commodo sed egestas.
Velit euismod in pellentesque massa placerat. Molestie ac feugiat sed lectusvestibulum. Et malesuada fames ac turpis egestas sed tempus urna et. Gravida quis blandit turpis cursus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Iaculis eu non diam phasellus vestibulum. Eget aliquet nibh praesent tristique. Tortor posuere ac ut consequat semper viverra. Ac turpis egestas maecenas pharetra convallis posuere morbi. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Enim lobortis scelerisque fermentum dui. Aliquet lectus proin nibh nisl. Elit eget gravida cum sociis natoque penatibus et magnis dis. Faucibus purus in massa tempor nec feugiat. Malesuada fames ac turpis egestas sed tempus urna et.
[/Justify]
[/Columns]

[Columns num=3]
[Justify]Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non. Quis varius quam quisque id diam vel. Nunc lobortis mattis aliquam faucibus purus. Vel pharetra vel turpis nunc eget. Et netus et malesuada fames ac. Mauris a diam maecenas sed enim. Dolor morbi non arcu risus quis varius quam quisque. Justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit pellentesque habitant. In mollis nunc sed id semper. Et odio pellentesque diam volutpat commodo sed egestas.
Velit euismod in pellentesque massa placerat. Molestie ac feugiat sed lectusvestibulum. Et malesuada fames ac turpis egestas sed tempus urna et. Gravida quis blandit turpis cursus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Iaculis eu non diam phasellus vestibulum. Eget aliquet nibh praesent tristique. Tortor posuere ac ut consequat semper viverra. Ac turpis egestas maecenas pharetra convallis posuere morbi. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Enim lobortis scelerisque fermentum dui. Aliquet lectus proin nibh nisl. Elit eget gravida cum sociis natoque penatibus et magnis dis. Faucibus purus in massa tempor nec feugiat. Malesuada fames ac turpis egestas sed tempus urna et.
[/Justify]
[/Columns]`;


export const HtmlTemplate = (
  dataTheme: string,
  body: string
) => `<!Doctype html><html lang="en"><head><title>Markdroids html file</title><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style rel="stylesheet">body{font-family:Helvetica,arial,sans-serif;font-size:14px;line-height:1.6;background-color:#fff;padding:30px}body > :first-child{margin-top:0!important}body > :last-child{margin-bottom:0!important}a{color:#4183c4}a.absent{color:#c00}a.anchor{display:block;padding-left:30px;margin-left:-30px;cursor:pointer;position:absolute;top:0;left:0;bottom:0}h1,h2,h3,h4,h5,h6{margin:20px 0 10px;padding:0;font-weight:700;-webkit-font-smoothing:antialiased;cursor:text;position:relative}h1:hover a.anchor,h2:hover a.anchor,h3:hover a.anchor,h4:hover a.anchor,h5:hover a.anchor,h6:hover a.anchor{text-decoration:none}h1 tt,h1 code{font-size:inherit}h2 tt,h2 code{font-size:inherit}h3 tt,h3 code{font-size:inherit}h4 tt,h4 code{font-size:inherit}h5 tt,h5 code{font-size:inherit}h6 tt,h6 code{font-size:inherit}h1{font-size:28px;color:#000}h2{font-size:24px;border-bottom:1px solid #ccc;color:#000}h3{font-size:18px}h4{font-size:16px}h5{font-size:14px}h6{color:#777;font-size:14px}p,blockquote,ul,ol,dl,li,table,pre{margin:15px 0}hr{border:0 none;color:#ccc;height:4px;padding:0}body > h2:first-child{margin-top:0;padding-top:0}body > h1:first-child{margin-top:0;padding-top:0}body > h1:first-child + h2{margin-top:0;padding-top:0}body > h3:first-child,body > h4:first-child,body > h5:first-child,body > h6:first-child{margin-top:0;padding-top:0}a:first-child h1,a:first-child h2,a:first-child h3,a:first-child h4,a:first-child h5,a:first-child h6{margin-top:0;padding-top:0}h1 p,h2 p,h3 p,h4 p,h5 p,h6 p{margin-top:0}li p.first{display:inline-block}li{margin:0}ul,ol{padding-left:30px}ul :first-child,ol :first-child{margin-top:0}dl{padding:0}dl dt{font-size:14px;font-weight:700;font-style:italic;padding:0;margin:15px 0 5px}dl dt:first-child{padding:0}dl dt > :first-child{margin-top:0}dl dt > :last-child{margin-bottom:0}dl dd{margin:0 0 15px;padding:0 15px}dl dd > :first-child{margin-top:0}dl dd > :last-child{margin-bottom:0}blockquote{border-left:4px solid #ddd;padding:0 15px;color:#777}blockquote > :first-child{margin-top:0}blockquote > :last-child{margin-bottom:0}table{padding:0;border-collapse:collapse;width:100%;margin:30px auto}table tr{border-top:1px solid #ccc;background-color:#fff;margin:0;padding:0}table tr:nth-child(2n){background-color:#f8f8f8}table tr th{font-weight:700;border:1px solid #ccc;margin:0;padding:6px 13px}table tr td{border:1px solid #ccc;margin:0;padding:6px 13px}table tr th :first-child,table tr td :first-child{margin-top:0}table tr th :last-child,table tr td :last-child{margin-bottom:0}img{max-width:100%}span.frame{display:block;overflow:hidden}span.frame > span{border:1px solid #ddd;display:block;float:left;overflow:hidden;margin:13px 0 0;padding:7px;width:auto}span.frame span img{display:block;float:left}span.frame span span{clear:both;color:#333;display:block;padding:5px 0 0}span.align-center{display:block;overflow:hidden;clear:both}span.align-center > span{display:block;overflow:hidden;margin:13px auto 0;text-align:center}span.align-center span img{margin:0 auto;text-align:center}span.align-right{display:block;overflow:hidden;clear:both}span.align-right > span{display:block;overflow:hidden;margin:13px 0 0;text-align:right}span.align-right span img{margin:0;text-align:right}span.float-left{display:block;margin-right:13px;overflow:hidden;float:left}span.float-left span{margin:13px 0 0}span.float-right{display:block;margin-left:13px;overflow:hidden;float:right}span.float-right > span{display:block;overflow:hidden;margin:13px auto 0;text-align:right}code,tt{margin:0 2px;padding:0 5px;white-space:nowrap;border:1px solid #eaeaea;background-color:#f8f8f8;border-radius:3px}pre code{margin:0;padding:0;white-space:pre;border:none;background:transparent}.highlight pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px}pre{background-color:#f8f8f8;border:1px solid #ccc;font-size:13px;line-height:19px;overflow:auto;padding:6px 10px;border-radius:3px;margin:34px auto}pre code,pre tt{background-color:transparent;border:none}sup{font-size:.83em;vertical-align:super;line-height:0}*{-webkit-print-color-adjust:exact}@media screen and (min-width: 914px){body{width:854px;margin:0 auto}}@media print{table,pre{page-break-inside:avoid}pre{word-wrap:break-word}}img{display:block;max-width:100%;margin:20px auto;box-shadow:2px 3px 3px #c7c7c7}li.task{list-style-type:none}.col-2{column-count:2;column-gap:20px;column-rule:1px solid #eee;margin:20px auto;padding-bottom:10px;border-bottom:1px solid #eee}.col-3{column-count:3;column-gap:10px;column-rule:1px solid #eee;margin:20px auto;padding-bottom:10px;border-bottom:1px dotted #eee}.divider{break-inside:avoid;page-break-inside:avoid}.note-info{background:#eefbff;padding:5px 10px;border:1px solid #c0def7;color:#2b5274;margin:20px auto}.note-success{background:#f0ffee;padding:5px 10px;border:1px solid #c0f7d8;color:#2b7434;margin:20px auto}.note-danger{background:#fee;padding:5px 10px;border:1px solid #f7c0c0;color:#742b2b;margin:20px auto}@media print{*{background:transparent!important;color:#000!important;filter:none!important;-ms-filter:none!important}body{margin:0;padding:0;font-size:12pt;max-width:100%}a,a:visited{text-decoration:underline}hr{height:1px;border:0;border-bottom:1px solid #000}a[href]:after{content:" (" attr(href) ")"}abbr[title]:after{content:" (" attr(title) ")"}blockquote{border-left:4px solid #ddd;padding:0 15px;page-break-inside:avoid}tr,img{page-break-inside:avoid}table{width:100%}img{max-width:100%!important}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}a[href]:after{content:none}}</style>
</head><body ${dataTheme}>${body}</body></html>`;
