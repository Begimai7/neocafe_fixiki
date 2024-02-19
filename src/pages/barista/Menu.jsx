import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BaristaModal } from '../../components/barista/BaristaModal.jsx'
import { MenuSort } from './MenuSort.jsx'
import { Coffee } from './Coffee.jsx'

export const BaristaMenu = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    // const [open, setOpen] = useState(false)

    const openChangeHandler = () => {
        setSearchParams({ ...searchParams, 'menu-modal': 'true' })
        console.log('Эта штука работае, это ты виноват что она не работает ')
        // setOpen(!open)
    }
    const open = searchParams.has('menu-modal')
    console.log(open, ' smd k')
    const closeHandler = () =>
        setSearchParams(searchParams.delete('menu-modal'))

    return (
        <div>
            <BaristaModal open={open} handleClose={closeHandler} />
            <MenuSort>
                <Coffee openChangeHandler={openChangeHandler} />
            </MenuSort>
        </div>
    )
}
