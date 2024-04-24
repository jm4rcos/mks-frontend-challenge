'use client'

import { useCallback } from "react"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { CartItem } from "../cart-item"
import { CloseButton } from "../close-button"
import { SidebarFooter } from "../sidebar-footer"
import { SidebarContainer } from "./style"

export const Sidebar = () => {  
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const sidebarValue = searchParams.get('sidebar');

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    );

    const toggleSidebar = () => {
    const newValue = sidebarValue === 'true' ? 'false' : 'true';
    router.push(`${pathname}?${createQueryString('sidebar', newValue)}`);
};


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
            animate={sidebarValue === 'true' ? 'open' : 'closed'}
        >
            <div className="sidebar-header">
                <h3>Carrinho de compras</h3>
                <CloseButton onClick={toggleSidebar} />
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