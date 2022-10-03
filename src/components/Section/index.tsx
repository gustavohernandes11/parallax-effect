import * as Styled from './styles'

export const Section = ({children, id}: any) => {
    return (
        <Styled.Container id={id}>
            {children}
        </Styled.Container>
    )
}