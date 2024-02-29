import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { logout } from '../../shared/utils/auth'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getActions } from '../../store/actions/roomActions'
export default function BasicMenu() {
    const dispatch = useDispatch()
    const { audioOnly } = useSelector((store) => store.room)
    const setAudioOnly = getActions(dispatch).setAudioOnly
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleAudioOnlyChange = () => {
        setAudioOnly(!audioOnly)
    }

    return (
        <div>
            <IconButton onClick={handleMenuOpen} style={{ color: 'white' }}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={logout}>Logout</MenuItem>
                <MenuItem onClick={handleAudioOnlyChange}>
                    {audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled'}
                </MenuItem>
            </Menu>
        </div>
    )
}
