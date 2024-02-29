import { useEffect, useCallback } from 'react'
import { styled } from '@mui/system'
import SideBar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messenger from './Messenger/Messenger'
import AppBar from './AppBar/AppBar'
import { logout } from '../shared/utils/auth'

import { getActions } from '../store/actions/authActions'
import { useDispatch, useSelector } from 'react-redux'
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection'
import Room from './Room/Room'
const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
})

const Dashboard = () => {
    const dispatch = useDispatch()
    const setUserDetails = useCallback(getActions(dispatch).setUserDetails, [])

    const isUserInRoom = useSelector((store) => store.room.isUserInRoom)
    // console.log(setUserDetails, isUserInRoom)
    useEffect(() => {
        const userDetails = localStorage.getItem('user')

        if (!userDetails) {
            logout()
        } else {
            setUserDetails(JSON.parse(userDetails))
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, [setUserDetails])

    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
            {isUserInRoom && <Room />}
        </Wrapper>
    )
}
export default Dashboard
