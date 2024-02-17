import React from 'react'
import { TableCard, createData } from '../../components/admin/Table/TableCard'
import { titlesMenuHeaderTable } from '../../utils/constants'
import Navbar from '../../components/admin/Navbar'

export const dataM = [
    {
        id: 1,
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 2,
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 3,
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 4,
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
    {
        id: 5,
        label: 'Капучино',
        category: 'Кофе',
        sostav: 'Молоко (70 мл), Кофе (15 зерен), Во...',
        price: '100',
    },
]
export const Menu = () => {
    const rows = dataM.map((el) =>
        createData(el.id, el.label, el.category, el.sostav, el.price),
    )
    return (
        <div>
            <Navbar />
            <TableCard headerTable={titlesMenuHeaderTable} dataTable={rows} />
        </div>
    )
}