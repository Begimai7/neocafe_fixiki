import * as React from 'react'
import Paper from '@mui/material/Paper'
import { Table as MuiTable } from '@mui/material'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

export default function Table({ headerTable, dataTableRow }) {
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <MuiTable stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {headerTable.map((column) => (
                                <TableCell key={column.id}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTableRow ? (
                            dataTableRow
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage,
                                )
                                .map((row) => (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.one}
                                    >
                                        {headerTable.map((column) => {
                                            const value = row[column.id]
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format &&
                                                    typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={headerTable.length}
                                    align="center"
                                >
                                    No data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </MuiTable>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={10}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
