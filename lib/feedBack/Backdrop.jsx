import { createElement } from 'react'
import * as components from 'atomic-library-core'

const Backdrop = ({children, component="Box", open = false, ...rest }) => {

    return open && createElement(
        components[component],
        { 
            h:"100vh",
            flex: true, 
            center: true,
            bg:"rgba(0,0,0,.25)",
            insertStyleBefore: `
                position: fixed;
                top: 0;
                left: 0;        
            `,
            ...rest
        },
        <>
            <div  onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </>

        )
}

export default Backdrop