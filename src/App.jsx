import { Checkbox, Radio, RadioGroup, TextField, Rating, Switch, Range } from '../lib/inputs'
import {Box, Colors, ThemeColors2, Input} from 'atomic-library-core'
import Styled from 'styled-components'
import './App.css'
import {AiOutlineCheck, AiFillCheckCircle} from 'react-icons/ai'
import {useState} from 'react'

const App = () => {
  const [valor, setValor] = useState('h')
  const [ratingValue, setRatingValue] = useState(0)
  console.log(ThemeColors2)
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
      <Rating value={ratingValue} onChange={(e, newValue)=>{
        console.log(newValue);
        setRatingValue(newValue)
      }}
      />
      <TextField />
      <Switch  />
      <Range  
        defaultValue={0.00000005}
        subType="primary"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
       onChange={(e)=> {console.log(e.target.value)}}/>
       
       <Range  
        defaultValue={0.00000005}
        subType="danger"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
       onChange={(e)=> {console.log(e.target.value)}}/>
    </>
  )
}
export default App