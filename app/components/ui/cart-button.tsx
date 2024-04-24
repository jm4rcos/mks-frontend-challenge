import { Button } from "@/app/components/style"
import { CartIcon } from "@/app/components/ui/cart-icon"

interface CartButtonProps {
    onClick?: () => void
}

export const CartButton = ({
    onClick
}: CartButtonProps) => {
    return (
        <Button
            onClick={onClick}
        >
            <CartIcon />
            <span>0</span>
        </Button>
    )
}