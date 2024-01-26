import * as React from 'react'
import Box from '@mui/material/Box'
import { Modal as MuiModal } from '@mui/material'
import { styled } from '@mui/material'

export default function Modal({
    children,
    open,
    handleClose,
    borderRadius,
    width,
    background,
}) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        borderRadius: borderRadius,
        background: background,
        boxShadow: 24,
        width: width,
        p: 4,
    }
    return (
        <div>
            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                borderRadius={borderRadius}
            >
                <Box sx={style}>{children}</Box>
            </StyledModal>
        </div>
    )
}

const StyledModal = styled(MuiModal)(({ borderRadius }) => ({
    '.css-1wnsr1i ': {
        outline: 'none',
        border: 'none',
        borderRadius: borderRadius,
    },
}))
