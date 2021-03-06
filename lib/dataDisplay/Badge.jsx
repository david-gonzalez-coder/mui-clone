import { Span, Box } from 'atomic-library-core'
import { ThemeColors2 } from 'atomic-library-core'

let main = ThemeColors2.main

const Badge = ({
  children,
  badgeContent,
  transparent,
  subType = 'primary',
  ...rest
}) => {
  return (
    <Box pt='relative' w='max-content'>
      <Span
        d='inline-block'
        bg={main[subType]}
        visibility={transparent ? 'hidden' : 'visible'}
        c='#fff'
        pt='absolute'
        r='0px'
        p='2px'
        mnH='5px'
        w='auto'
        br='15px'
        {...rest}
      >
        {badgeContent}
      </Span>
      {children}
    </Box>
  )
}
export default Badge
