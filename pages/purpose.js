import { Typography, Paper } from '@material-ui/core'
import Head from 'next/head'
import { H4, Title, H5, Red, MyCard } from '../components/text'

export default function Purpose() {
    return (
        <>
            <Head>
                <title>目的</title>
            </Head>
            <main>
                <Title>目的</Title>
                <MyCard>
                    <H4>先行研究の以下3つの問題点を解決すること</H4>
                </MyCard>
                <MyCard sub>
                    <H4>1. 作成の労力</H4>
                    <H5>
                        ・ ゲーミフィケーションを適用したオンライン調査の
                        <Red>作成の労力が非常に大きい</Red>。
                    </H5>
                </MyCard>
                <MyCard sub>
                    <H4>2. 回答値への影響</H4>
                    <H5>
                        ・ ゲーム要素が
                        <Red>回答値の質を下げる</Red>
                        場合がある。
                    </H5>
                </MyCard>
                <MyCard sub>
                    <H4>3. ランキング</H4>
                    <H5>
                        ・ ランキングがオンライン調査において
                        <Red>有効であるかが示されていない</Red>。
                    </H5>
                </MyCard>
            </main>
        </>
    )
}
