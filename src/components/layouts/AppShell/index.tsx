import { useRouter } from "next/router";

import Footer from "../Footer";
import Navbar from "../Navbar";

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register"];
const disableFooter = ["/auth/login", "/auth/register"];

const AppShell = (props: AppShellProps) => {
    const {children} =  props;
    const {pathname} = useRouter();

    return(
        <main className="app-shell">
            {!disableNavbar.includes(pathname) && <Navbar />}
            <div className="content">{children}</div>
            {!disableFooter.includes(pathname) && <Footer />}
        </main>
    )
};

export default AppShell;