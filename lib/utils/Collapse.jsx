import {useRef, useEffect, useState, createElement} from 'react'
import * as components from 'atomic-library-core'
const Collapse = ({component="Box",children, collapsed, className, ...rest}) => {
    const boxRef = useRef(null)
    const [height, setHeight] = useState(null)
    useEffect(() =>{
        setHeight(boxRef.current.scrollHeight)
    },[collapsed])
    return (
        createElement(
            components[component],
            {
                ref:boxRef,
                tt:"height 0.3s",
                of:"hidden",
                height:"0px",
                h:!collapsed ? `${height}px` : '0px',
                ...rest
            },
            children
        )
    )
}
export default Collapse