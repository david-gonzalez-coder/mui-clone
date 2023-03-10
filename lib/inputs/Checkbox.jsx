import { createElement } from 'react'
import {MdCheckBox, MdCheckBoxOutlineBlank, MdIndeterminateCheckBox} from 'react-icons/md'
import {useState, useEffect} from 'react'
import * as components from 'atomic-library-core'
import Btn from './Btn'

const {Input, Label, Span, ThemeColors2} = components
const COLORS = ThemeColors2
const Checkbox = ({
  component="Label",
  inputType = 'checkbox',
  colorCheck,
  icon,
  checkedIcon,
  indeterminateIcon,
  checked,
  defaultChecked = false,
  indeterminate,
  disabled,
  children,
  subType = 'primary',
  label,
  inputProps,
  onChange = () => {},
  ...rest
}) => {
  const [check, setCheck] = useState(defaultChecked)
  const changeState = (e) => {
    if(checked === undefined) {
      setCheck(!check)
      onChange(e)
    }else {
      onChange(e)
    }
  }
  useEffect(() => {
    if(checked !== undefined) {
      setCheck(checked)
    }
  }, [checked])

  if(!icon || typeof icon === 'boolean') {
    icon = <MdCheckBoxOutlineBlank fontSize="1.5rem" color={disabled ? COLORS.main.disabled : COLORS.main.secondary} />
  }
  if(!checkedIcon|| typeof checkedIcon === 'boolean'){
    checkedIcon = <MdCheckBox fontSize="1.5rem" color={disabled ? COLORS.main.disabled : colorCheck ? colorCheck : COLORS.main[subType]}/>
  }
  if(!indeterminateIcon || typeof indeterminateIcon === 'boolean'){
    indeterminateIcon = <MdIndeterminateCheckBox fontSize="1.5rem" color={disabled ? COLORS.main.disabled : colorCheck ? colorCheck : COLORS.main[subType]}/>
  } 
  return (
    createElement(
      components[component],
      {
        insertStyleBefore:"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);",
        inlineFlex: true,
        center: true,
        cursor: disabled ? 'default' : 'pointer',
        color: disabled ? COLORS.main.disabled : 'auto',
        ...rest
      },
      <>
      <Btn type="icon" disabled={disabled} component="Span" >
        {indeterminate ? indeterminateIcon : check ? checkedIcon  : icon}
      </Btn>
      <Input
        d="none"
        checked={check}
        disabled={disabled}
        type={inputType}
        onChange={changeState}
        {...inputProps}
      />
      {label && <Span>{label}</Span>}
      {children && <Span>{children}</Span>}
      </>
    )
  )
}
export default Checkbox