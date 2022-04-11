import {BtnGroup} from './index'
import {Children, cloneElement} from 'react'

const ToggleBtnGroup = ({children, controls = false, ...rest}) => {
    let elements = Children.toArray(children)
     elements = elements.map((element) => 
        cloneElement(element, {
            selected: 
                controls.exclusive ? (
                    controls.value === element.props.value ? true : false
                ) : (
                    controls.value.find(sub => sub === element.props.value) ? true : false
                )
                ,
            onClick: (e) => {controls.exclusive ? controls.func(e, element.props.value) : controls.func(e, controls.value)},
            ...element.props
        })
    )
    return (
        <BtnGroup {...rest}>
            {elements}
        </BtnGroup>
    )
}
export default ToggleBtnGroup

