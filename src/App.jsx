
import { useState } from 'react'
import {Backdrop, Snackbar, Alert, Skeleton} from '../lib/feedBack'
import {Btn, Checkbox} from '../lib/inputs'
import {Box, Input} from 'atomic-library-core'
import {Avatar, AvatarGroup} from '../lib/dataDisplay'
import {AiOutlineSearch} from 'react-icons/ai'
import './App.css'
const App = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <>
    
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptatem blanditiis minima. Quidem, suscipit illum obcaecati voluptatibus repudiandae expedita fugiat totam doloremque, iste optio commodi voluptatum! Exercitationem, eaque placeat.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptatem blanditiis minima. Quidem, suscipit illum obcaecati voluptatibus repudiandae expedita fugiat totam doloremque, iste optio commodi voluptatum! Exercitationem, eaque placeat.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptatem blanditiis minima. Quidem, suscipit illum obcaecati voluptatibus repudiandae expedita fugiat totam doloremque, iste optio commodi voluptatum! Exercitationem, eaque placeat.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptatem blanditiis minima. Quidem, suscipit illum obcaecati voluptatibus repudiandae expedita fugiat totam doloremque, iste optio commodi voluptatum! Exercitationem, eaque placeat.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas voluptatem blanditiis minima. Quidem, suscipit illum obcaecati voluptatibus repudiandae expedita fugiat totam doloremque, iste optio commodi voluptatum! Exercitationem, eaque placeat.</p>
      <Btn onClick={()=> setToggle(true)}>Open</Btn>
      <Btn onClick={()=> setToggle(false)}>Close</Btn>
      <Snackbar open={toggle} t="10rem" l="10rem" autoClose="2000ms" >
        <Alert fs="1rem" w="300px" onClose={()=> setToggle(false)} rounded>
          this is a snackbar
        </Alert>
      </Snackbar >
      <Box w="300px" m="0">
        <Skeleton w="100px"/>
        <Skeleton h="50px" w="50px" br="50px"/>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton h="100px"/>
      </Box>
      <Alert size="lg">hola</Alert>
      <AvatarGroup max={5} >
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
      </AvatarGroup>
      <Avatar alt="av" src="https://townsquare.edia/site/442/files/2013/08/avatar-poll.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"></Avatar>
    
      
    </>
  )
}
export default App