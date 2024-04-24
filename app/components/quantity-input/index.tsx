import { Label, QuantityInputContainer } from "./style";

interface QuantityInputProps {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
}

export const QuantityInput = ({
    quantity,
    onDecrease,
    onIncrease
}: QuantityInputProps) => {
    return (
        <div>
            <Label>Qtd:</Label>
            <QuantityInputContainer>
                <button className="minus-button" onClick={onDecrease}>
                    -
                </button>
                <p>{quantity}</p>
                <button className="plus-button" onClick={onIncrease}>
                    +
                </button>
            </QuantityInputContainer>   
        </div>
    )
}