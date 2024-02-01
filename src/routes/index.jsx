import { createBrowserRouter } from 'react-router-dom'
import LayoutAdmin from '../layout/LayoutAdmin/LayoutAdmin'
import Menu from '../pages/menu/Menu'
import Sklad from '../pages/sklad/Sklad'
import Filial from '../pages/filial/Filial'
import Employe from '../pages/employe/Employe'

export const router = createBrowserRouter([
    {
        path: '/admin',
        element: <LayoutAdmin />,
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
                element: <Filial />,
            },
            {
                path: 'сотрудники',
                element: <Employe />,
            },
        ],
    },
])
