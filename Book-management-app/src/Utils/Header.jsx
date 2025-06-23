import { Link } from "react-router-dom"

function Header(){
    return (
        <>
        <div className="h-12 flex bg-black justify-around items-center">
            <Link className="text-gray-200 text-xl duration-500 hover:text-sky-500 font-bold" to="/">Home</Link>
            <Link className="text-gray-200 text-xl duration-500 hover:text-sky-500 font-bold" to="/Book"> Browse Books</Link>
            <Link className="text-gray-200 text-xl duration-500 hover:text-sky-500 font-bold" to="/NewBook" >Add New Book</Link>
        </div>
        </>
    )
}

export default Header