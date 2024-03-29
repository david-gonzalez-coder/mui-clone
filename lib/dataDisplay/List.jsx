import { getTypes } from '../utils'
import { AiOutlineClose } from 'react-icons/ai'
import * as components from 'atomic-library-core'

const { Box, Ul, Li, Span, P } = components

const List = ({
  elements = false,
  divided,
  type = 'text',
  subType = 'secondary',
  action,
  disabled,
  selected,
  size = 'md',
  component="Ul",
  ...rest
}) => {
  let style = getTypes({type, subType, disabled, size,selected})

  let items = elements.map((element = false) => {
      const {display, title, content, action, onClose, division} = element;
      return (
          <>
            <Li insertStyleBefore={style} flex center m="0" p="1rem" key={title}>
                {display && <Box flex center w="max-content">{display}</Box>}
                <Box flex y="center" x="start" p="0 1rem" flexWrap m="0">
                    {title && <Span>{title}</Span>}
                    {content && <P w="100%">{content}</P>}
                </Box>
    
                {(action || onClose) && 
                    <Box w="max-content" >
                        {action  ?  action : (
                            onClose && <AiOutlineClose fontSize="1.3rem" onClick={onClose} />
                        )}
                    </Box>
                }
            </Li>
            {(division || divided) && <hr />}
        </>
      )
  })

  return createElement( components[component], {rest}, items )
}
export default List
