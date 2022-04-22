import { Checkbox, Radio, RadioGroup } from '../lib/inputs'
import {Box, Colors} from 'atomic-library-core'
import Styled from 'styled-components'
import './App.css'
import {AiOutlineCheck, AiFillCheckCircle} from 'react-icons/ai'
import {useState} from 'react'

const App = () => {
  const [valor, setValor] = useState('h')
  return (
    <>
      <Radio inputAtt={{name: 'hola', value: 'famale'}} label="famale"/>
      <Radio inputAtt={{name: 'hola', value: 'male'}}/>
      <Radio inputAtt={{name: 'hola'}}/>
      <Radio inputAtt={{name: 'hola'}} checked/> <br /><br />
      <RadioGroup value={valor} name="hola" onChange={(e)=>{setValor(e.target.value)}}>
        <Radio value="h" label="hombre" colorChecked="orange" flowColumnReverse checkStyle={{w: '100px'}}/>
        <Radio value="f" label="hombre"/>
        <Radio value="g" label="hombre"/>
      </RadioGroup>
    </>
  )
}
export default App