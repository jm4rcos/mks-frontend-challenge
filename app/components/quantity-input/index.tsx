import { Label, QuantityInputContainer } from "./style"

export const QuantityInput = () => {
    return (
        <div>
            <Label>Qtd:</Label>
            <QuantityInputContainer>
                <button className="minus-button">
                    -
                </button>
                <p>1</p>
                <button className="plus-button">
                    +
                </button>
            </QuantityInputContainer>   
        </div>
    )
}