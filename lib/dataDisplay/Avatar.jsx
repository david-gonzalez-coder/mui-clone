import {Box} from 'atomic-library-core'
import { BoxSizes as sizes } from 'atomic-library-core'
import {BsFillPersonFill} from 'react-icons/bs'

const Avatar = ({children, alt, size, src, ...rest}) => {
    
    return (
        <Box   
            insertStyleBefore={`
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            `}
            w="50px" h="50px" br="50px" m="0" bg="#ccc" fs="1.2rem" fw="500" c="#fff" flex center {...rest}  >
            {children ? children : src ? <img alt={alt[0]} src={src} />: <BsFillPersonFill fontSize="2rem" />}
        </Box>
    )
}
export default Avatar