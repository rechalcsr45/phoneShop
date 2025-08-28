import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./login.module.scss";

const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push("/product")
    };
    return (
        <div className={styles.login}>
            <h1 className="big">Login</h1>
            <button onClick={() => handleLogin()}>Login</button>
            <p>
                Belum punya akun ? <Link href={"auth/register"}>Daftar disini</Link>
            </p>
        </div>
    )
};

export default LoginViews;