# Mui Clone

this is a "clone" of material ui using [atomic-library-core.](https://atomic-library.com/)
it's a recreation of the most components


## differences

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


Note: if the component is an input, you can use inputType to set the type of the input

<p>Also, when using <code>component</code> prop, you need to use capitalize, since the component uses atomic-library-core components. for  example:</p>

```jsx
<Btn component="H1" >click</Btn>
//instead of using
<Btn component="h1" >click</Btn>
//or
<Avatar component="Button" >click</Avatar>
//instead of using
<Avatar component="button" >click</Avatar>
```
## Examples
```jsx
import { Btn, BtnGroup, Checkbox, ...rest } from "mui-clone"
```

```jsx

    <Btn>default</Btn>
    <Btn type='filled' subType='primary'>Click here</Btn>
    <Btn type='ghost' subType='success'>Click here</Btn>
    <Btn type='smooth' subType='danger'>Click here</Btn>
    <Btn type='text' subType='secondary'>Click here</Btn>

    <BtnGroup>
        <Btn>Click here</Btn>
        <Btn type='ghost' subType='success'>
            Click here
        </Btn>
        <Btn type='smooth' subType='danger'>
            Click here
        </Btn>
        <Btn type='text' subType='secondary'>
            Click here
        </Btn>
    </BtnGroup>
    <BtnGroup fullRounded mT='10px' type='text' subType='success' >
        <Btn>Click here</Btn>
        <Btn>Click here</Btn>
        <Btn>Click here</Btn>
    </BtnGroup>

    <Checkbox />
    <Checkbox defaultChecked />
    <br />
    <Checkbox disabled />
    <Checkbox disabled checked />
    <br />
    <Checkbox label='label' />
    <Checkbox>label</Checkbox>
    <br />
    <Checkbox subType='success' />
    <Checkbox subType='danger' />
    <br />
    <Checkbox colorCheck='orange' />
    <Checkbox colorCheck='brown' />
    <br />
    <Checkbox flowRowReverse>Terms</Checkbox>

    <RadioGroup
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
        subType='success'
    >
        <Radio value='label 1' label='label 1' />
        <Radio value='label 2'>label 2</Radio>
    </RadioGroup>
```
## Status of components

in the following tables i expose information about the components with the categories: component, status and description.

Note: although many of them have the status "done", this being the first version, the components are not perfect and with some missing functionalities.

Note: the "not necessary" state means the component can be easily recreated by atomic-library-core components

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
        <td>this component was replaced with `Btn`</td>
    </tr>
    <tr>
        <td>Btn</td>
        <td>done</td>
        <td>this is the replacement for `Button`. This component return directly a `Button` element from atomic-library-core</td>
    </tr>
    <tr>
        <td>ButtonGroup</td>
        <td>replaced</td>
        <td>this component was replaced with `BtnGroup`</td>
    </tr>
     <tr>
        <td>BtnGroup</td>
        <td>done</td>
        <td>this is the replacement for `ButtonGroup`</td>
    </tr>
    <tr>
        <td>Checkbox</td>
        <td>done</td>
        <td></td>
    </tr>
    <tr>
        <td>Fab floating action button</td>
        <td>not necessary</td>
        <td> .</td>
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
</table>

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
