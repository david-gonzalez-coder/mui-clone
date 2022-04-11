import { A }from 'atomic-library-core'
import { getTypes } from '../utils'

const Link = ({type = false, subType = "primary", disabled, selected, size = "md", ...rest}) =>{
    let style = getTypes(type, subType, disabled, size, selected)
    return (
        <A 
            insertStyleBefore={type && style}
            d='inline-block'
            textDecoration="none"
            {...rest} 
        />
    )   
}
export default Link