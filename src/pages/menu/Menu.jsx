import React from 'react'
import { TableCard } from '../../components/admin/Table/TableCard'
import { data, titlesMenuHeaderTable } from '../../utils/constants'

export default function Menu() {

  return (
      <TableCard headerTable={titlesMenuHeaderTable} dataTable={data}/>
  )
}
