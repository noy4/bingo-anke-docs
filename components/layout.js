import { CssBaseline, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import { drawerWidth } from '../const/common'
import MyDrawer from './myDrawer'
import Slide from './slide'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    content: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {
            marginLeft: drawerWidth,
        },
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        left: theme.spacing(2),
    },
}))

export default function Layout({ children }) {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MyDrawer open={open} close={() => setOpen(false)} />
            <Fab className={classes.fab} onClick={() => setOpen(true)}>
                <MenuIcon />
            </Fab>
            <div className={classes.content}>
                <Slide>{children}</Slide>
            </div>
        </div>
    )
}
