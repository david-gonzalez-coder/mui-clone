import { Box, Span } from 'atomic-library-core'
import { getTypes } from '../utils'
import { AiOutlineClose } from 'react-icons/ai'


const chip = ({
  children,
  type = 'ghost',
  subType = 'primary',
  icon,
  iconStyle,
  action,
  disabled,
  onClose,
  selected,
  avatar,
  size = 'md',
  ...rest
}) => {
  let style = getTypes(type, subType, disabled, size="sm",selected)

  return (
    <Box insertStyleBefore={style} w='max-content' br="100px" flex y="center" gap='10px' {...rest}>
        {icon && 
            <Box m='0' w='max-content'  of="hidden">
                {icon}
            </Box>
        }
        {avatar && avatar}
      <Span>{children}</Span>
      {(action || onClose) &&
        <Box m='0' w='max-content' >
            {action  ?  action : (
                onClose && <AiOutlineClose onClick={onClose} />
            )}
        </Box>
      }
      
    </Box>
  )
}
export default chip
