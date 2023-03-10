import {Children, cloneElement, createElement} from 'react'
import * as components from 'atomic-library-core'
const BtnGroup = ({flowColumn, flowColumnReverse, flowRowReverse, flowRow, component="Box",children, toggle, rounded, fullRounded, type, subType, size,...rest}) => {
    let elements = Children.toArray(children)
    let round = !fullRounded ? 'rounded' : 'fullRounded'
    let first = flowRow ? 'Fourth' : flowRowReverse ? 'Third' : flowColumn ? 'First' : flowColumnReverse ? 'Second' : 'Fourth'
    let last = flowRow ? 'Third' : flowRowReverse ? 'Fourth' : flowColumn ? 'Second' : flowColumnReverse ? 'First' : 'Third'
    const styles = {
        roundedFirst: '5px 5px 0 0', 
        roundedSecond: '0 0 5px 5px', 
        roundedThird: '0 5px 5px 0',
        roundedFourth: '5px 0 0 5px',
        fullRoundedFirst: '150px 150px 0 0', 
        fullRoundedSecond: '0 0 150px 150px', 
        fullRoundedThird: '0 150px 150px 0',
        fullRoundedFourth: '150px 0 0 150px'
    }

    if(elements.length === 1) {
        elements = cloneElement(elements[0] , {m: '0px', type, subType, size, rounded, fullRounded,  ...elements[0].props })
    }else if (elements.length > 1) {

        let lastElement = elements[elements.length - 1]
        elements = 
            [cloneElement(elements[0], {
                br: styles[`${round}${first}`],m: '0px', type, subType, size, ...elements[0].props
            })]
            .concat(
                elements.slice(1, -1).map(element => cloneElement(element , {m: '0px', br: '0', type, subType, size, ...element.props })),
                cloneElement(lastElement , {br: styles[`${round}${last}`], m: '0px', type, subType, size, ...lastElement.props })
            )
    }
    return (
        createElement(
            components[component],
            {
                inlineFlex: true, 
                flexWrap: true, 
                w:"auto",
                rounded: rounded,
                flowColumn: flowColumn,
                flowColumnReverse: flowColumnReverse,
                flowRow: flowRow,
                flowRowReverse: flowRowReverse,  
                ...rest,
            },
            elements
        )

    )
}
export default BtnGroup