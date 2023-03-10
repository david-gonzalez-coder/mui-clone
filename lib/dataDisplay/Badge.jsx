import { createElement } from 'react'
import * as components from 'atomic-library-core'

const Badge = ({
  children,
  badgeContent = "",
  badgeNumber,
  transparent,
  subType = 'primary',
  component="Span",
  max=99,
  vertical="top",
  horizontal="right",
  dot,
  overlap,
  ...rest
}) => {
  return createElement(
    components[component],
    {inlineFlex: true, pt: 'relative', verticalAlign: 'middle', flexShrink: '0'},
    <>
      <components.Span
          flex
          flowRow
          flexWrap
          center
          pt="absolute"
          c='#fff'
          bg={components.ThemeColors2.main[subType]}
          boxSizing="border-box"
          mnW={dot ? "8px" : "20px"}
          fs="12px"
          h={dot ? "8px" : "20px"}
          lnH="1"
          fw="500"
          p={dot ? "0" : "0 6px"}
          br='10px'
          alignContent="center"
          tt="transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
          tf={`
            scale(${badgeContent || badgeNumber ? '1' : '0'}) 
            ${!overlap && (`translate(${horizontal === 'left' ? '-50%' : '50%'}, ${vertical === 'bottom' ? '50%' : '-50%'})`) }
          `}
          transformOrigin="100% 0%"
          insertStyleBefore={`
            ${vertical === 'bottom' ? 'bottom: 0;' : 'top: 0;'}
            ${horizontal === 'left' ? 'left: 0;' : 'right: 0;'}
          `}

          {...rest}
        >
          {
          !dot && ( badgeNumber ? (badgeNumber <= max ? badgeNumber : (max + '+')) : badgeContent)
        }
          
        </components.Span>
        {children}
    </>
  )
}
export default Badge