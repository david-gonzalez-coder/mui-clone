import {Span} from 'atomic-library-core'

const Skeleton = ({animated, ...rest}) => {

    return (
        <Span 
            br="5px"
            bg="rgba(0, 0, 0, 0.11)"
            h="12px"
            w="100%"
            d="block"
            m="10px"
            {...rest}
        >
            
        </Span>
    )
}
export default Skeleton