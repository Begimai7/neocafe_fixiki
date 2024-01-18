import * as React from 'react'
import Box from '@mui/material/Box'
import { Modal as MuiModal } from '@mui/material'
import { styled } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function Modal({ children, open, handleClose, borderRadius }) {
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
