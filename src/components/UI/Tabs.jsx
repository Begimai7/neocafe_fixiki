import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

export default function AdminTabs({ children, tabTitle }) {
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <StyledBox>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        {/* <Tab label=" Готовая продукция" {...a11yProps(0)} />
                        <Tab label=" Сырье" {...a11yProps(1)} />
                        <Tab
                            label="Заканчивающиеся продукты"
                            {...a11yProps(2)}
                        /> */}

                        {tabTitle.map((el) => (
                            <Tab label={el.name} />
                        ))}
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {children}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {children}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {children}
                </CustomTabPanel>
            </Box>
        </StyledBox>
    )
}

const StyledBox = styled(Box)(() => ({
    color: '#C1C1C3',
    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected ': {
        alignItems: 'center',
        color: 'red',
        borderBottom: 'red  ',
    },
    '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root': {
        color: '#C1C1C3',
    },
    '.css-1aquho2-MuiTabs-indicator': {
        backgroundColor: 'red',
    },
}))
