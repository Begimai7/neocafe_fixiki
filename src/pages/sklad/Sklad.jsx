import React from 'react'
import { data, titlesFilialHeaderTable } from '../../utils/constants'
import { TableCard } from '../../components/admin/Table/TableCard'

const Sklad = () => {
    return (
        <div>
            <TableCard headerTable={titlesFilialHeaderTable} dataTable={data} />
        </div>
    )
}

export default Sklad
