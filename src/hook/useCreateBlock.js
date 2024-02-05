import React, { useState } from 'react'

export const openCreateBlock = () => {
    const [open, setOpen] = useState(false)

    const openChangeHandler = () => {
        setOpen(true)
    }
    const closeChangeHandler = () => {
        setOpen(false)
    }

    return {
        open,
        openChangeHandler,
        closeChangeHandler,
    }
}
