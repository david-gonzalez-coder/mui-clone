import {useState, useEffect, createElement} from 'react'
import * as components from 'atomic-library-core'
const Snackbar = ({component="Box",children, open = false, autoClose, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() =>{
        if(open) setIsOpen(true)
        else setIsOpen(false)
    }, [open])

    return isOpen && createElement(
        components[component],
        {
            insertStyleBefore:`
                position: fixed;
                bottom: 1rem;
                left: 1rem;        
            `,
            ...rest
        },
        children
    )
}

export default Snackbar