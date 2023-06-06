import React from 'react'
import SideMenu from './components/SideMenu'
import { Outlet, Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Header from './components/Header'

const Layout = ({ component }) => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Header />
                <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <SideMenu />
                    <div>
                        {component}
                    </div>
                </div>
            </div>
            {/* <Outlet /> */}
        </>
    )
}

export default Layout