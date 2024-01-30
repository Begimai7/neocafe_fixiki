import * as React from 'react'
import Box from '@mui/material/Box'
import { Modal as MuiModal } from '@mui/material'
import { styled } from '@mui/material'


export default function Modal({ children, open, handleClose, borderRadius, width }) {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

    return (
        <div>
            <StyledModal
                open={true}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                borderRadius={borderRadius}
                width={width}
            >
                <Box sx={style}>{children}</Box>
            </StyledModal>
        </div>
    )
}

const StyledModal = styled(MuiModal)(({ borderRadius, width }) => ({
    '.css-1wnsr1i ': {
        outline: 'none',
        border: 'none',
        width: width,
        borderRadius: borderRadius,
    },
}))
