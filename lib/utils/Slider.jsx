import { Box as Wrapper, Box as ScrollBox, Box as Content, Box, AtomicContext } from 'atomic-library-core'
import {
  MdArrowBackIosNew as Left,
  MdArrowForwardIos as Right,
} from 'react-icons/md'
import { useRef, useState, useEffect } from 'react'

const Slider = ({
  children,
  gap,
  byPixels,
  byPercent,
  hiddenOnBorder,
  steps,
  dynamic,
  over,
  circular,
  controlsStyle,
  hiddenOnTouch,
  widthElements,
  column,
  ...rest
}) => {
  const scrollBoxRef = useRef(null)
  const contentRef = useRef(null)
  
  const [scrollLength, setScrollLength] = useState(null)
  const [opacity, setOpacity] = useState('')
  const [scrollWidth, setScrollWidth] = useState(0)
  const [scrollBoxWidth, setScrollBoxWidth] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const ISTOUCH = typeof window.ontouchstart !== 'undefined'
  const CONTROLSPROPS = { 
    w:'max-content',
    h: column ? "max-content" : '100%',
    tt:'all .3s',
    flex: true,
    cursor: !column && scrollWidth <= scrollBoxWidth ? 'hidden' : !circular && hiddenOnBorder && scrollLeft <= 0 ? 'auto' : 'pointer',
    p:'.5rem',
    opacity: dynamic ? '0' : '1',
    o: opacity,
    center: true,
    pt: over ? 'absolute' : 'relative',
    superStyle: controlsStyle,
  }

  const setScroll = (x = 0, y = 0) => scrollBoxRef.current.scroll(x, y)

  useEffect(() => {
    setScrollBoxWidth(scrollBoxRef.current.clientWidth)
    setScrollWidth(scrollBoxRef.current.scrollWidth)
    let length = scrollBoxRef.current.clientWidth

    if (byPixels) length = byPixels
    else if (byPercent) length = (length / 100) * byPercent
    
    setScrollLength(length) 
  }, [byPixels, byPercent])

  useEffect(() => {
    if(steps) {
      setScroll(scrollLength * steps)
      setScrollLeft(scrollLength * steps)
    }
    
  }, [steps])

  const toLeft = () => {
    if (circular && scrollLeft <= 0) {
      setScroll(scrollWidth - scrollLength)
      setScrollLeft(scrollWidth - scrollLength)
    }else {
      setScroll(scrollLeft - scrollLength)
      setScrollLeft(scrollLeft - scrollLength)
    }
  }

  const toRight = () => {
    if (circular && scrollLeft + scrollLength >= scrollWidth - scrollLength ) {
      setScroll(0)
      setScrollLeft(0)
    }else {
      setScroll(scrollLeft + scrollLength)
      setScrollLeft(scrollLeft + scrollLength)
    }
  }

  return (
    <Wrapper
      flex
      pt='relative'
      flowColumn={column}
      onMouseOver={() => dynamic && setOpacity('1')}
      onMouseLeave={() => dynamic && setOpacity('0')}
      {...rest}
    >
      {((ISTOUCH && hiddenOnTouch) || !ISTOUCH) && (
        <Box {...CONTROLSPROPS}>
          <Left
            onClick={toLeft}
            style={{
              visibility:  !column && scrollWidth <= scrollBoxWidth ? 'hidden' : !circular && hiddenOnBorder && scrollLeft <= 0 ? 'hidden' : 'visible',
              transform: column ? 'rotate(90deg)' : '',
            }}
          />
        </Box>
      )}

      <ScrollBox
        myStyle={{
          ofX: column ? 'auto' : 'scroll',
          ofY: column ? 'scroll' : 'auto',
        // '::-webkit-scrollbar': { d: 'none' },
        scrollBehavior: 'smooth'}}
        ref={scrollBoxRef}
      >
        <Content w='max-content' h="max-content" ref={contentRef} gap={gap} flex flexWrap flexColumn={column}>
          <AtomicContext.Provider value={{w: widthElements ? `${(scrollBoxWidth / 100 ) * widthElements}px` : 'auto'}}>
            {children}
          </AtomicContext.Provider>
          
        </Content>
      </ScrollBox>

      {((ISTOUCH && hiddenOnTouch) || !ISTOUCH) && (
        <Box {...CONTROLSPROPS} >
          <Right
            onClick={toRight}
            style={{
              visibility: !column && scrollWidth <= scrollBoxWidth ? 'hidden' : !circular && hiddenOnBorder && scrollLeft >= scrollWidth ? 'hidden' : 'visible',
              transform: column ? 'rotate(90deg)' : '',
            }}
          />
        </Box>
      )}
    </Wrapper>
  )
}
export default Slider
//column
//hereditary