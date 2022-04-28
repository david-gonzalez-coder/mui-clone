# Mui Clone

this is a "clone" of material ui using atomic-library-core.
it's a recreation of the most components

in this package you need to replace "variant" with "type" and "color" with "subType".
for instance  
```jsx
    <Btn type="filled" subType="primary">Click here</Btn>
    <Btn type="ghost" subType="success">Click here</Btn>
```

### types 
<ul>
    <li>filled</li>
    <li>ghost</li>
    <li>text</li>
    <li>smooth</li>
</ul>

### sub types 
<ul>
    <li>primary</li>
    <li>secondary</li>
    <li>success</li>
    <li>danger</li>
    <li>warning</li>
    <li>info</li>
    <li>disabled</li>
    <li>dark</li>
</ul>

in the following tables I expose information about the components with the categories: component, status and description.

Note: although many of them have the status "done", this being the first version, the components are not perfect and with some missing functionalities.

Note: if the component is a input, you can use inputType to set the type of the input

## components
it
### Inputs
<table>
    <tr>
        <th>component</th>
        <th>state</th>
        <th>description</th>
    </tr>
    <tr>
        <td>Autocomplete</td>
        <td>Not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Button</td>
        <td>replaced</td>
        <td>this component was replaced bt Btn</td>
    </tr>
    <tr>
        <td>Btn</td>
        <td>done</td>
        <td>this is the replacement for Button. This component return directly a Button element from atomic-library-core</td>
    </tr>
    <tr>
        <td>ButtonGroup</td>
        <td>replaced</td>
        <td>this component was replaced bt BtnGroup</td>
    </tr>
     <tr>
        <td>BtnGroup</td>
        <td>done</td>
        <td>this is the replacement for ButtonGroup</td>
    </tr>
    <tr>
        <td>Checkbox</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Fab floating action button</td>
        <td>not necessary</td>
        <td> this component is not necessary since this behavior can be easily recreated by the atomic-library-core components.</td>
    </tr>
    <tr>
        <td>Radio</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>RadioGoup</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Rating</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Slider</td>
        <td>replaced</td>
        <td>This component was replaced with Range</td>
    </tr>
    <tr>
        <td>Range</td>
        <td>in process</td>
        <td>this is the replacement for Slider</td>
    </tr>
    <tr>
        <td>Select</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Switch</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>TextField</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>ToggleButton</td>
        <td>in process</td>
        <td></td>
    </tr>
</table>

### data display

<table>
    <tr>
        <td>Avatar</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>AvatarGroup</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Badge</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Chip</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Divider</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>ContentItem</td>
        <td>done</td>
        <td>this is a new component. receive the following props: 
            type,subType, disabled, size, action, onClose,
            selected, display, title, content. in a next version of this documentation wil more explained
        </td>
    </tr>
    <tr>
        <td>List</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Table</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Tooltip</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Typography</td>
        <td>not necessary</td>
        <td></td>
    </tr>
</table>

### feedback

<table>
    <tr>
        <td>Alert</td>
        <td>Done</td>
        <td></td>
    </tr>
    <tr>
        <td>Backdrop</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Dialog</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>Progress</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Skeleton</td>
        <td>done</td>
        <td>this compoenent is Span element from atomic-library-core 
            with a default. you can use use any prop of Span element, but the main ones
            in this componet are height or h, with or w, borderRadius or br and background or bg. 
            note: missing animation
        </td>
    </tr>
    <tr>
        <td>Snackbar</td>
        <td>done</td>
        <td></td>
    </tr>
</table>

### surfaces

<table>
    <tr>
        <td>Accordion</td>
        <td>done</td>
        <td>in this case, only this component is required. receive the following props:
        type, subType, action, disabled, selected, display, title, content, description, onClose, size = 'md',
        </td>
    </tr>
    <tr>
        <td>Appbar</td>
        <td>not necesary</td>
        <td></td>
    </tr>
    <tr>
        <td>Card</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>Paper</td>
        <td>not necessary</td>
        <td></td>
    </tr>
</table>

### navigation

<table>
    <tr>
        <td>BottomNavigation</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>breadcrumbs</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Drawer</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Link</td>
        <td>done</td>
        <td></td>
    </tr>
   <tr>
        <td>not yet</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>SpeedDial</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Stepper</td>
        <td>not yet</td>
        <td></td>
    </tr>
    <tr>
        <td>Taps</td>
        <td>not yet</td>
        <td></td>
    </tr>
<table>

### layout

<table>
    <tr>
        <td>Box</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>Container</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>Grid</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td>Stack</td>
        <td>not necessary</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>ImageList</td>
        <td>not necessary</td>
    </tr>
</table>


### utils

this section is different to the original, and is stil in process

<table>
    <tr>
        <td>Collapse</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>getTypes</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Slider</td>
        <td>in process</td>
        <td></td>
    </tr>
</table>
