import { Grid } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import { Blue, Grey, H4, H5, MyCard, Title } from '../components/text'

export default function BingoAnke() {
    const imagePaths = ['base_view.png', 'bingo_modal.png', 'status_drawer.png']

    return (
        <>
            <Head>
                <title>ビンゴアンケ</title>
            </Head>
            <main>
                <Title>ビンゴアンケ</Title>
                <MyCard>
                    <Grid container>
                        <Grid item xs={5}>
                            {imagePaths.map((path) => (
                                <div
                                    key={path}
                                    style={{
                                        margin: '2rem 0.5rem',
                                        display: 'inline-block',
                                    }}
                                >
                                    <Image
                                        src={`/images/${path}`}
                                        width={100}
                                        height={178}
                                    />
                                </div>
                            ))}
                        </Grid>
                        <Grid item xs={7}>
                            <H4>ビンゴアンケ</H4>
                            <H5>
                                ・ <Grey>ビンゴ</Grey>
                                をプレイしながら回答を進められる、オンライン調査フォームの
                                <Grey>雛形</Grey>
                            </H5>
                        </Grid>
                    </Grid>
                </MyCard>
                <Grid container spacing={5}>
                    <Grid item xs>
                        <MyCard>
                            <H4>目的</H4>
                            <H5>
                                ・ アンケート回答者の
                                <Blue>回答意欲</Blue>
                                を向上させること
                            </H5>
                            <H5>
                                ・ アンケートが
                                <Blue>楽しく</Blue>
                                回答できるものになること
                            </H5>
                        </MyCard>
                    </Grid>
                    <Grid item xs>
                        <MyCard>
                            <H4>雛形である意図</H4>
                            <H5>
                                ・ 労力の大幅な<Blue>削減</Blue>
                            </H5>
                            <H5>
                                ・ 問題のゲーム要素を
                                <Blue>排除</Blue>
                            </H5>
                        </MyCard>
                    </Grid>
                </Grid>
            </main>
        </>
    )
}
