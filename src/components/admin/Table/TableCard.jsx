import React from 'react'
import Table from './Table.jsx';


function createData(one, two, three, four, five) {
      return { one, two, three, four, five};
    }

export const TableCard = ({headerTable, dataTable}) => {
    const rows = dataTable.map((el) =>
    
      createData(el.id, el.label, el.category, el.sostav, el.price)
      )
      console.log(headerTable, dataTable);
  
  return (
      <div>
        <Table headerTable={headerTable} dataTableRow={rows} />
      </div>
  )
}
