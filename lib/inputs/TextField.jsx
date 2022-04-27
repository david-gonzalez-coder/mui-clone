import {Input, Box, Fieldset, Legend, Span} from 'atomic-library-core'
import {getTypes} from '../utils'
import {useState} from 'react'

const TextField = () => {
    const [position, setPosition] = useState(['10px', '10px'])
    const focusInput = () => {
        setPosition(['8px', '-20px'])
    }
    const blurInput = () => {
        setPosition(['10px', '10px'])
    }
    return (
        <Box w="170px" rounded b="1px solid #ccc" pt="relative">
            <Input type="text" p="16.5px 14px" w="100%" z="0" onFocus={focusInput} onBlur={blurInput}/>
            <Span pt="absolute" bg="#fff" z="1" l={position[0]} t={position[1]} fs="1.25rem" tt=".1s">placeholder</Span>
        </Box>
        
    )
}
export default TextField