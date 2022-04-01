
import { useState } from 'react'
import {Backdrop, Snackbar, Alert, Skeleton} from '../lib/feedBack'
import {Btn, Checkbox} from '../lib/inputs'
import {Box, Input} from 'atomic-library-core'
import {Avatar, AvatarGroup, Badge, Chip, List, ContentItem} from '../lib/dataDisplay'
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
      <Alert type="smooth" fullRounded w="300px" onClose={()=> alert('hola')} >hola</Alert>
      <AvatarGroup max={3} >
        <Avatar bg="orange">Dg</Avatar>
        <Avatar bg="purple">Dg</Avatar>
        <Avatar bg="green">Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
        <Avatar>Dg</Avatar>
      </AvatarGroup>
      <Avatar alt="av" src="https://townsquare.edia/site/442/files/2013/08/avatar-poll.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"></Avatar>
      <Badge badgeContent="1" subType="success" fs="12px" r="-10px">
        <AiOutlineSearch fontSize="2rem"/>
      </Badge>
      <Chip >hola this</Chip>
      <List 
      
        elements={[
          {display: <Avatar bg="orange">Dg</Avatar>, title: 'hola', content: 'this is content', onClose: () => alert('hola'), division: true},
          {display: <AiOutlineSearch fontSize="1.5rem"/>, title: 'como estas'},
          {title: 'list'},
        ]}
      />
      <Box w="345px" m="2rem" flex flexWrap rounded raised c="rgba(0, 0, 0, 0.6)" >
          <ContentItem 
            display={<Avatar bg="orange">R</Avatar>}
            title="Shrimp and Chorizo Paella"
            content="September 14, 2016"
            action=":"
          />
          <Box>
            <img width="100%" src="https://mui.com/static/images/cards/paella.jpg" alt="" />
          </Box>
          <Box p="1rem">
            <p>Lorem ipsum, tempore maiores. Ducimus praesentium enim sed ipsam sapiente, ipsum totam architecto consectetur animi facere, aliquid blanditiis est sint.</p>
          </Box>
          
          <ContentItem 
            content={<AiOutlineSearch fontSize="1.5rem"/>}
            action="v"
          />
      </Box>
    </>
  )
}
export default App