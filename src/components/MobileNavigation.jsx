
import { NavLink } from "react-router-dom"
import { mobileNavigation } from "../contans/navigation"

const MobileNavigation = () => {
    return (
        <section className="
        lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl 
        fixed w-full bottom-0 z-40 flex items-center rounded-full
        px-3 overflow-x-auto">
            <div className="flex items-center justify-between h-full text-neutral-400 gap-4 px-4 overflow-x-auto">

                {mobileNavigation.map((nav, index) => {
                    return (
                        <NavLink
                            key={nav.label + "mobilenavigation" + index}
                            to={nav.href}
                            className={({ isActive }) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                            <div className="text-2xl">
                                {nav.icons}
                            </div>
                            <p className="text-xs truncate">{nav.label}</p>

                        </NavLink>
                    )
                })}
            </div>
        </section>
    )
}

export default MobileNavigation