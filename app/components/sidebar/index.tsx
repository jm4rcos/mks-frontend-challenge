'use client'


import { useAppSelector } from "../../hooks/use-app-selector"

import { Product } from "@/types"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../../../app/features/sidebar/sidebar-slice"

import { CartItem } from "../cart-item"
import { CloseButton } from "../close-button"
import { SidebarFooter } from "../sidebar-footer"
import { SidebarContainer } from "./style"

export const Sidebar = () => { 
  const isOpen = useAppSelector((state) => state.sidebar.isOpen)
  const products = useAppSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
  };
    return (
        <SidebarContainer
            variants={variants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
        >
            <div className="sidebar-header">
                <h3>Carrinho de compras</h3>
                <CloseButton onClick={() => dispatch(closeSidebar())} />
            </div>

            <div className="sidebar-content">
                {products.map((product: Product) => (
                    <CartItem
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      quantity={product.quantity}
                      photo={product.photo}
                      id={product.id}
                      
                    />
                ))}
            </div>
            <div className="sidebar-footer">
                <SidebarFooter />
            </div>
        </SidebarContainer>
    )
}