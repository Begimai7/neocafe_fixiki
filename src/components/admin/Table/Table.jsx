import * as React from 'react'
import { Table as MuiTable } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { PiDotsThreeVerticalBold } from 'react-icons/pi'
import { IconButton, styled, TableHead, Paper as MuiPaper } from '@mui/material'

export default function Table({ headerTable, dataTableRow }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <>
                <Paper>
                    <TableContainer sx={{ maxHeight: 670 }}>
                        <Tables stickyHeader aria-label="sticky table">
                            <div
                                style={{
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                }}
                            >
                                <TableHead>
                                    <TableRow>
                                        {headerTable.map((column) => (
                                            <HeaderTableCell
                                                key={column.id}
                                                align={column.align}
                                            >
                                                {column.label}
                                            </HeaderTableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>

                                <TableBodyStyled>
                                    {dataTableRow.map((row) => {
                                        return (
                                            <TableRowStyled
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.one}
                                                id={row.id}
                                            >
                                                {headerTable.map((column) => {
                                                    const value = row[column.id]
                                                    let cellContent
                                                    if (
                                                        column.label === 'Ред.'
                                                    ) {
                                                        cellContent = (
                                                            <div>
                                                                <IconButton>
                                                                    <PiDotsThreeVerticalBold />
                                                                </IconButton>
                                                            </div>
                                                        )
                                                    } else if (
                                                        column.id === 'one'
                                                    ) {
                                                        cellContent = (
                                                            <NumberList>
                                                                № {row.one}
                                                            </NumberList>
                                                        )
                                                    } else {
                                                        cellContent = value
                                                    }

                                                    return (
                                                        <TableCell
                                                            padding="none"
                                                            size="small"
                                                        >
                                                            {cellContent}
                                                        </TableCell>
                                                    )
                                                })}
                                            </TableRowStyled>
                                        )
                                    })}
                                </TableBodyStyled>
                            </div>
                        </Tables>
                    </TableContainer>
                </Paper>
                {/* {openProfile ? (
                    ''
                ) : (
                    <TablePaginations
                        component="div"
                        count={dataRows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        style={{ color: '#fff' }}
                    />
                )} */}
            </>
        </div>
    )
}

const Paper = styled(MuiPaper)(() => ({
    overflow: 'hidden',
    background: 'transparent',
}))

const Tables = styled(MuiTable)`
    margin: 0 auto;
    font-size: 16px;
    color: '#000';
    background-color: '#F9F9F9';
    tbody {
        tr {
            padding: 0;
        }
        tr:hover {
            background: linear-gradient(90deg, #f9f9f9);
        }
        border-radius: 0 0 10px 10px;
    }
    border-radius: 10px;
    /* border: 1px solid red; */

    th {
        padding: 10px;
        text-align: center;
        background-color: transparent;
        font-family: 'Nunito Sans';
        font-size: 14px;
        font-weight: 800;
    }
    td {
        /* color: #fff; */
        text-align: center;
        border: none;
        font-family: 'Nunito Sans';
        padding: 0;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        background-color: '#F9F9F9';
    }
`

const TablePaginations = styled(TablePagination)`
    margin-right: 26px;
    .MuiTablePagination-actions button {
        color: white;
    }
    .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar {
        .MuiTablePagination-selectLabel {
            display: none;
            color: green;
        }
    }
    .css-16c50h-MuiInputBase-root-MuiTablePagination-select {
        display: none;
    }
`

const TableRowStyled = styled(TableRow)(() => ({
    borderBottom: '1px solid red',
    '.css-kec7zl-MuiTable-root th': {
        padding: '0 ',
    },
    '.css-1m13d3u-MuiTableCell-root ': {
        padding: '10px 0',
        borderBottom: '1px solid #d8d6d6',
    },
}))
const HeaderTableCell = styled(TableCell)(() => ({
    width: '100vw',
    borderBottom: '1.6px solid #000',
}))
const TableBodyStyled = styled(TableBody)(() => ({
    color: 'red',
}))
const NumberList = styled('div')(() => ({
    color: '#00315D',
    fontFamily: 900
}))
