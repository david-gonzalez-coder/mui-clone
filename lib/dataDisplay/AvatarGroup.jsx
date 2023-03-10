import { Box,AtomicContext } from 'atomic-library-core'
import { Avatar } from './index'
import { cloneElement, Children } from 'react'
const AvatarGroup = ({
  children,
  max,
  childrenStyle,
  ...rest
}) => {
  let elements = Children.toArray(children)
  let len = elements.length
  elements = elements.slice(0, max)

  return (
    <Box inlineFlex flexWrap w='max-content'  m='0 0 0 8px' {...rest}>
      <AtomicContext.Provider value={{b: '2px solid #fff', w: '44px', h: '44px',mL: '-8px', ...childrenStyle}}>
        {elements}
        {len > max && <Avatar>{`+${len - max}`}</Avatar>}
        
      </AtomicContext.Provider>
    </Box>
  )
}
export default AvatarGroup
