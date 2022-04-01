import {Box} from 'atomic-library-core'

const Collapse = ({children, collapsed, ...rest}) => {
    return (
        <Box  d={collapsed ? 'none' : 'auto'} {...rest}>
           {children}
        </Box>
    )
}
export default Collapse