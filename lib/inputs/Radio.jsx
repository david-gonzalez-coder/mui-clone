import { createElement } from 'react'
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io'
import { useState, useEffect } from 'react'
import * as components from 'atomic-library-core'
import Btn from './Btn'

const { Input, Label, Span, ThemeColors2 } = components
const COLORS = ThemeColors2
const Checkbox = ({
  component = 'Label',
  inputType = 'radio',
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
  name,
  value,
  inputProps,
  onChange = () => {},
  ...rest
}) => {
  const [check, setCheck] = useState(defaultChecked)
  const changeState = (e) => {
    if (checked === undefined) {
      setCheck(!check)
      onChange(e)
    } else {
      onChange(e)
    }
  }
  useEffect(() => {
    if (checked !== undefined) {
      setCheck(checked)
    }
  }, [checked])

  if (!icon || typeof icon === 'boolean') {
    icon = (
      <IoMdRadioButtonOff
        fontSize='1.5rem'
        color={disabled ? COLORS.main.disabled : COLORS.main.secondary}
      />
    )
  }
  if (!checkedIcon || typeof checkedIcon === 'boolean') {
    checkedIcon = (
      <IoMdRadioButtonOn
        fontSize='1.5rem'
        color={
          disabled
            ? COLORS.main.disabled
            : colorCheck
            ? colorCheck
            : COLORS.main[subType]
        }
      />
    )
  }

  return createElement(
    components[component],
    {
      insertStyleBefore:"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);",
      inlineFlex: true,
      center: true,
      cursor: disabled ? 'default' : 'pointer',
      color: disabled ? COLORS.main.disabled : 'auto',
      ...rest,
    },
    <>
      <Btn type='icon' disabled={disabled} component='Span'>
        {check ? checkedIcon : icon}
      </Btn>
      <Input
        d="none"
        value={value}
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
        type={inputType}
        {...inputProps}
      />
      {label && <Span>{label}</Span>}
      {children && <Span>{children}</Span>}
    </>
  )
}
export default Checkbox
