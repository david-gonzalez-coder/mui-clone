import { Collapse } from '../utils'
import {ContentItem} from '../dataDisplay'
import {useState, createElement} from 'react'
import * as components from 'atomic-library-core'
const Accordion = ({
    component="Box",
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
          createElement(
            components[component],
            {
                onClick: () => setToggle(!toggle),
                ...rest
            },
            <>
                <ContentItem 
                    display={display}
                    title={title}
                    content={content}
                />
                <Collapse collapsed={toggle}>
                    {description}
                    
                </Collapse>
            </>
          )
      )

}
export default Accordion
