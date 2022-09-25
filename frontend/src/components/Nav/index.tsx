import * as Styled from "./styles";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "@styled-icons/entypo";
import { Button, IconButton, Drawer } from "@mui/material";

const MenuLinks = () => {
    return (
        <>
            <Link href="#section-why-us">
                <Button>Why us?</Button>
            </Link>
            <Link href="#section-about-us">
                <Button>About</Button>
            </Link>
            <Link href="#section-contact-us">
                <Button>Contact</Button>
            </Link>
            <Link href="#section-meet-out-plans">
                <Button>Plans</Button>
            </Link>
        </>
    );
};

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Styled.Container>
            <span id="nav-buttons">
            <MenuLinks />
            </span>

            <span id="drawer-nav-buttons">
                <IconButton color="primary" onClick={() => setIsMenuOpen(true)}>
                    <Menu height={25} width={25} />
                </IconButton>
            </span>
            <Drawer
                onClose={() => setIsMenuOpen(false)}
                anchor="right"
                open={isMenuOpen}
            >
                <MenuLinks />
            </Drawer>
        </Styled.Container>
    );
};
