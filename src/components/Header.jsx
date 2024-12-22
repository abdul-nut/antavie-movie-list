import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/logo.png"
import userLogo from "../assets/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../contans/navigation";

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(7)?.split("%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?query=${searchInput}`)
    }
  }, [searchInput])

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <header className='fixed top-0 w-full h-16 bg-black bg-opacity-75 z-40'>
      <div className='container mx-auto px-1 flex items-center h-full'>
        <Link to={"/"}>
          <img src={logo} alt="logo" width={50} />
        </Link>
        <nav className='hidden lg:flex items-center gap-1 ml-5'>
          {
            navigation.map((nav, index) => {
              return (
                <NavLink key={nav.label + "header" + index} to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                  {nav.label}
                </NavLink>
              )
            })
          }
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <div>
            <form action="" className="flex items-center gap-2" onSubmit={handleSubmit}>
              <input type="text" placeholder="Search here..."
                className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <button className="text-2xl text-white hidden lg:block">
                <IoSearchOutline />
              </button>
            </form>
          </div>
          <div>
            <img src={userLogo} alt="user-logo" className="w-10 h-10 rounded-full overflow-hidden
            cursor-pointer active:scale-75 transition-all" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header