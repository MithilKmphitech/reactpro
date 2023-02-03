import React, { useState } from 'react'
const SelectMenu = (props) => {
    const [selectshow, setSelectshow] = useState(false);
    const [selectedopt, setSelectedopt] = useState('Select Menu');
    const selectClick = () => {
        setSelectshow(!selectshow);
    }

    const handleClick = (e) => {
        setSelectedopt(e.target.innerText)
        console.log(e.view.history.length)
        setSelectshow(!selectshow);
        props.handlechange(e,props.name)
    }
    return (
        <div className='select_menu'>
            <div className='selected_opt' onClick={selectClick}>
                <h2>{selectedopt}</h2>
            </div>
            <div className={`select_option_group ${selectshow ? 'show' : 'hide'}`} style={{ 'display': 'none' }}>
                {
                    props.option.map((opt, index) => {
                        return (
                            <p key={index} className='select_option' title={opt.value} onClick={(e) => handleClick(e)}>{opt.text}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectMenu;