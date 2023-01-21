import React from 'react'
import Toggle from 'react-styled-toggle'


function ToggleButtonComponent() {
    return (
        <>
            <td className=''><Toggle width={45} backgroundColorChecked={"green"} height={20} sliderHeight={10} sliderWidth={10} /></td>
        </>
    )
}

export default ToggleButtonComponent