import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginPage from './authPages/LoginPage/LoginPage'

import RegisterPage from './authPages/RegisterPage/RegisterPage'

import Dashboard from './Dashboard/Dashboard'
import AlterNotification from './shared/components/AlterNotification'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route index element={<Dashboard></Dashboard>} />
                    <Route
                        exact
                        path='/login'
                        element={<LoginPage></LoginPage>}
                    ></Route>

                    <Route
                        exact
                        path='/register'
                        element={<RegisterPage></RegisterPage>}
                    ></Route>

                    <Route
                        exact
                        path='/dashboard'
                        element={<Dashboard></Dashboard>}
                    ></Route>
                </Routes>
            </Router>

            <AlterNotification></AlterNotification>
        </>
    )
}

export default App
