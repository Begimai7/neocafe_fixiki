import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectRoute = (props) => {
    const { component: Component, roles, ...rest } = props
    // const { role } = useSelector((state) => state.role)
    const role = 'ADMIN'

    if (role !== roles || !roles.includes(role)) {
        return <Navigate to="/" replace={true} />
    }
    return <Component {...rest} />
}
export default ProtectRoute
