import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { MdLocalMovies } from "react-icons/md";
import { IoPersonCircleOutline, IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label: "Tv Shows",
        href: "tv",
        icons: <PiTelevisionFill />
    },
    {
        label: "Movies",
        href: "movie",
        icons: <MdLocalMovies />
    },
    {
        label: "Popular Person",
        href: "person",
        icons: <IoPersonCircleOutline />
    }
];

export const mobileNavigation = [
    {
        label: "Home",
        href: '/',
        icons: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icons: <IoSearchOutline />
    }
];
