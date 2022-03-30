import {Input} from 'atomic-library-core'



const Checkbox = ({...rest}) => {
    return (
        <Input 
            type="checkbox"
            insertStyle={{bg: 'red'}}
            {...rest}
        />
    )
}
export default Checkbox