import Navbar from "./Navbar";

const Layout = ({children}) => {
    return(
        <>
        <main className="bg-stone-200 min-h-screen">
        <Navbar/>
        <div className="p-4 mx-10 grid grid-cols-1 md:grid-cols-2 gap-x-10">{children}</div>
        </main>
        </>
    )
}

export default Layout;