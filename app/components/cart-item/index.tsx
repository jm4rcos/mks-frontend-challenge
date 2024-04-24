import { CloseButton } from "../close-button"
import { QuantityInput } from "../quantity-input"
import { CardItemContainer, CartItemValue } from "./style"

interface CartItemProps {
    title: string
}

export const CartItem = ({
    title
}: CartItemProps) => {
    return (
        <CardItemContainer>
            <div className="close-cart-item">
                <CloseButton size={26} onClick={() => {}} />
            </div>
            <img
                src="https://media.discordapp.net/attachments/840063709401317406/1232453084370829362/image.png?ex=662982e1&is=66283161&hm=beb156d1aef39763828b348dba6b884d1b2be71da2a0f03b936822e7e9bfba5a&=&format=webp&quality=lossless"
                alt="Apple Watch Series 4 GPS"
            />
            <h3>{title}</h3>
            <QuantityInput />
            <CartItemValue>
                <p>R$ {399}</p>
            </CartItemValue>
        </CardItemContainer>
    )
}