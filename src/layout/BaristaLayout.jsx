import React from 'react'
import BaristaSideBar from '../components/barista/BaristaSideBar'
import { Outlet } from 'react-router-dom'

export const BaristaLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <BaristaSideBar />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                Eldiyar
                <Outlet />
            </div>
        </div>
    )
}
