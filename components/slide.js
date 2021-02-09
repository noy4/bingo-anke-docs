import { Button, Grid } from '@material-ui/core'
import { NavigateBefore, NavigateNext } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { paths } from '../const/common'

export default function Slide({ children }) {
    const router = useRouter()

    const firstPage = router.pathname === '/'
    const lastPage = router.pathname === paths[paths.length - 1]
    const pathIndex = paths.indexOf(router.pathname)

    function next() {
        if (lastPage) return
        const nextPath = paths[pathIndex + 1]
        router.push(nextPath)
    }
    function before() {
        if (firstPage) return
        const beforePath = pathIndex === 0 ? '/' : paths[pathIndex - 1]
        router.push(beforePath)
    }
    function handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
                next()
                break
            case 'ArrowLeft':
                before()
                break
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [router.pathname])

    return (
        <Grid container justify="center">
            <Grid item container xs={1}>
                {!firstPage && (
                    <Button
                        size="large"
                        startIcon={<NavigateBefore color="action" />}
                        style={{ height: '100vh' }}
                        onClick={before}
                    />
                )}
            </Grid>
            <Grid item xs={10}>
                {children}
            </Grid>
            <Grid item container justify="flex-end" xs={1}>
                {!lastPage && (
                    <Button
                        size="large"
                        endIcon={<NavigateNext color="action" />}
                        style={{ height: '100vh' }}
                        onClick={next}
                    />
                )}
            </Grid>
        </Grid>
    )
}
