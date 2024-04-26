import { decreaseProduct, increaseProduct, removeProduct } from "@/app/features/cart/cart-slice";
import { useAppDispatch } from "@/app/hooks/use-app-selector";
import { CloseButton } from "../close-button";
import { QuantityInput } from "../quantity-input";
import { CardItemContainer, CartItemValue } from "./style";

interface CartItemProps {
    id: number;
	name: string;
	photo: string;
	price: string;
	quantity: number;
}

export const CartItem = ({
    id,
    name,
    price,
    quantity,
    photo,
}: CartItemProps) => {
    const dispatch = useAppDispatch();

    const handleRemoveProduct = () => {
        dispatch(removeProduct(id));
    }

    const handleDecreaseProduct = () => {
        dispatch(decreaseProduct(id));
    }
    
    const handleIncreaseProduct = () => {
        dispatch(increaseProduct(id));
    }

    return (
        <CardItemContainer
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
            <div className="close-cart-item">
                <CloseButton size={26} onClick={handleRemoveProduct} />
            </div>
            <img
                src={photo}
                alt={name}
            />
            <h3>{name}</h3>
            <QuantityInput
                quantity={quantity}
                onDecrease={handleDecreaseProduct}
                onIncrease={handleIncreaseProduct}
            />
            <CartItemValue>
                <p>
                    {(Number(price) * quantity).toLocaleString(
                        'pt-BR', { style: 'currency', currency: 'BRL' }
                    )}
                </p>
            </CartItemValue>
        </CardItemContainer>
    )
}