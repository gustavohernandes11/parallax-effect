import * as Styled from "./styles";

interface HeadingType {
    children: React.ReactNode;
    id?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    textAlign?: "left" | "center" | "right";
    size?: "small" | "medium" | "large" | "huge";
}

export const Heading = ({ children, id, as = "h1", className, textAlign, size }: HeadingType) => {

    return (
        <Styled.Wrapper className={className} textAlign={textAlign} as={as} id={id} size={size}>
            {children}
        </Styled.Wrapper>
    );
};
