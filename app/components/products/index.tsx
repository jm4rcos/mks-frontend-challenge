import { addProduct } from "@/app/features/cart/cart-slice";
import { useAppDispatch } from "@/app/hooks/use-app-selector";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import ProductSkeleton from "../product-skeleton";
import { BagIcon } from "../ui/bag-icon";
import { BuyButton, Container, ProductCard, ProductContainer } from "./style";

export const Products = () => {
    const dispatch = useAppDispatch();

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        
        queryFn: async () => {
            const res = await fetch(`/api/get-products?page=${1}&rows=${8}`)
            const { products } = await res.json()

            return products;
        }
    });

    if (isLoading) return <ProductSkeleton />

    const handleAddProduct = (product: Product) => {
        dispatch(addProduct(product));
    }

    return (
        <Container>
            <ProductContainer>
                {data.map((product: Product) => (
                    <ProductCard key={product.id}>
                        <div className="wrapper">
                            <img
                                src={product.photo}
                                alt={product.name}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                            <BuyButton onClick={() => handleAddProduct(product)}>
                                <BagIcon />
                                <p>Comprar</p>
                            </BuyButton>
                    </ProductCard>
                ))}
            </ProductContainer>
        </Container>
    )
}