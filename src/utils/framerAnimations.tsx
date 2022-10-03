import { motion } from "framer-motion";

export const AnimateOnView = ({ children }: any) => {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.span>
    );
};
