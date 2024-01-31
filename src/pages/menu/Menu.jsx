import React from 'react'
import { TableCard } from '../../components/admin/Table/TableCard'
import { data, titlesMenuHeaderTable } from '../../utils/constants'

export const Menu = () => {
    return (
        <div>
            <TableCard headerTable={titlesMenuHeaderTable} dataTable={data} />
        </div>
    )
}
