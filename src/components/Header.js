import { Link,NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from '../assets/logo.png';

export const Header = () => {

  const cartList=useSelector(state=> state.cartState.cartList);
  
  return (
    <header>
        <nav className="bg-white border-b border-gray-200">
  <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={Logo} className="h-8" alt="Shopmate Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap">Redux Cart</span>
    </Link>
    <div className="flex md:order-2">
    <Link to="/cart" className="font-medium">
        <span>Cart: {cartList.length}</span>
      </Link>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
      <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li>
          <NavLink  to="/" className={({ isActive }) =>isActive? "block py-2 px-3 text-blue-700 bg-transparent rounded md:p-0": "block py-2 px-3 text-black bg-transparent rounded md:p-0"} aria-current="page"end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Cart" className={({ isActive }) =>isActive? "block py-2 px-3 text-blue-700 bg-transparent rounded md:p-0": "block py-2 px-3 text-black bg-transparent rounded md:p-0"} aria-current="page"end>Cart</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

 </header>
  )
}
