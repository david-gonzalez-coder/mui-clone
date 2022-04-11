
import { useState } from 'react'
import {Backdrop, Snackbar, Alert, Skeleton} from '../lib/feedBack'
import {Btn, Checkbox, ToggleBtnGroup} from '../lib/inputs'
import {Box, Input} from 'atomic-library-core'
import {Avatar, AvatarGroup, Badge, Chip, List, ContentItem} from '../lib/dataDisplay'
import {AiOutlineSearch} from 'react-icons/ai'
import {Accordion} from '../lib/surfaces'
import {Collapse, Slider,} from '../lib/utils'
import {Navbar, Link} from '../lib/navigation'
import './App.css'
import '../lib/utils/MuiClone.css'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleMenu, setToggleMenu] = useState('btn1')
  const [steps, setSteps] = useState(0)
  return (
    <>
    <Navbar bg="#f2f2f2" z="2" pt="sticky" location="top">
        <a href="#">inicio</a>
        <a href="#">inicio</a>
      </Navbar>
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
          <Box><img width="100%" src="https://mui.com/static/images/cards/paella.jpg" alt="" /></Box>
          <Box p="1rem">
            <p>Lorem ipsum, tempore maiores. Ducimus praesentium enim sed ipsam sapiente, ipsum totam architecto consectetur animi facere, aliquid blanditiis est sint.</p>
          </Box>  
          <ContentItem 
            content={<AiOutlineSearch fontSize="1.5rem"/>}
            action="v"
          />
      </Box>
      {/* <ToggleBtnGroup 
        pt="fixed" 
        bm="0px" 
        l="0px" 
        controls={{
          value: toggleMenu,
          exclusive: true,
          func: (e, value) => setToggleMenu(value)
        }} >
        <Btn value="btn1"><AiOutlineSearch fontSize="1.5rem"/></Btn>
        <Btn value="btn2"><AiOutlineSearch fontSize="1.5rem"/></Btn>
        <Btn value="btn3"><AiOutlineSearch fontSize="1.5rem"/></Btn>
      </ToggleBtnGroup> */}
     
      <Collapse   >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatibus odio error provident pariatur repudiandae iste, dolor, architecto maiores dolorum exercitationem vitae omnis asperiores quo cum ratione et obcaecati consequatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatibus odio error provident pariatur repudiandae iste, dolor, architecto maiores dolorum exercitationem vitae omnis asperiores quo cum ratione et obcaecati consequatur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatibus odio error provident pariatur repudiandae iste, dolor, architecto maiores dolorum exercitationem vitae omnis asperiores quo cum ratione et obcaecati consequatur.</p>
      </Collapse>
      <Accordion title="hola" description={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos voluptatibus odio error provident pariatur repudiandae iste, dolor, architecto maiores dolorum exercitationem vitae omnis asperiores quo cum ratione et obcaecati consequatur.</p>} />
      <Accordion title="hola1" description="lconsectetur adipisicing elit"/>
      <Accordion title="hola3" description="consectetur adipisicing elit"/>
      
      <Link m="20px" type="filled">vomo</Link>
      <Slider byPercent={100} gap="10px" column  h="300px" widthElements={100}>
        <Box h="100px" bg="#ccc"  >1</Box>
        <Box h="100px" bg="#ccc"  w="500px" >2</Box>
        <Box h="100px" bg="#ccc"  w="500px" >3</Box>
        <Box h="100px" bg="#ccc" w="500px" >4</Box>
        <Box h="100px" bg="#ccc" w="500px" >5</Box>
        <Box h="100px" bg="#ccc" w="500px" >6</Box>
        <Box h="100px" bg="#ccc" w="500px" >7</Box>
        <Box h="100px" bg="#ccc" w="500px" >8</Box>
      </Slider>
      <Slider gap="20px" inSections={50}  hiddenOnBorder >
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(0)} >1</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(1)} >2</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(3)} >3</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(4)} >4</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(5)} >5</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(6)} >6</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(7)} >7</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(8)} >8</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(5)} >5</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(6)} >6</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(7)} >7</Box>
        <Box h="50px" bg="#ccc" w="50px" onClick={() => setSteps(8)} >8</Box>
      </Slider>
      <ToggleBtnGroup rounded controls={{value: 'left', exclusive: true}}>
        <Btn value="left" >left</Btn>
        <Btn value="right" >right</Btn>
      </ToggleBtnGroup>
       </>
  )
}
export default App