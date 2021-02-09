import { Card, Typography } from '@material-ui/core'

export const Title = ({ children }) => (
    <Typography
        variant="h4"
        style={{
            fontWeight: 'bold',
            margin: '2rem 0',
        }}
    >
        {children}
    </Typography>
)

export const MyCard = (props) => (
    <Card className={props.sub ? 'sub-card' : 'card'}>{props.children}</Card>
)

export const H4 = ({ children }) => (
    <Typography variant="h4" style={{ fontWeight: 'bold', margin: '2rem 0' }}>
        {children}
    </Typography>
)
export const H5 = ({ children, style }) => (
    <Typography variant="h5" style={{ ...style, margin: '0 0 2rem 2rem' }}>
        {children}
    </Typography>
)

export const Grey = ({ children }) => <code className="grey">{children}</code>
export const Red = ({ children }) => <code className="red">{children}</code>
export const Blue = ({ children }) => <code className="blue">{children}</code>
