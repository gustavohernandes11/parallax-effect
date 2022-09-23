import * as Styled from "./styles";

export interface SectionType {
    justifyContent?: string;
    alignItems?: string;
    children: React.ReactNode;
    full?: boolean;
    className?: string;
    color?: string;
    id?: string;
}

export const Section = ({
    children,
    full,
    className,
    justifyContent,
    color,
    alignItems,
    id,
}: SectionType): JSX.Element => {
    const styles = {
        justifyContent: justifyContent,
        alignItems: alignItems,
    };
    return (
        <Styled.Container
            {...styles}
            full={full}
            className={className}
            color={color}
            id={id}
        >
            {children}
        </Styled.Container>
    );
};
