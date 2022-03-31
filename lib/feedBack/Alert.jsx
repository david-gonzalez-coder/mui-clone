import { Box } from 'atomic-library-core'
import { getTypes } from '../utils'
import { AiOutlineInfoCircle, AiOutlineWarning, AiOutlineClose } from 'react-icons/ai'
import { BiErrorAlt } from 'react-icons/bi'
import { BsCheck2Circle } from 'react-icons/bs'

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
  ...rest
}) => {
  let style = getTypes(type, subType, disabled, size,selected)

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
