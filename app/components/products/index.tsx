import { useQuery } from "@tanstack/react-query";
import ProductSkeleton from "../product-skeleton";
import { BagIcon } from "../ui/bag-icon";
import { BuyButton, ProductCard, ProductContainer } from "./style";

interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

export const Products = () => {
    
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        
        queryFn: async () => {
            const res = await fetch(`/api/get-products?page=${1}&rows=${8}`)
            const { products } = await res.json()

            return products;
        }
    });

    if (isLoading) return <ProductSkeleton />

    return (
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
                        <BuyButton>
                            <BagIcon />
                            <p>Comprar</p>
                        </BuyButton>
                </ProductCard>
            ))}
        </ProductContainer>
    )
}