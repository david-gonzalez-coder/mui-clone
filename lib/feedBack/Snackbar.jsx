import {Box} from 'atomic-library-core'
import {useState, useEffect,} from 'react'
const Snackbar = ({children, open = false, autoClose, ...rest }) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() =>{
        if(open) setIsOpen(true)
        else setIsOpen(false)
        
    }, [open])

    return isOpen && 
        <Box
            insertStyleBefore={`
                position: fixed;
                bottom: 1rem;
                left: 1rem;        
            `}
            {...rest}
        >
            {children}
        </Box> 
}

export default Snackbar