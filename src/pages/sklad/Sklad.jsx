import React from 'react'
import { TableCard, createData } from '../../components/admin/Table/TableCard'
import { tabTitle, titlesSkladHeaderTable } from '../../utils/constants'
import AdminTabs from '../../components/UI/Tabs'
import Navbar from '../../components/admin/Navbar'
import { EditSkladModal } from '../../components/admin/EditSkladModal'
import { useSearchParams } from 'react-router-dom'

const dataS = [
    {
        id: 1,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
    {
        id: 2,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
    {
        id: 3,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
    {
        id: 4,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
    {
        id: 5,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
    {
        id: 6,
        name: 'Капучино',
        quality: 'Кофе',
        limit: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        data: '100',
    },
]

export const Sklad = () => {
    const rows = dataS.map((el) =>
        createData(el.id, el.name, el.quality, el.limit, el.data),
    )
    const [newParams, setNewParams] = useSearchParams()
    const openChangeHandler = () => {
        setNewParams({ ...newParams, 'create-branch-sclad': 'true' })
    }
    const open = newParams.has('create-branch-sclad')
    const delHandel = () => {
        setNewParams(newParams.delete('create-branch-sclad'))
    }
    return (
        <div>
            <EditSkladModal open={open} handleClose={delHandel} />
            <Navbar openChangeHandler={openChangeHandler} />
            <AdminTabs tabTitle={tabTitle}>
                <TableCard
                    headerTable={titlesSkladHeaderTable}
                    dataTable={rows}
                />
            </AdminTabs>
        </div>
    )
}
