import MyLink from "./MyLink";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="mt-3 flex justify-between items-center">
            <h2 className={`text-2xl text-my-white font-medium tracking-wide`}>{title}</h2>
            {
                linkHref && linkTitle ?
                <MyLink href={linkHref} title={linkTitle} /> :
                null
            }
        </div>
    )
}

export default Header;