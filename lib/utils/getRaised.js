import {Theme} from 'atomic-library-core'

const raised = ({raised, raisedColor, type}) => raised ? 
`
    box-shadow: ${Theme.shading['2']};
    transition: box-sadow .2s;
    :active{ 
        box-shadow: ${Theme.shading['3']}
        transition: box-sadow .2s;
    }
` 
: 
` 
box-shadow: ${Theme.shading['2']};
transition: box-sadow .2s;
:active{ 
    box-shadow: ${Theme.shading['3']}
    transition: box-sadow .2s;
}
` 
export default raised