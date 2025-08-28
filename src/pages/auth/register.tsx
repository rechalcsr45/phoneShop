import Link from "next/link";
import { useRouter } from "next/router";

const RegisterPage = () => {
    const {push} = useRouter();
    const HandlerRegister = () => {
        push("/product")
    };
    return (
        <div>
            <h1>Register Page</h1>
            <button onClick={() => HandlerRegister ()}>Login</button>
            <p>
                Sudah punya akun ? <Link href="/auth/login">Login disini</Link>
            </p>
        </div>
    )
};

export default RegisterPage; 