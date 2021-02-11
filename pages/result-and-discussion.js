import { Dialog, DialogContent, Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Blue, Grey, H4, H5, MyCard, Red, Title } from '../components/text'

export default function BingoAnke() {
    const title = '結果・考察'
    const [open, setOpen] = useState(false)

    const dialog = (
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth={'lg'}>
            <DialogContent>
                <Grid container>
                    <Grid item xs={7}>
                        <Image
                            src="/images/evaluation.png"
                            width={700}
                            height={700}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        justify="center"
                        alignItems="center"
                        xs={5}
                    >
                        <Grid item>
                            <Image
                                src="/images/ev_A1-3.png"
                                width={436}
                                height={200}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Title>{title}</Title>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <MyCard>
                            <H4>評価</H4>
                            <div
                                style={{
                                    marginBottom: '2rem',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src="/images/ev_A1-3.png"
                                    width={436}
                                    height={200}
                                    onClick={() => setOpen(true)}
                                />
                            </div>
                            {dialog}
                        </MyCard>
                        <MyCard>
                            <H4>1. ビンゴアンケの有効性</H4>
                            <H5>
                                ・ 評価：<Blue>高⤴︎</Blue>
                            </H5>
                            <H5>
                                ・ 自由記述：<Blue>楽しい</Blue>・
                                <Blue>意欲向上</Blue>
                            </H5>
                            <H5>
                                ・ 有効な回答率：<Blue>UP⤴︎</Blue>
                            </H5>
                        </MyCard>
                    </Grid>
                    <Grid item xs>
                        <MyCard>
                            <H4>2. 回答値への影響</H4>
                            <H5>・ 回答値の質は下がらなかった。</H5>
                        </MyCard>
                        <MyCard>
                            <H4>3. ランキングの有効性</H4>
                            <H5>
                                ・ 評価：<Blue>高い</Blue>傾向
                            </H5>
                            <H5 style={{ paddingLeft: '3rem' }}>
                                →<strong>有効な可能性あり</strong>
                            </H5>
                        </MyCard>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
