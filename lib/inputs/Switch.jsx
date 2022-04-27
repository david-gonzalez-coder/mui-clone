import {Input, Label, Span, ThemeColors2 as Colors} from 'atomic-library-core'
import {useState} from 'react'
const Switch = ({checked, subType="primary", disabled, onChange = () => {}, label, ...rest}) => {
    const [check, setCheck] = useState(false)

    return (
        <Label
            pt="relative"
            w="35px"
            h="15px"
            br="40px"
            bg={check ? Colors.light[subType] : Colors.light.disabled}
            d="inline-block"
            myStyle={{
                '::after': {
                    content: "''",
                    pt: 'absolute',
                    w: '20px',
                    h: '20px',
                    br: '20px',
                    bg: check ? Colors.main[subType] : '#fff',
                    bxSw: 'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
                    tt: '.1s',
                    t: 'calc(50% - 10px)',
                    tf: check ? 'translate(15px)' : ''
                },
            }}
            inlineFlex
            y='center'
            cursor={disabled ? 'default' : 'pointer'}
            {...rest}
        >
            <Input 
                type="checkbox"
                d="none"
                disabled={disabled}
                onChange={(e)=> {
                    setCheck(!check)
                    onChange(e)
                }}

            />
             {label && <Span c={disabled && colors.main.disabled}>{label}</Span>}
        </Label>
    )
}
export default Switch