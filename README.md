# Markdroids

### Install packages

    yarn install or yarn

### Development

    yarn dev

### Build

    yarn build


## Shortcodes example 😀

### Divider

    [Divider]
    [Divider num=3]

### Notes

    [Note]This is a note[/Note]
    [Note type=success]This is a note[/Note]
    [Note type=danger]This is a note[/Note]

### Colors

    [Color name=blue]**blue text**[/Color]
    [Color name=color]**color text**[/Color]

### Details

    [Info name='Notes'] The text is hidden [/Info]
    [Info name='Notes' open=true] The text is visible with open [/Info]

### Text align

    [Justify]Lorem ipsum dolor sit amet, consectetur [/Justify]
    [Center]Lorem ipsum dolor sit amet, consectetur [/Center]
    [Right]Lorem ipsum dolor sit amet, consectetur [/Right]
    Lorem ipsum dolor sit amet, consectetur

### Columns

    // max 3
    [Columns num=2]Velit euismod in pellentesque massa placerat. Molestie ac feugiat sed lectusvestibulum. Et malesuada fames ac turpis egestas sed tempus urna et. Gravida quis blandit turpis cursus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. [/Columns]

### Mixins

    [Columns num=2][Justify]Velit euismod in pellentesque massa
    [Color name=blue]**blue text**[/Color] placerat. [Note]This is a note[/Note] Molestie ac feugiat sed lectusvestibulum. Et malesuada fames ac turpis egestas sed tempus urna et. Gravida quis blandit turpis cursus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.[Info name='Notes'] The text is hidden [/Info][/Justify] [/Columns]


    [Columns num=2][Justify]Velit euismod in pellentesque massa
    [Color name=red]_red text_ placerat[/Color]. [Note]This is a note[/Note] Molestie ac feugiat sed lectusvestibulum. Et malesuada fames ac turpis egestas sed tempus urna et. Gravida quis blandit turpis cursus in hac. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.

    [Info name='More info' open=true] The text is hidden [/Info]

    ### header 3

    [/Justify] [/Columns]