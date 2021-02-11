import Head from 'next/head'
import { Blue, Grey, H4, H5, MyCard, Red, Title } from '../components/text'

export default function Background() {
    return (
        <>
            <Head>
                <title>背景</title>
            </Head>
            <main>
                <Title>背景</Title>
                <MyCard>
                    <H4>1. オンライン調査</H4>
                    <H5>
                        ・ <Red>いい加減な回答</Red>・<Red>回答の中断</Red>
                        などが課題としてあげられている。
                    </H5>
                </MyCard>
                <MyCard>
                    <H4>2. ゲーミフィケーション</H4>
                    <H5>
                        ・ ゲームの要素を <Grey>ゲーム以外の分野</Grey>
                        で用いること
                    </H5>
                    <H5>
                        ・ 様々な分野（ビジネス・教育・医療 etc.）で活用され、
                        <Blue>意欲向上</Blue>などの点で有効
                    </H5>
                </MyCard>
                <MyCard>
                    <H4>3. オンライン調査のゲーミフィケーション</H4>
                    <H5>
                        ・ <Blue>回答意欲</Blue>・<Blue>回答率</Blue>・
                        <Blue>得られるデータの質</Blue>
                        の向上などの利点が示されている。
                    </H5>
                    <H5>
                        ・ ゲーミフィケーションを適用したオンライン調査の
                        <Red>作成の労力が非常に大きい</Red>。
                    </H5>
                    <H5>
                        ・ ゲーム要素によって<Red>回答内容の質に影響が出る</Red>
                        場合がある。
                    </H5>
                </MyCard>
            </main>
        </>
    )
}
