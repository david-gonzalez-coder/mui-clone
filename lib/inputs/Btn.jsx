import * as components from 'atomic-library-core'
import { getTypes, getRaised } from '../utils'
import { createElement } from 'react'

const Btn = ({
  component = 'Button',
  inputType = 'button',
  type = 'filled',
  subType = 'primary',
  disabled,
  selected,
  size = 'md',
  children,
  startIcon,
  endIcon,
  loading,
  fullRounded,
  loadingIndicator,
  
  
  ...rest
}) => {
  
  let style = getTypes({type, subType, disabled: disabled || loading, size, selected})
  return createElement(
    components[component],
    {
      inserStyle: '-webkit-tap-highlight-color: rgba(0, 0, 0, 0);',
      type: inputType,
      insertStyleBefore: style,
      inlineFlex: true,
      rounded: (!fullRounded && type !== 'icon') && true,
      fullRounded: fullRounded,
      ai: 'center',
      lnH: '1',
      disabled: (loading || disabled) && true,
      ...rest,
    },
    <>
      {startIcon && (
        <components.Span mR='10px' mL={size === 'sm' ? '-2px' : '-4px'}>
          {startIcon}
        </components.Span>
      )}
      {(loading && loadingIndicator) ? loadingIndicator : children}
      {endIcon && (
        <components.Span mL='10px' mR={size === 'sm' ? '-2px' : '-4px'}>
          {endIcon}
        </components.Span>
      )}
    </>
  )
}
export default Btn
