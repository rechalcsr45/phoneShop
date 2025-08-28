import { useRouter } from "next/router";
const ShopProduct = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Shop Product</h1>
            <p>Shop : {`${query.shop && query.shop[0] + "-" + query.shop [1]}`}</p>
        </div>
    )
};

export default ShopProduct; 