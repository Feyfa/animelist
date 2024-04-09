import Link from "next/link"

const MyLink = ({href, title}) => {
    return (
        <div className="relative">
            <Link href={href} className="mylink text-blue-400 font-medium">{title}</Link>
            <div className="absolute bottom-0.5 left-0 border-t border-t-white w-0 transition-all duration-100 ease-linear"></div>
        </div>
    )
}

export default MyLink