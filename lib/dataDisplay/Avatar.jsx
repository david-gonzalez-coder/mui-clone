import * as components from 'atomic-library-core'
import { BsFillPersonFill, BsFillBookmarkCheckFill } from 'react-icons/bs'
import { createElement, useState } from 'react'
const Avatar = ({ component = 'Box', children, alt="", size, src, ...rest }) => {
  const [error, setError] = useState(false)
  
  const props = {
    insertStyleBefore: `
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100px;
            object-fit: cover;
        }
    `,
    userSelector: 'none',
    w: '40px',
    h: '40px',
    br: '50px',
    m: '0',
    bg: '#ccc',
    fs: '1.2rem',
    fw: '500',
    c: '#fff',
    d: 'flex',
    center: true,
    ...components.useCompContext(),
    ...rest,
  }
  return createElement(
      components[component], 
      { ...props },
      <>
        {src ? (
          !error ? <img onError={()=>setError(true)} src={src} alt={alt} /> : 
          alt ? alt[0] : children ? children : <BsFillPersonFill  />
        ) : (
          children ? children : <BsFillPersonFill  />
        )} 
      </>
    )
}
export default Avatar
