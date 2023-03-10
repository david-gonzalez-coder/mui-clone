// this function generate difference styles for the components

import { ThemeColors2, BoxSizes as sizes } from 'atomic-library-core'

const { lighter, light, main, dark, darker } = ThemeColors2

let iconPadding = {
  sm: '6px',
  md: '8px',
  lg: '10px',
}

const getTypes = ({
  type = 'filled',
  subType = 'primary',
  disabled,
  size = 'md',
  selected,
  cursor = 'pointer',
  userSelect = 'auto',
}) => {
    
  const types = {
    filled: `
        background: ${
          disabled ? lighter.disabled : selected ? dark[subType] : main[subType]
        }; 
        color: ${disabled ? main.disabled : '#fff'};
        :hover{
            background: ${selected ? darker[subType] : dark[subType]}
        }`,
    ghost: `
            background: ${
              disabled ? 'none' : selected ? lighter[subType] : 'none'
            };
            border: 1px solid ${disabled ? light.disabled : main[subType]};
            color:${disabled ? dark.disabled : main[subType]};
            :hover{
                ${
                  disabled
                    ? ''
                    : selected
                    ? `background: ${light[subType]}; color: ${darker[subType]} `
                    : `background: ${lighter[subType]}`
                };
            }
        `,
    text: `
            background: ${selected ? lighter[subType] : 'none'};
            color: ${disabled ? main.disabled : main[subType]};
            :hover{
                ${
                  disabled
                    ? ';'
                    : selected
                    ? `background: ${light[subType]}; color: ${darker[subType]} `
                    : `background: ${lighter[subType]} `
                };
            }
        `,
    smooth: `
            background: ${
              disabled
                ? lighter.disabled
                : selected
                ? light[subType]
                : lighter[subType]
            };
            color: ${disabled ? main.disabled : dark[subType]};
            :hover{
                ${!disabled ? '' : `background: ${lighter[subType]}`};
            }
        `,
    icon: `
            background: none;
            aspect-ratio: 1 / 1;
            border-radius: 100px;
            transition: background .2s;
            :hover{
                transition: background .2s;
                background: ${disabled ? 'none' : '#F2F4F4'};
            }
        `,
  }

  return ` 
    cursor: ${disabled ? 'default' : cursor};
    user-select: ${disabled ? 'none' : userSelect};
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    transition: 0.1s;
    border: none;
    :hover{transition: 0.1s}
    :active{transition: 0.1s}
    ${size &&
    `
        font-size:${sizes[size + 'Font']};
        padding:${type === 'icon' ? iconPadding[size] : sizes[size + 'Padding']};
        margin:${type === 'icon' ? '0' : sizes[size + 'Margin']};
    `
    }
    ${types[type]}
`
}
export default getTypes
