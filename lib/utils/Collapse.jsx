import {Box} from 'atomic-library-core'
import {useRef, useEffect, useState} from 'react'
const Collapse = ({children, collapsed, className, ...rest}) => {
    const boxRef = useRef(null)
    const [height, setHeight] = useState(null)
    useEffect(() =>{
        setHeight(boxRef.current.scrollHeight)
    },[collapsed])
    return (
        <Box  
            ref={boxRef}
            tt="height 0.3s"
            of="hidden"
            height="0px"
            h={!collapsed ? `${height}px` : '0px'}
            {...rest}>
           {children}
        </Box>
    )
}
export default Collapse