import { Button }from 'atomic-library-core'
import { ThemeColors02, BoxSizes as sizes } from '../utils'

let colorsLighter = ThemeColors02.lighter
let colorsLight = ThemeColors02.light
let colorsMain = ThemeColors02.main
let colorsDark = ThemeColors02.dark
let colorsDarker = ThemeColors02.darker
const styledButton = (type = "filled", subType = "primary", disabled, size = "md", selected) => { 
    const types = {
        filled: disabled ? `
                background: ${colorsLighter.disabled};
                color: ${colorsMain.disabled};
                cursor: no-drop; 
                ` : `
                background: ${selected ?  colorsDark[subType] : colorsMain[subType] }; 
                color: #fff;
                :hover{
                    ${selected ? `background: ${colorsDarker[subType]}` :
                    `background: ${colorsDark[subType]}`};
                }`,
        ghost: `
            background: ${disabled ?  'none' : selected ? colorsLighter[subType] : 'none'};
            border: 1px solid ${disabled ? colorsLight.disabled : colorsMain[subType]};
            color:${disabled ? colorsDark.disabled : colorsMain[subType]};
            :hover{
                ${disabled ? 'cursor: no-drop;' : 
                    selected ? `background: ${colorsLight[subType]}; color: ${colorsDarker[subType]} ` : 
                    `background: ${colorsLighter[subType]}`};
            }
        `, 
        text: `
            background: ${selected ? colorsLighter[subType] : 'none'};
            color: ${disabled ? colorsMain.disabled : colorsMain[subType]};
            :hover{
                ${disabled ? 'cursor: no-drop;' : selected ? `background: ${colorsLight[subType]}; color: ${colorsDarker[subType]} ` : 
                `background: ${colorsLighter[subType]} `
            };
            }
        `,
        smooth: `
            background: ${disabled ? colorsLighter.disabled : selected ? colorsLight[subType] : colorsLighter[subType]};
            color: ${disabled ? colorsMain.disabled : colorsMain[subType]};
            :hover{
                ${disabled ? 'cursor: no-drop;' : `background: ${colorsLighter[subType]}`};
            }
        `
    }

    return `
    cursor: pointer;
    transition: 0.1s;
    border: none;
    :hover{transition: 0.1s}
    :active{transition: 0.1s}

    ${size && `
    font-size:${sizes[size + 'Font']};
    padding:${sizes[size + 'Padding']};
    margin:${sizes[size + 'Margin']};`
    }
    ${types[type]}
`}

const Btn = ({type = "filled", subType = "primary", disabled, selected, size = "md", ...rest}) =>{
    let style = styledButton(type, subType, disabled, size, selected)
    return <Button insertStyleBefore={style} {...rest} />   
}
export default Btn