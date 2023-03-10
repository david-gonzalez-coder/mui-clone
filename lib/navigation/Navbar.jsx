import { createElement } from 'react'
import * as components from 'atomic-library-core'

const {Header, Nav, useCompContext} = components

const headerStyles = {
    top : "width: 100%; height: 80px; top: 0; aling-items: center;",
    bottom : "width: 100%; height: 80px; bottom: 0; aling-items: center;",
    right : "width: 80px; height: 100vh; right: 0px; aling-items: center;",
    left : "width: 80px; height: 100vh; left: 0px; aling-items: center; "
}
const navStyles = {
    top : "flex-direction: row; max-width: 1200px;",
    bottom : "flex-direction: row ; max-width: 1200px;",
    right : "flex-direction: column; max-height: 800px;",
    left : "flex-direction: column; max-height: 800px;"
}
const Navbar = ({component="Header",children, location, headerStyle, navStyle, position, ...rest}) => {
    const {...props} = useCompContext() || false
    return (
        createElement(
            components[component],
            {
                insertStyleBefore: headerStyles[location || 'top'] + ".active {font-weight: 500;}",
                myStyle: {pt: position, m: '0px'},
                superStyle: headerStyle,
                ...props,
                ...rest,
            },
            <>
                <Nav
                    flex
                    y="center"
                    x="space-between"
                    insertStyleBefore={navStyles[location || 'top']}
                    myStyle={{ h: '100%', w: '100%', m: 'auto', p: '10px' }}
                    superStyle={navStyle}
                >
                    {children}
                </Nav>
            </>
        )
    )
}
export default Navbar