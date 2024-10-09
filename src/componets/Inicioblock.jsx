import { NavLink } from "react-router-dom";

const Inicioblock = () => {
        const opcMenu = "mr-5 text-gray-900"
        const EstaActivo = "mr-5 text-red-500"

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl font-semibold">Angela Yisel</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className={({ isActive }) => isActive ? EstaActivo : opcMenu}>Inicio</NavLink>   
          <NavLink to="/programa" className={({ isActive }) => isActive ? EstaActivo : opcMenu}>programa</NavLink>
          <NavLink to="/Usestate" className={({ isActive }) => isActive ? EstaActivo : opcMenu}>useState</NavLink>
          <NavLink to="/Usestateobjetos" className={({ isActive }) => isActive ? EstaActivo : opcMenu}>useStateobjetos</NavLink>
          <a className={opcMenu}>Tailblock</a>
          <a className={opcMenu}>Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )

}
export default Inicioblock;