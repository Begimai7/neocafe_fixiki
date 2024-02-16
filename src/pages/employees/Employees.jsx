import React from 'react'
import { titlesEmplayeesHeaderTable } from '../../utils/constants'
import { TableCard, createData } from '../../components/admin/Table/TableCard'
import Navbar from '../../components/admin/Navbar'

const dataE = [
    {
        id: 1,
        name: 'Алихандро',
        job: 'Бармен',
        chooseBranch: 'NeoCafe Dzerzhinka',
        phone: '+996 (555) 231 234',
        Schedule: 'Пн, Вт, Чт, Пт',
    },
    {
        id: 2,
        name: 'Алихандро',
        job: 'Бармен',
        chooseBranch: 'NeoCafe Dzerzhinka',
        phone: '+996 (555) 231 234',
        Schedule: 'Пн, Вт, Чт, Пт',
    },
    {
        id: 3,
        name: 'Алихандро',
        job: 'Бармен',
        chooseBranch: 'NeoCafe Dzerzhinka',
        phone: '+996 (555) 231 234',
        Schedule: 'Пн, Вт, Чт, Пт',
    },
    {
        id: 4,
        name: 'Алихандро',
        job: 'Бармен',
        chooseBranch: 'NeoCafe Dzerzhinka',
        phone: '+996 (555) 231 234',
        Schedule: 'Пн, Вт, Чт, Пт',
    },
    {
        id: 5,
        name: 'Алихандро',
        job: 'Бармен',
        chooseBranch: 'NeoCafe Dzerzhinka',
        phone: '+996 (555) 231 234',
        Schedule: 'Пн, Вт, Чт, Пт',
    },
]

export const Employees = () => {
    const rows = dataE.map((el) =>
        createData(
            el.id,
            el.name,
            el.job,
            el.chooseBranch,
            el.phone,
            el.Schedule,
        ),
    )
    return (
        <div>
            <Navbar />
            <TableCard
                headerTable={titlesEmplayeesHeaderTable}
                dataTable={rows}
            />
        </div>
    )
}
