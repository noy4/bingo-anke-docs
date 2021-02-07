import { useEffect, useState } from 'react'
import {
    CssBaseline,
    Drawer,
    List,
    ListItem,
    Button,
    Hidden,
    Fab,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const drawerWidth = 220

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
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
    const listItems = [
        { path: '/background', text: '1. 背景' },
        { path: '/purpose', text: '2. 目的' },
        { path: '/bingo-anke', text: '3. ビンゴアンケ' },
        { path: '/method', text: '4. 実験方法' },
        { path: '/result-and-discussion', text: '5. 結果・考察' },
    ]

    const classes = useStyles()
    const router = useRouter()

    const [open, setOpen] = useState(false)

    const drawer = (
        <>
            <Link href="/">
                <a>
                    <h3 style={{ textAlign: 'center' }}>
                        ビンゴを活用した
                        <br />
                        オンライン調査の
                        <br />
                        ゲーミフィケーション
                    </h3>
                </a>
            </Link>
            <List>
                {listItems.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <a>
                            <ListItem
                                button
                                selected={item.path === router.pathname}
                            >
                                {item.text}
                            </ListItem>
                        </a>
                    </Link>
                ))}
            </List>
        </>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Hidden smUp implementation="css">
                <Drawer
                    className={classes.drawer}
                    variant="temporary"
                    open={open}
                    onClose={() => setOpen(false)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    variant="persistent"
                    open
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <div className={classes.content}>
                <Fab className={classes.fab} onClick={() => setOpen(true)}>
                    <MenuIcon />
                </Fab>
                {children}
            </div>
        </div>
    )
}
