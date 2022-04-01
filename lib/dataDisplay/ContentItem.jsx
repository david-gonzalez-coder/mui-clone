import {Box, Span, Paragraph} from 'atomic-library-core'
import { getTypes } from '../utils'
import { AiOutlineClose } from 'react-icons/ai'
const ContentItem = ({
    type = 'text',
    subType = 'secondary',
    action,
    disabled,
    onClose,
    selected,
    display,
    title,
    content,
    size = 'md',
    ...rest
}) => {
    let style = getTypes(type, subType, disabled, size,selected)
    return (
        <Box insertStyleBefore={style} flex center m="0" p="1rem" {...rest}>
                {display && 
                    <Box flex center w="max-content">{display}</Box>}
                <Box flex y="center" x="start" p="0 1rem" flexWrap m="0">
                    {title && 
                        <Span>{title}</Span>}
                    {content && 
                        <Paragraph w="100%">{content}</Paragraph>}
                </Box>
                
                    {(action || onClose) && 
                        <Box w="max-content" >
                            {action  ?  action : (
                                onClose && <AiOutlineClose fontSize="1.3rem" onClick={onClose} />
                            )}
                        </Box>
                    }
        </Box>
    )
}
export default ContentItem