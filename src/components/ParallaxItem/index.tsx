import { motion, useTransform, useScroll } from "framer-motion";

type ParallaxItemProps = {
    children: any;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    minY?: string | number;
    maxY?: string | number;
};

export const ParallaxItem = ({
    children,
    top = 0,
    left = 0,
    bottom = 0,
    right = 0,
    minY = 0,
    maxY = 100,
}: ParallaxItemProps) => {
    const { scrollYProgress } = useScroll();
    const componentPositionY = useTransform(scrollYProgress, [0, 1], [minY, maxY]);

    return (
        <motion.div
            style={{
                y: componentPositionY,
                position: "sticky",
                left: left,
                right: right,
                bottom: bottom,
                top: top,
                border: "1px solid grey",
                width: '100%',
                padding: 50
            }}
        >
            {children}
        </motion.div>
    );
};
