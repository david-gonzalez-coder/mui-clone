import { Button }from 'atomic-library-core'
import { getTypes } from '../utils'

const Btn = ({type = "filled", subType = "primary", disabled, selected, size = "md", ...rest}) =>{
    let style = getTypes(type, subType, disabled, size, selected)
    return <Button insertStyleBefore={style} {...rest} />   
}
export default Btn