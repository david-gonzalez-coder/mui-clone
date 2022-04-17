import { Checkbox } from '../lib/inputs'
import {Box} from 'atomic-library-core'
import './App.css'
import {AiOutlineCheck, AiFillCheckCircle} from 'react-icons/ai'

const App = () => {
const state = [false, false]
  return (
    <>
     
      <Box h="100px" w="100px" bg="#ccc" myStyle={{
        "::after": {
          content: "''",
          h:"10px",
          w: '10px',
          bg: 'red',
          pt: 'absolute'
        }
        }}></Box>
        <Box h="100px" bg="#ccc"></Box>

        <Checkbox 
        checked={state[0] && state[1]} 
        label="adsdf"
        
        indeterminate={state[0] !== state[1]}
        />
    </>
  )
}
export default App