import React from 'react'
import Table from './Table.jsx'

export function createData(one, two, three, four, five, six) {
    return { one, two, three, four, five, six }}

export const TableCard = ({ headerTable, dataTable }) => {
    // const rows = dataTable.map((el) =>
    //     createData(el.id, el.label, el.category, el.sostav, el.price),
    // )

    return (
        <div>
            <Table headerTable={headerTable} dataTableRow={dataTable} />
        </div>
    )
}