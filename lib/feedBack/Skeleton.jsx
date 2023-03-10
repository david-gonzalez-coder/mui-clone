import * as components from 'atomic-library-core'
import {createElement} from 'react'
const Skeleton = ({children, component="Span",animated, ...rest}) =>
    createElement(
        components[component],
        {
            br:"5px",
            bg:"rgba(0, 0, 0, 0.11)",
            h:"12px",
            w:"100%",
            d:"block",
            m:"10px 0",
            ...rest
        },
        children
    )
   
 
export default Skeleton