'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { Button } from "@/app/components/style";
import { CartIcon } from "@/app/components/ui/cart-icon";

export const CartButton = () => {
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
        router.push(pathname + '?' + createQueryString('sidebar', newValue));
    };

    return (
        <Button
            onClick={toggleSidebar}
        >
            <CartIcon />
            <span>0</span>
        </Button>
    )
}