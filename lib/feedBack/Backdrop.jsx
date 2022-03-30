import {Box} from 'atomic-library-core'

const Backdrop = ({children, open = false, ...rest }) => {

    return open && 
        <Box
            h="100vh"
            flex 
            center
            bg="rgba(0,0,0,.25)"
            insertStyleBefore={`
                position: fixed;
                top: 0;
                left: 0;
                div{display: inline-block;}            
            `}
            {...rest}
        >
            <div  onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
                
        </Box> 
}

export default Backdrop