import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-my-blue fixed top-0 left-0 right-0 z-50 px-3 py-3 lg:px-4">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center md:gap-0">
                <Link className="text-3xl font-medium text-my-white tracking-wide" href="/">ANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar