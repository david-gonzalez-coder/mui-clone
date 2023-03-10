import { getTypes } from '../utils'
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineClose } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'
import { createElement } from 'react'
import * as components from 'atomic-library-core'

const {Box} = components

const Alert = ({
  children,
  type = 'filled',
  subType = 'primary',
  icon,
  iconStyle,
  action,
  disabled,
  onClose,
  selected,
  size = 'md',
  component="Box",
  ...rest
}) => {
  let style = getTypes({type, subType, disabled, size,selected})

  const icons = {
    primary: <AiOutlineInfoCircle style={iconStyle} />,
    info: <AiOutlineInfoCircle style={iconStyle} />,
    warning: <AiOutlineWarning style={iconStyle} />,
    danger: <BiErrorAlt style={iconStyle} />,
    success: <BsCheck2Circle style={iconStyle} />,
  }
  return (
    createElement(
      components[component],
      {insertStyleBefore:style + '', flex: true, gap:'10px',fs: '1rem', ...rest},
      <>
        <Box m='0' w='max-content' fs='1.3rem'>
          {icon ? icon : subType && icons[subType]}
        </Box>
        <Box m='0'>{children}</Box>
        <Box m='0' w='max-content' fs="1.3rem">
          {action  ?  action : (
              onClose && <AiOutlineClose onClick={onClose} />
          )}
        </Box>
      </>
    )
  )
}
export default Alert
