import Head from 'next/head'
import { H4, MyCard, Title } from '../components/text'

export default function ExperimentPurpose() {
    return (
        <>
            <Head>
                <title>実験の目的</title>
            </Head>
            <main>
                <Title>実験の目的</Title>
                <MyCard>
                    <H4>以下3つの検証</H4>
                </MyCard>
                <MyCard sub>
                    <H4>1. ビンゴアンケの有効性</H4>
                </MyCard>
                <MyCard sub>
                    <H4>2. 回答値への影響</H4>
                </MyCard>
                <MyCard sub>
                    <H4>3. ランキングの有効性</H4>
                </MyCard>
            </main>
        </>
    )
}
