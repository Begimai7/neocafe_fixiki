import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { Menu } from '../pages/menu/Menu'
import { Sklad } from '../pages/sklad/Sklad'
import { Branch } from '../pages/branch/Branch'
import { Employees } from '../pages/employees/Employees'
import ProtectRoute from './protect-route'
import { ROLES } from '../utils/constants'
import { BaristaLayout } from '../layout/BaristaLayout'
import { Orders } from '../pages/barista/Orders'
import { Profile } from '../pages/barista/profile/Profile'
import { BaristaMenu } from '../pages/barista/Menu'

export const router = createBrowserRouter([
    {
        path: '/admin',

        element: <ProtectRoute component={AdminLayout} roles={ROLES.ADMIN} />,
        children: [
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'sklad',
                element: <Sklad />,
            },
            {
                path: 'branches',
                element: <Branch />,
            },
            {
                path: 'emplyees',
                element: <Employees />,
            },
        ],
    },
    {
        path: '/barista',
        element: <BaristaLayout />,
        children: [
            {
                path: 'orders',
                element: <Orders />,
            },
            {
                path: 'menu',
                element: <BaristaMenu />,
                children: [
                    {
                        path: ':name',
                        element: <BaristaMenu />,
                    },
                ],
            },
            {
                path: 'profile',
                element: <Profile />,
            },
        ],
    },
])
