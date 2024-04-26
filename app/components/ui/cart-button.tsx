'use client'

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/use-app-selector";

import { Button } from "../../components/style";
import { CartIcon } from "../../components/ui/cart-icon";
import { openSidebar } from "../../features/sidebar/sidebar-slice";

export const CartButton = () => {
    const products = useAppSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    return (
        <Button
            title="CartButton"
            onClick={() => dispatch(openSidebar())} 
        >
            <CartIcon />
            <span>{products.length}</span>
        </Button>
    )
}