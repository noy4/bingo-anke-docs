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
                    <H4>1. 作って、</H4>
                    <H5>・ 労力減らした</H5>
                    <H5>・ 問題ゲーム要素を取り除いた</H5>
                </MyCard>
                <MyCard sub>
                    <H4>2. 試した。</H4>
                    <H5>
                        ・ ビンゴアンケ →<Blue>有効</Blue>
                    </H5>
                    <H5>
                        ・ 回答値の質の低下 →<Blue>今回はなし</Blue>
                    </H5>
                    <H5>
                        ・ ランキング →<Blue>有効かも</Blue>
                    </H5>
                </MyCard>
            </main>
        </>
    )
}
