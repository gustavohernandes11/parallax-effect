import * as Styled from "./styles";

interface HeadingType {
    children: React.ReactNode;
    id?: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    className?: string;
    textAlign?: string;
    size?: string;
}

export const Heading = ({ children, id, as = "h1", className, textAlign, size }: HeadingType) => {

    return (
        <Styled.Wrapper className={className} textAlign={textAlign} as={as} id={id} size={size}>
            {children}
        </Styled.Wrapper>
    );
};
