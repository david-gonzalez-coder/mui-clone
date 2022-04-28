import { Button }from 'atomic-library-core'
import { getTypes } from '../utils'

const Btn = ({inputType="button", type = "filled", subType = "primary", disabled, selected, size = "md", ...rest}) =>{
    let style = getTypes(type, subType, disabled, size, selected)
    return <Button type={inputType} insertStyleBefore={style} {...rest} />   
}
export default Btn