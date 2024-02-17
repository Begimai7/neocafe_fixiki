import React from 'react'
import { matchRoutes, useLocation } from 'react-router-dom'

const pathConfig = [
    { path: '/admin/menu/*' },
    { path: '/admin/sklad/*' },
    { path: '/admin/branches/*' },
    { path: '/admin/employees/*' },
    { path: '/barista/orders/*' },
    { path: '/barista/menu/*' },
    { path: '/barista/profile/*' },
]

export const useCurrentPath = () => {
    const location = useLocation()
    const route = matchRoutes(pathConfig, location)
    if (route) {
        const [routeObject] = route
        return routeObject.pathnameBase
    }
    return '/'
}
