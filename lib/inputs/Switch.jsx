import { useState, useEffect, createElement } from 'react'
import * as components from 'atomic-library-core'

const { Input, Span, ThemeColors2 } = components
const Colors = ThemeColors2

const Switch = ({
  
  children,
  component = 'Label',
  inputType = 'checkbox',
  checked,
  subType = 'primary',
  disabled,
  defaultChecked = false,
  onChange = () => {},
  label,
  inputProps,
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
  return createElement(
    components[component],
    {
      insertStyleBefore:"-webkit-tap-highlight-color: rgba(0, 0, 0, 0);",
      inlineFlex: true,
      y: 'center',
      cursor: disabled ? 'default' : 'pointer',
      ...rest
    },
    <>
      <Span
        c={disabled && colors.main.disabled}
        pt='relative'
        w='36px'
        h='14px'
        br='40px'
        m='8px'
        bg={check ? Colors.light[subType] : Colors.light.disabled}
        d='inline-block'
        myStyle={{
          '::after': {
            content: "''",
            pt: 'absolute',
            w: '20px',
            h: '20px',
            br: '20px',
            bg: check ? Colors.main[subType] : '#fff',
            bxSw: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
            tt: '.1s',
            t: 'calc(50% - 10px)',
            tf: check ? 'translate(16px)' : '',
          },
        }}
        
      />
      <Input
        type={inputType}
        d='none'
        disabled={disabled}
        onChange={changeState}
        {...inputProps}
      />
      {label && <Span>{label}</Span>}
      {children && <Span>{children}</Span>}
    </>
  )
}
export default Switch
