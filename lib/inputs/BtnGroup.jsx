import {Children, cloneElement} from 'react'
import {Box} from 'atomic-library-core '

const BtnGroup = ({children, column, columnReverse, toggle, rowReverse, rounded, fullRounded, type, subType, size, row,...rest}) => {
    let elements = Children.toArray(children)
    let round = rounded ? 'rounded' : fullRounded ? 'fullRounded' : 'default'
    let first = row ? 'Fourth' : rowReverse ? 'Third' : column ? 'First' : columnReverse ? 'Second' : 'Fourth'
    let last = row ? 'Third' : rowReverse ? 'Fourth' : column ? 'Second' : columnReverse ? 'First' : 'Third'
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
                elements.slice(1, -1).map(element => cloneElement(element , {m: '0px', type, subType, size, ...element.props })),
                cloneElement(lastElement , {br: styles[`${round}${last}`], m: '0px', type, subType, size, ...lastElement.props })
            )
    }
    return (
        <Box 
            inlineFlex 
            flexWrap 
            w="auto"
            rounded={rounded}
            fullRounded={fullRounded}
            {...rest}
            flowRowReverse={rowReverse}
            flowColumn={column}
            flowColumnReverse={columnReverse}
        >
            {elements}
        </Box>
    )
}
export default BtnGroup