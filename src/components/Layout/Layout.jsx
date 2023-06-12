import { Outlet } from "react-router-dom";
import { Suspense } from "react";


const Layout = () => {
    return (
        <main>
            <section>
                <div>Layout
                    <Suspense>
                        <Outlet></Outlet>
                    </Suspense>
                </div>
            </section>
        </main>
    )
}

export default Layout;