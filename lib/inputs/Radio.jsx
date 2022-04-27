import {Input, Label, Span, ThemeColors2 as colors} from 'atomic-library-core'

const Radio = ({
  checked = false,
  label,
  value,
  inputAtt,
  colorChecked = colors.main.primary,
  onChange = () => {},
  disabled,
  icon,
  name,
  checkedIcon,
  checkStyle,
  ...rest
}) => {

  return (
    <>
      <Label
      m="10px"
        inlineFlex
        y='center'
        cursor={disabled ? 'default' : 'pointer'}
        {...rest}
      > 
        {
            (icon && !checked) && 
                <Span 
                inlineFlex
                y='center'
                jc='center'
                w='18px'
                h='18px'>{icon}</Span>
        }
        {
            (checkedIcon && checked) && 
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
                  : checked
                  ? colorChecked
                  : colors.dark.secondary
              }`}
              br='10px'
              bg="none"
              mR='10px'
              pt="relative"
              myStyle={{
                '::after': {
                  content: "''",
                  w: "8px",
                  h:"8px",
                  br: "8px",
                  bg: disabled
                  ? colors.light.disabled
                  : checked
                  ? colorChecked
                  : colors.dark.secondary,
                  pt: "absolute",
                  l: 'calc(50% - 4px)',
                  t: 'calc(50% - 4px)',
                  tf: `scale(${checked ? '1' : '0'})`,
                  tt: '.15s'
                }
              }}
              superStyle={checkStyle}
            />
        }
        
        <Input type='radio'  d="none" value={value} checked={checked} name={name} onChange={onChange} {...inputAtt} />
        {label && <Span c={disabled && colors.main.disabled}>{label}</Span>}
      </Label>
    </>
  )
}
export default Radio
