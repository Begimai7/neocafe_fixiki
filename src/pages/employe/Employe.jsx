import React from 'react'
import { data, titlesEmplayeesHeaderTable } from '../../utils/constants'
import { TableCard } from '../../components/admin/Table/TableCard'

const Employe = () => {
    return (
        <div>
            <TableCard
                headerTable={titlesEmplayeesHeaderTable}
                dataTable={data}
            />
        </div>
    )
}

export default Employe
