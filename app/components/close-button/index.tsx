import { CloseButtonContainer } from "./style";

interface CloseButtonProps {
    onClick: () => void;
    size?: number;
}

export const CloseButton = ({
    onClick,
    size = 38,
}: CloseButtonProps) => {
    return (
        <CloseButtonContainer
            size={size}
            onClick={onClick}
            className="close-sidebar"
        >
            <p title="Fechar Carrinho">X</p>
        </CloseButtonContainer>
    )
}