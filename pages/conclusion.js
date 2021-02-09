import Head from 'next/head'
import { Blue, Grey, H4, H5, MyCard, Red, Title } from '../components/text'

export default function Background() {
    return (
        <>
            <Head>
                <title>まとめ</title>
            </Head>
            <main>
                <Title>まとめ</Title>
                <MyCard>
                    <H4>ビンゴアンケを、</H4>
                </MyCard>
                <MyCard sub>
                    <H4>1. 開発した。</H4>
                </MyCard>
                <MyCard sub>
                    <H4>2. 検証した。</H4>
                </MyCard>
            </main>
        </>
    )
}
