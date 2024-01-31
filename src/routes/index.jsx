import { createBrowserRouter } from 'react-router-dom'
import { AdminLayout } from '../layout/AdminLayout'
import { Menu } from '../pages/menu/Menu'
import { Sklad } from '../pages/sklad/Sklad'

export const router = createBrowserRouter([
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: 'menu',
                element: <Menu />,
            },
            {
                path: 'склад',
                element: <Sklad />,
            },
            {
                path: 'филиалы',
                element: <Menu />,
            },
            {
                path: 'сотрудники',
                element: <Menu />,
            },
        ],
    },
])
