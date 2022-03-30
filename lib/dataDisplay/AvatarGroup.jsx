import { Box } from 'atomic-library-core'
import { Avatar } from './index'
import { cloneElement, Children } from 'react'
const AvatarGroup = ({
  children,
  max,
  itemWidth,
  itemHeight,
  itemBorderRadius,
  ...rest
}) => {
  let elements = Children.toArray(children)
  let len = elements.length
  elements = elements.slice(0, max)
  let counter = 0
  elements = elements.map((element) => {
    let newElement = cloneElement(element, {
      pt: 'relative',
      b: '2px solid #fff',
      w: itemWidth ? itemWidth : '50px',
      h: itemHeight ? itemHeight : '50px',
      br: itemBorderRadius ? itemBorderRadius : '25px',
      l: `-${counter}px`,
      ...element.props,
    })
    counter += 15
    return newElement
  })
  return (
    <Box flex flexWrap w='max-content' m='0' {...rest}>
      {elements}
      {len > max && (
        <Avatar 
            w={itemWidth ? itemWidth : '50px'}
            h={itemHeight ? itemHeight : '50px'}
            br={itemBorderRadius ? itemBorderRadius : '25px'}
            b='2px solid #fff' pt='relative' l={`-${counter}px`}>{`+${
          len - max
        }`}</Avatar>
      )}
    </Box>
  )
}
export default AvatarGroup
