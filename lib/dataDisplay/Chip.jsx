import ContentItem from './ContentItem'
import { ThemeColors2 as Colors } from 'atomic-library-core'
const chip = ({
  children,
  type = 'ghost',
  subType = 'secondary',
  ...rest
}) => {
  return (
    <ContentItem
      userSelect='none'
      onCloseStyle={{
        bg: Colors.light[subType],
        ':hover': { bg: Colors.light[subType] },
        p: '2px', 'svg':{fs: '1rem'}, c: Colors.darker[subType] 
      }}
      title={children}
      type={type}
      fullRounded
      w='max-content'
      p='5px'
      subType={subType}
      {...rest}
    />
  )
}
export default chip
