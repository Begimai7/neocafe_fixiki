import React from 'react'
import SideBar from '../components/admin/AdminSideBar'
import Header from '../components/admin/Header'
import { Outlet } from 'react-router'

const AdminLayout = () => {
  return (
    <div style={{width: '100vw', display: 'flex'}}>
      <SideBar />
      <div style={{width: '86vw'}}>
        <Header />
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
