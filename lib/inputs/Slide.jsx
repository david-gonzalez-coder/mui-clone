import {
  Input,
  Label,
  Span as Progress,
  Span as Wrapper,
  Span as Track,
  Span,
  ThemeColors2 as Colors,
} from 'atomic-library-core'
import { useState, useRef, useEffect } from 'react'

const Slide = ({defaultValue = 0, marks, min = 0, max = 100, step = 1, disabled, onChange = () => {}, subType="primary"}) => {
    const [inputValue, setInputValue] = useState(defaultValue)
    const [marksAmount, setMarksAmount] = useState([])
    const [marksProgressAmount, setMarksProgressAmount] = useState([])
    const inputRef = useRef(null)
    const progressRef = useRef(null)

      useEffect(() => {
        const input = inputRef.current
        const width = input.clientWidth
        const min = parseFloat(input.min)
        const max = parseFloat(input.max) 
        let stepSize
        if(min < 0) stepSize = width / (max + Math.abs(min))
        else stepSize = width / (max - min)
        const progressWidth = stepSize * (parseFloat(inputValue) + Math.abs(min)) 
        progressRef.current.style.width = `${progressWidth}px`
        const arr = []
        const markslong = width / stepSize / step
        for(let i = 0; i <= markslong; i++){
            arr.push("")
        }

        const arrProgress = []
        const markslongProgress = progressWidth / stepSize / step
        for(let i = 0; i < markslongProgress; i++){
            arrProgress.push("")
        }
        setMarksAmount(arr)
        setMarksProgressAmount(arrProgress)
    }, [inputValue])

    return (
        <Wrapper
            inlineFlex
            ai="center"
            w="170px"
            pt="relative"
        >
            <Track 
                pt="absolute"
                w="100%"
                h="4px"
                bg={disabled ? Colors.light.disabled : Colors.light[subType]}
                br="10px"
                z="0"
                inlineFlex
                ai="center"
                jc="space-between"
            >
                {marks && marksAmount.map(()=>
                <Span 
                    d="inline-block"
                    w="2px"
                    h="2px"
                    bg={disabled ? Colors.main.disabled : Colors.main[subType]}
                />)}
                
            </Track>
            <Progress
                ref={progressRef}
                pt="absolute"
                w="100px"
                h="6px"
                bg={disabled ? Colors.main.disabled : Colors.main[subType]}
                br="10px"
                z="0"
                inlineFlex
                ai="center"
                jc="space-between"

            >
           
            </Progress>
            <Input 
                type="range"
                onChange={(e)=> {
                    setInputValue(e.target.value);
                    onChange(e)
                }}
                value={inputValue}
                w="100%"
                min={min}
                max={max}
                step={step}
                z="0"
                disabled={disabled}
                ref={inputRef}
                insertStyleBefore={`
                    -webkit-appearance: none;
                    background: transparent;
                    height: 4px;
                        
                    ::-webkit-slider-thumb{
                         -webkit-appearance: none;
                        height: 20px;
                        width: 20px;
                        background: ${disabled ? Colors.main.disabled : Colors.main.primary};
                        border-radius: 10px;
    
                        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 
                                    0px 2px 2px 0px rgb(0 0 0 / 14%), 
                                    0px 1px 5px 0px rgb(0 0 0 / 12%);
                    }
                `}
            />
        </Wrapper>
    )
}
export default Slide