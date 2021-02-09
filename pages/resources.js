import { Dialog, DialogContent, Grid } from '@material-ui/core'
import { OpenInNew } from '@material-ui/icons'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Blue, Grey, H4, H5, MyCard, Red, Title } from '../components/text'

export default function BingoAnke() {
    const title = '関連'

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Title>{title}</Title>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <MyCard>
                            <H4>
                                <a
                                    href="https://docs.google.com/document/d/1JryB3ZXr5G3Q3fDUuZtLeUyAX5A4bCnYPCwiC-Yfksw/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    卒論 <OpenInNew />
                                </a>
                            </H4>
                            <div
                                style={{
                                    marginBottom: '1rem',
                                }}
                            >
                                <Image
                                    src="/images/qr_sotsulon.png"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </MyCard>
                        <MyCard>
                            <H4>
                                <a
                                    href="https://master.d3efwy5vjd8azj.amplifyapp.com/a-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ビンゴアンケ <OpenInNew />
                                </a>
                            </H4>
                            <div
                                style={{
                                    marginBottom: '1rem',
                                }}
                            >
                                <Image
                                    src="/images/qr_bingo_anke.png"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </MyCard>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
