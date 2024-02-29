import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const ChosenOptionLabel = () => {
    const name = useSelector((store) => store.chat.chosenChatDetails?.name)
    // console.log(name)
    return (
        <Typography
            sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}
        >{`${name ? `${name}` : ''}`}</Typography>
    )
}

export default ChosenOptionLabel
