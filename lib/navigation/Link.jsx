import { getTypes } from '../utils'
import { createElement } from 'react'
import * as components from 'atomic-library-core'
const Link = ({children, component="A",type = false, subType = "primary", disabled, selected, size = "md", ...rest}) =>{
    let style = getTypes({type, subType, disabled, size, selected})
    return (
        createElement(
            components[component],
            {
                
                insertStyleBefore:'-webkit-tap-highlight-color: rgba(0, 0, 0, 0);' + type && style,
                d:'inline-block',
                textDecoration:"none",
                ...rest 
            },
            children
        )
    )   
}
export default Link