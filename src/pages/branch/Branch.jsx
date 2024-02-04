import React from 'react'
import { titlesFilialHeaderTable } from '../../utils/constants'
import { TableCard, createData } from '../../components/admin/Table/TableCard'
import Navbar from '../../components/admin/Navbar'
// import { openCreateBlock } from '../../hook/useCreateBlock'
import CreateNewBranch from '../../components/admin/AddNewFillial'
import { useSearchParams } from 'react-router-dom'

const dataB = [
    {
        id: 1,
        nameOfCafe: 'NeoCafe Dzerzhinka',
        address: 'бульвар Эркиндик, 35',
        timeOfJob: 'Каждый день с 11:00 до 22:00 ',
    },
    {
        id: 2,
        nameOfCafe: 'NeoCafe Dzerzhinka',
        address: 'бульвар Эркиндик, 35',
        timeOfJob: 'Каждый день с 11:00 до 22:00 ',
    },
    {
        id: 3,
        nameOfCafe: 'NeoCafe Dzerzhinka',
        address: 'бульвар Эркиндик, 35',
        timeOfJob: 'Каждый день с 11:00 до 22:00 ',
    },
    {
        id: 4,
        nameOfCafe: 'NeoCafe Dzerzhinka',
        address: 'бульвар Эркиндик, 35',
        timeOfJob: 'Каждый день с 11:00 до 22:00 ',
    },
    {
        id: 5,
        nameOfCafe: 'NeoCafe Dzerzhinka',
        address: 'бульвар Эркиндик, 35',
        timeOfJob: 'Каждый день с 11:00 до 22:00 ',
    },
]

export const Branch = () => {
    // const { open, openChangeHandler, closeChangeHandler } = openCreateBlock()
    const [searchParams, setSearchParams] = useSearchParams()
    const rows = dataB.map((el) =>
        createData(el.id, el.nameOfCafe, el.address, el.timeOfJob),
    )
    const openChangeHandler = () => {
        setSearchParams({ ...searchParams, 'create-branch': 'true' })
    }
    const open = searchParams.has('create-branch')
    const closeHandler = () =>
        setSearchParams(searchParams.delete('create-branch'))

    return (
        <div>
            <CreateNewBranch open={open} handleClose={closeHandler} />
            <Navbar openChangeHandler={openChangeHandler} />
            <TableCard headerTable={titlesFilialHeaderTable} dataTable={rows} />
        </div>
    )
}
