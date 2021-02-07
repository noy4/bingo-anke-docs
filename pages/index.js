import { Grid, Typography } from '@material-ui/core'
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    ビンゴを活用したオンライン調査のゲーミフィケーション
                </title>
            </Head>

            <main>
                <Typography align="center" style={{ marginTop: '3rem' }}>
                    2020年度　卒業論文
                </Typography>
                <Typography
                    variant="h3"
                    align="center"
                    style={{
                        lineHeight: '5rem',
                        marginTop: '7rem',
                        fontWeight: 'bold',
                    }}
                >
                    ビンゴを活用した
                    <br />
                    オンライン調査のゲーミフィケーション
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="textSecondary"
                    style={{
                        marginTop: '2rem',
                        fontWeight: '500',
                    }}
                >
                    Gamification of Online Surveys with BINGO
                </Typography>
                <Typography
                    align="center"
                    style={{ lineHeight: '2rem', marginTop: '7rem' }}
                >
                    九州大学 芸術工学部
                    <br />
                    芸術情報設計学科
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    style={{ marginTop: '2rem', marginBottom: '5rem' }}
                >
                    1DS17416M　桑村直弥
                </Typography>
            </main>
        </div>
    )
}
