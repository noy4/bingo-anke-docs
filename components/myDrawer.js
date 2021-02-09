import {
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText,
    Typography,
    Container,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { drawerWidth, listItems } from '../const/common'

const useStyles = makeStyles((theme) => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}))

export default function MyDrawer() {
    const classes = useStyles()
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const DrawerHeader = () => (
        <Link href="/">
            <a>
                <Box display="flex" justifyContent="center" m={3}>
                    <Image
                        src="/images/bingo_anke.png"
                        width={100}
                        height={100}
                    />
                </Box>
                <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    ビンゴを活用した
                    <br />
                    オンライン調査の
                    <br />
                    ゲーミフィケーション
                </h3>
            </a>
        </Link>
    )

    const NestedItems = ({ item, index }) =>
        item.nestedItems ? (
            <List disablePadding>
                {item.nestedItems.map((nestedItem, nestedIndex) => (
                    <Link href={nestedItem.path} key={nestedItem.path}>
                        <a>
                            <ListItem
                                button
                                selected={nestedItem.path === router.pathname}
                                style={{
                                    paddingLeft: '2rem',
                                }}
                            >
                                <ListItemText
                                    secondary={`${index + 1}.${
                                        nestedIndex + 1
                                    }. ${nestedItem.text}`}
                                />
                            </ListItem>
                        </a>
                    </Link>
                ))}
            </List>
        ) : null

    const DrawerContent = () => (
        <List>
            {listItems.map((item, index) => (
                <div key={index}>
                    <Link href={item.path}>
                        <a>
                            <ListItem
                                button
                                selected={item.path === router.pathname}
                            >
                                <ListItemText
                                    primary={`${index + 1}. ${item.text}`}
                                />
                            </ListItem>
                        </a>
                    </Link>
                    <NestedItems item={item} index={index} />
                </div>
            ))}
        </List>
    )

    const DrawerFooter = () => (
        <>
            <Container
                style={{
                    backgroundColor: '#f48fb1',
                    position: 'absolute',
                    bottom: 0,
                    padding: '0.1rem 0 0.1rem 3.5rem',
                }}
            >
                <Typography
                    variant="caption"
                    style={{
                        color: 'white',
                    }}
                >
                    ©︎ 2021 桑村直弥.
                </Typography>
            </Container>
        </>
    )

    const drawer = (
        <>
            <DrawerHeader />
            <DrawerContent />
            <DrawerFooter />
        </>
    )

    return (
        <>
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
        </>
    )
}
