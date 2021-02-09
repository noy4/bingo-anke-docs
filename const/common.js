export const listItems = [
    { path: '/background', text: '背景' },
    {
        path: '/purpose',
        text: '目的',
        nestedItems: [
            { path: '/bingo-anke', text: 'ビンゴアンケ' },
            { path: '/experiment-purpose', text: '実験の目的' },
        ],
    },

    { path: '/method', text: '実験方法' },
    { path: '/result-and-discussion', text: '結果・考察' },
    { path: '/conclusion', text: 'まとめ' },
    { path: '/resources', text: '関連' },
]
export const paths = listItems.reduce((acc, item) => {
    acc = [...acc, item.path]
    if (item.nestedItems) {
        const nestedPaths = item.nestedItems.map(
            (nestedItem) => nestedItem.path
        )
        acc = [...acc, ...nestedPaths]
    }
    return acc
}, [])

export const drawerWidth = 220
