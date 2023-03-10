import { Checkbox, Radio, RadioGroup, TextField, Rating, Switch, Range, Btn, BtnGroup } from '../lib/inputs'
import {Box, Button, AtomicContext,Label, Box as Wrapper, Header, Footer, Aside, Main,Colors, ThemeColors2, Input, A} from 'atomic-library-core'
import Styled from 'styled-components'
import './App.css'
import {AiOutlineCheck, AiFillCheckCircle, AiOutlineSend} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import {Avatar, AvatarGroup, Badge, Chip, ContentItem, } from '../lib/dataDisplay'
import {Skeleton, Backdrop, Alert, Snackbar} from '../lib/feedBack'
import {BsAspectRatio, BsFillBookmarkCheckFill, BsBookmarkCheck} from 'react-icons/bs'
import {Accordion} from '../lib/surfaces'
import {Slider} from '../lib/utils'
const App = () => {
  const [valor, setValor] = useState('hola')
  const [ready, setReady] = useState(false)

  const [ratingValue, setRatingValue] = useState(0)

  

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
      <Switch component="H3" />
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
       <Btn component="H1">hola</Btn>
       <Avatar component="Button"></Avatar>
       <br />
       <span>gasdfasdfasd </span>

       <Badge
        badgeContent={5}
        max={312}
        location={['bottom', 'top']}
        overlap
        
        
        

       >
        <Box w="50px" h="50px" bg="red" m="0" br="100px"/>
       </Badge>
       <Box w="200px" h="200px" bg="#ccc" flex center>
          <Box w="20px" h="20px" bg="red" m="0" br="100px"/>

       </Box>
       <Chip onClose={()=>{}}>adsasdas</Chip>
       <ContentItem content="asd" display="2" onClose={()=>{}}/>
       <Box w="300px" m="0">
         <Box flex ai="center" flexWrap>
          <Skeleton w="50px" h="50px" br="50px"/>
          <Skeleton w="100px"/>
         </Box>
        
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton h="150px" rounded/>
  
       </Box>
       <Alert rounded type="ghost" subType="danger">hola</Alert>
       <Checkbox checked={false}>Terminos y condisiones</Checkbox>
       <Btn component="H1">vol</Btn>
       <Btn size="md" startIcon={<AiOutlineSend fontSize="2rem"/>} >click</Btn>
       <Btn size="lg" endIcon={<AiOutlineSend />} >click</Btn>
        <Btn disabled type="icon" size="lg"><AiFillCheckCircle fontSize="2rem" color="purple" /></Btn>
      hola
      <button disabled> dsa</button>
      <Btn loading loadingIndicator="Loading..." onClick={()=> alert('ads')} >test</Btn>
      <Button p="10px"  rounded  b="none">hola</Button>
      <Btn fullRounded>tounded</Btn>
      <BtnGroup fullRounded flowColumnReverse type="ghost" subType="success">
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
      </BtnGroup>
      <Wrapper 
      grid
      gap="10px"
      size="lg" 
      cols="1fr 1fr 1fr" 
      areas="
          'header header header'
          'main main aside'
          'footer footer footer'
      "
    >
      <Header  h='80px' bg="#ccc" span="header"/>
      <Main  flex flexWrap gap="10px" span="main">
        <Box  h='150px' bg="#909A9B" >
          <Avatar /><Avatar ><BsFillBookmarkCheckFill fontSize="2rem"/></Avatar><Avatar >ho</Avatar>
        </Box>
        <Box  h='150px' bg="#909A9B" />
        <Box  h='150px' bg="#909A9B" />
      </Main>
      <Aside  h='400px' bg="#CACACA" m="0" span="aside"/>
      <Footer  h='80px' bg="#ccc" span="footer"/>
  </Wrapper>
      <Checkbox
        defaultChecked
        colorCheck="red"
        label="Terminos y condiciones"
      />
      <Checkbox
        subType="success"
        disabled
        checked={ready}
        onChange={(e)=>{
          fs="4rem"
        fontSize="4rem"
          setReady(!ready)
          
        }}
        label="Terminos y condiciones"
      />
      <Btn type="icon"><BsFillBookmarkCheckFill /></Btn>
      <Radio label="hola"/>
      <Radio>gola</Radio>
      <RadioGroup value={valor} name="nombre"  colorCheck="red" subType="success" onChange={(e)=>{
        console.log(e.target.value)
        setValor(e.target.value)
      }}>
        <Radio value="hola" subType="success"/>
        <Radio value="como"/>
        <Radio value="estar"/>
        <Radio value="ca" />
      </RadioGroup>
      
        <Switch defaultChecked flowColumnReverse>hol</Switch>
      <Avatar />
      <Avatar bg="red"/>
      <Avatar br="10px">< BsFillBookmarkCheckFill /></Avatar>
      <Avatar src=""></Avatar>
      <Avatar bg="green">ho</Avatar>

      <Avatar src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="holad"></Avatar>
      <Avatar>R</Avatar>
      <Avatar>Rs</Avatar>
      <Avatar></Avatar>
      <hr />
      <Avatar></Avatar>
      <Avatar>< BsFillBookmarkCheckFill /></Avatar>
      <Btn type="icon" disabled>< BsFillBookmarkCheckFill /></Btn>
      <Box flex>
      <Avatar src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="holad"></Avatar>
      <Avatar ></Avatar>
      </Box>
      
      <AvatarGroup max="4">
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
      </AvatarGroup>
      <Avatar>< BsFillBookmarkCheckFill /></Avatar>
      <Avatar>< BsFillBookmarkCheckFill /></Avatar>
      
      <AvatarGroup max="4"  >
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
        <Avatar></Avatar>
      </AvatarGroup>
      <Badge badgeNumber={'d'} dot>
      < BsFillBookmarkCheckFill />
      </Badge>
      <Chip >hola</Chip>
      <Chip type="ghost" subType="success" avatar={<Avatar></Avatar>}  onClose={()=>{}}>hola</Chip>
      <Alert type="ghost"/>
      <Btn >gas</Btn>
      <ContentItem type="ghost" subType="success" title="hola" content="aasdfsadf"display={<Avatar></Avatar>} onClose={()=>{}}></ContentItem>
      <Box bg="#ccc" inlineBlock>ha</Box>
      <Chip onClose={()=>{}} subType="success" type="smooth">hola</Chip>
      <Alert>this is a default Alert </Alert>
          <Alert type='ghost' > this is a default Alert </Alert>
          <Alert type='ghost' subType='warning' fullRounded > this is a default Alert </Alert>
    
    <Backdrop
      ope
    >
      <Box bg="#fff" w="100px" flex center h="100px">ola</Box>
    </Backdrop>
  
    <Button insertStyleBefore="color:red; display: flex;padding: 1rem; border: none;">asdf</Button>
    <Accordion title="asdf">asdf</Accordion>
    <Slider
      gap="20px"
    >
      <Box h="500px" bg="#ccc" w="80vw"></Box>
      <Box h="500px" bg="#ccc" w="80vw"></Box>
      <Box h="500px" bg="#ccc" w="80vw"></Box>
    </Slider>
    <Btn subType="success" raised>asdf</Btn>
  
    </>
  )
}
export default App
//change to useComponentContext
//useComponentContext in all componets