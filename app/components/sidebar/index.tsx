'use client'

import { useState } from "react"

import { CartItem } from "../cart-item"
import { CloseButton } from "../close-button"
import { SidebarFooter } from "../sidebar-footer"
import { SidebarContainer } from "./style"

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const variants = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

    return (
        <SidebarContainer
            variants={variants}
        initial="closed"
        animate={sidebarOpen ? 'open' : 'closed'}
        >
            <div className="sidebar-header">
                <h3>Carrinho de compras</h3>
                <CloseButton onClick={() => {}} />
            </div>

            <div className="sidebar-content">
                <CartItem title="Apple Watch Series 4 GPS" />
                <CartItem title="Apple Watch Series 4 GPS" />
                <CartItem title="Apple Watch Series 4 GPS" />
                <CartItem title="Apple Watch Series 4 GPS" />
            </div>
            <div className="sidebar-footer">
                <SidebarFooter />
            </div>
        </SidebarContainer>
    )
}