import { getTypes } from '../utils'
import { AiOutlineClose } from 'react-icons/ai'

import { createElement } from 'react'
import * as components from 'atomic-library-core'
import Btn from '../inputs/Btn'
const {Box, Span, P} = components
const ContentItem = ({
    type = 'text',
    subType = 'secondary',
    action,
    disabled,
    onClose,
    onCloseIcon = <AiOutlineClose fontSize="1.3rem"  />,
    onCloseStyle,
    selected,
    display,
    title,
    userSelect,
    content,
    size = 'md',
    component="Box",
    ...rest
}) => {
    let style = getTypes({type, subType, disabled, size,selected, userSelect})
    return (
        createElement(
            components[component],
            {insertStyleBefore:style, flex: true, center: true, m:"0", p:"1rem", ...rest},
            <>
                {display && <Box flex center w="max-content">{display}</Box>}

                <Box flex y="center" x="start" p="0 1rem" flexWrap m="0">
                    {title && <Span>{title}</Span>}
                    {content && <Span w="100%">{content}</Span>}
                </Box>
                
                {(action || onClose) && 
                    <Box   w="max-content">
                        {action  ?  action : (
                            onClose && <Btn type="icon" myStyle={onCloseStyle} onClick={onClose}>{onCloseIcon}</Btn>
                        )}
                    </Box>
                }
            </>
        )
    )
}
export default ContentItem