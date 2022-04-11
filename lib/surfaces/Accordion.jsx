import { Box } from 'atomic-library-core'
import { Collapse } from '../utils'
import {ContentItem} from '../dataDisplay'
import {useState} from 'react'

const Accordion = ({
  type = 'text',
  subType = 'secondary',
  action,
  disabled,
  selected,
  display,
  title,
  content,
  description,
  onClose,
  size = 'md',
  ...rest
}) => {

const [toggle, setToggle] = useState(true)
      return (
            <Box  onClick={() => setToggle(!toggle)} {...rest} >
                <ContentItem 
                    display={display}
                    title={title}
                    content={content}
                />
                <Collapse collapsed={toggle}>
                    {description}
                    
                </Collapse>
            </Box>
      )

}
export default Accordion
