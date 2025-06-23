import { useParams } from "react-router-dom"
import { useBooks } from "./useBooks"
import { Link } from "react-router-dom";

function BookDetails(){
    const parm = useParams();
    const bookdt = useBooks();
    console.log("i am the use book data", bookdt)
    const detail = bookdt.find((data) => data._id === parm.id);
    console.log("i am the detail -",detail)


    return (
        <>
        <div className="bg-gray-300 w-50 text-center rounded-2xl mt-20 mr-10 absolute right-0 top-0">
        <button className="h-10"><Link to="/Book" >Back to Browse Book</Link></button>
        </div>
        <div className="md:flex bg-white rounded-2xl p-13 m-5">
            <div>
                <img className="w-120" src={detail?.coverImage} alt="Book cover image" />
            </div>
            <div className="ml-4">
                <p className="text-4xl font-bold" > {detail?.title} </p><br />
                <p className=" text-gray-400"><span className="text-black font-bold">Written by </span> - {detail?.author}</p>
                <p className=" text-gray-400"><span className="text-black font-bold">Published on </span> - {detail?.years}</p>
                <p className="text-black" ><span className="text-black font-bold">Category</span> - {detail?.category}</p><br />
                <p className="font-bold" >Description</p>
                <p>{detail?.description}</p>
            </div>
        </div>
        </>
    )
}



export default BookDetails