import { Box } from 'atomic-library-core'
import { ThemeColors02, BoxSizes as sizes } from '../utils'
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineClose } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'

let colorsLighter = ThemeColors02.lighter
let colorsMain = ThemeColors02.main
let colorsDark = ThemeColors02.dark

const styledButton = (
  type = 'filled',
  subType = 'primary',
  disabled,
  size = 'md'
) => {
  const types = {
    filled: `
            background: ${
              disabled ? colorsMain.disabled : colorsMain[subType]
            }; 
            color: ${disabled ? colorsDark.disabled : '#fff'};
            :hover{
                ${
                  disabled
                    ? 'cursor: no-drop;'
                    : `background: ${colorsDark[subType]}`
                };
            }
        `,
    ghost: `
            background: none;
            border: 1px solid ${
              disabled ? colorsMain.disabled : colorsMain[subType]
            };
            color:${disabled ? colorsDark.disabled : colorsMain[subType]};
            :hover{
                ${
                  disabled
                    ? 'cursor: no-drop;'
                    : `background: ${colorsLighter[subType]}`
                };
            }
        `,
    text: `
            background: none;
            color: ${disabled ? colorsMain.disabled : colorsMain[subType]};
            :hover{
                ${
                  disabled
                    ? 'cursor: no-drop;'
                    : `background: ${colorsLighter[subType]}`
                };
            }
        `,
    smooth: `
            background: ${
              disabled ? colorsLighter.disabled : colorsLighter[subType]
            };
            color: ${disabled ? colorsMain.disabled : colorsMain[subType]};
            :hover{
                ${
                  disabled
                    ? 'cursor: no-drop;'
                    : `background: ${colorsLighter[subType]}`
                };
            }
        `,
  }
  return `
    cursor: pointer;
    transition: 0.1s;
    border: none;
    :hover{transition: 0.1s}
    :active{transition: 0.1s}

    font-size:${sizes[size + 'Font']};
    padding:${sizes[size + 'Padding']};
    margin:${sizes[size + 'Margin']};
    ${types[type]}
`
}
const Alert = ({
  children,
  type = 'filled',
  subType = 'primary',
  icon,
  iconStyle,
  action,
  disabled,
  onClose,
  size = 'md',
  ...rest
}) => {
  let style = styledButton(type, subType, disabled, size)

  const icons = {
    primary: <AiOutlineInfoCircle style={iconStyle} />,
    info: <AiOutlineInfoCircle style={iconStyle} />,
    warning: <AiOutlineWarning style={iconStyle} />,
    danger: <BiErrorAlt style={iconStyle} />,
    success: <BsCheck2Circle style={iconStyle} />,
  }
  return (
    <Box insertStyleBefore={style} flex gap='10px' {...rest}>
      <Box m='0' w='max-content' fs='1.3rem'>
        {icon ? icon : subType && icons[subType]}
      </Box>
      <Box m='0'>{children}</Box>
      <Box m='0' w='max-content' fs="1.3rem">
        {action  ?  action : (
            onClose && <AiOutlineClose onClick={onClose} />
        )}
      </Box>
    </Box>
  )
}
export default Alert
