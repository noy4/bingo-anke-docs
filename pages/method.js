import { Dialog, DialogContent, Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Blue, Grey, H4, H5, MyCard, Red, Title } from '../components/text'

export default function BingoAnke() {
    const title = '実験方法'
    const [open, setOpen] = useState(false)

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
                            <H4>被験者</H4>
                            <H5>・ 62人（男性39人・女性23人）</H5>
                            <H5>・ 20 ~ 23歳</H5>
                            <H5>・ 様々な都道府県の大学に通う学生</H5>
                        </MyCard>
                        <MyCard>
                            <H4>流れ</H4>
                            <div
                                style={{
                                    marginBottom: '2rem',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src="/images/flow.png"
                                    width={776}
                                    height={400}
                                    onClick={() => setOpen(true)}
                                />
                            </div>
                            <Dialog
                                open={open}
                                onClose={() => setOpen(false)}
                                maxWidth={'lg'}
                            >
                                <DialogContent>
                                    <Image
                                        src="/images/flow.png"
                                        width={1552}
                                        height={800}
                                    />
                                </DialogContent>
                            </Dialog>
                        </MyCard>
                    </Grid>
                    <Grid item xs>
                        <MyCard>
                            <H4>グループ</H4>
                            <H5>
                                A. <Grey>アンケート</Grey>についてのアンケート
                            </H5>
                            <H5>
                                B. <Grey>大学</Grey>についてのアンケート
                            </H5>
                            <H5 style={{ paddingLeft: '5rem' }}>
                                <strong>&times;</strong>
                            </H5>
                            <H5>1. 従来型アンケート</H5>
                            <H5>
                                2. ビンゴアンケ（ランキング<Red>なし</Red>）
                            </H5>
                            <H5>
                                3. ビンゴアンケ（ランキング<Blue>あり</Blue>）
                            </H5>
                            <H5 style={{ padding: '1rem 0 0 2rem' }}>
                                = <strong>6グループ</strong>
                            </H5>
                        </MyCard>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
