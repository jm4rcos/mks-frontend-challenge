'use client'

import { CartButton } from "../ui/cart-button"
import { Logo } from "../ui/logo"
import { NavbarContainer } from "./style"

export const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo />
            <CartButton />
        </NavbarContainer>
    )
}