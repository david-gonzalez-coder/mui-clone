import { AtomicContext} from 'atomic-library-core' 

import {Children, cloneElement} from 'react'
const RadioGroup = ({children, onChange = () => {},name, value, ...rest}) => {
    let elements = Children.toArray(children)
    elements = elements.map(element => cloneElement(element, {checked: value === element.props.value, ...element.props}))
    return (
        <AtomicContext.Provider value={{onChange, name, ...rest}}>
            {elements}
        </AtomicContext.Provider>
    )
}
export default RadioGroup