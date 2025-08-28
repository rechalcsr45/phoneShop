import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [isLogin, setLogin] = useState(false);
    const {push} = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push("/auth/login")
        };
    }, []);
    const handlerLogout = () => {
        push("/auth/login")
    };
    return(
        <div>
            <h1>Product Page</h1>
            <button onClick={() => handlerLogout ()}>Logout</button>
        </div>
    )
};

export default ProductPage;