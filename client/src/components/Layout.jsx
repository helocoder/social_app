import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen bg-stone-200 py-4 px-6">
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout