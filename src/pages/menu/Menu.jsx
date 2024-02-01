import React from 'react'
import { data, titlesMenuHeaderTable } from '../../utils/constants'
import { TableCard } from '../../components/admin/Table/TableCard'

const Menu = () => {
    return (
        <div>
            <TableCard headerTable={titlesMenuHeaderTable} dataTable={data} />
        </div>
    )
}

export default Menu
