import React from 'react'
import SideBar from '../components/admin/AdminSideBar'
import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
    return (
        <AdminLayoutContainer>
            <SideBar />

            <div>
                <p>Nurles components</p>
                <Outlet />
            </div>
        </AdminLayoutContainer>
    )
}

const AdminLayoutContainer = styled('div')(() => ({
    display: 'flex',
}))
