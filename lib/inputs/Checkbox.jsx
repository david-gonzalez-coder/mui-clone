import {Input, Label, Span, Box} from 'atomic-library-core'
import {ThemeColors2 as colors} from 'atomic-library-core'
import {AiOutlineCheck, AiOutlineLine} from 'react-icons/ai'
import {useState} from 'react'



const Checkbox = ({
  checked = false,
  label,
  colorChecked = colors.main.primary,
  disabled,
  onChange = () => {},
  icon,
  checkedIcon,
  indeterminate,
  checkStyle,
  ...rest
}) => {
  const [check, setCheck] = useState(checked)
  const callback = (e) => {
    if (!disabled) {
      setCheck(!check)
      onChange(e)
    }
  }

  return (
    <>
      <Label
        inlineFlex
        y='center'
        cursor={disabled ? 'default' : 'pointer'}
        {...rest}
      > 
        {
            (icon && !check) && 
                <Span 
                inlineFlex
                y='center'
                jc='center'
                w='18px'
                h='18px'>{icon}</Span>
        }
        {
            (checkedIcon && check) && 
                <Span 
                inlineFlex
                y='center'
                jc='center'
                w='18px'
                h='18px'>{checkedIcon}</Span>
        }
        {
            (!icon || !checkedIcon) &&
            <Span
          inlineFlex
          y='center'
          jc='center'
          w='18px'
          h='18px'
          b={`2px solid ${
            disabled
              ? colors.light.disabled
              : check
              ? colorChecked
              : colors.dark.secondary
          }`}
          br='2px'
          bg={
            check ? (disabled ? colors.light.disabled : colorChecked) : 'none'
          }
          mR='10px'
          c='#fff'
          myStyle={checkStyle}
        >
            {indeterminate ? 
            <AiOutlineLine /> :
            <AiOutlineCheck
                style={{ visibility: check ? 'visible' : 'hidden' }}
            />
        }
          
        </Span>
        }
        
        <Input type='checkbox' d='none' checked={check} onChange={callback} />
        {label && <Span c={disabled && colors.main.disabled}>{label}</Span>}
      </Label>
    </>
  )
}
export default Checkbox