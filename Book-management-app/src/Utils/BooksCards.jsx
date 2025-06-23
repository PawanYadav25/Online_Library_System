import { Link } from "react-router-dom"

function BooksCards(props){
    
    return (
        <>
        <div className="flex justify-around flex-wrap">
        {props.cd.map((data)=>(<div key={data._id} className="shadow-xl/50 overflow-hidden border-5 transition delay-150 duration-300 ease-in-out hover:-translate-y-3 border-green-400 w-80 m-4 bg-black rounded-2xl">
            <div    >
                <img className="h-80 mx-auto w-80 " src={data.coverImage} alt="Book image" />
            </div>
            <hr />
            <div className="text-white p-4" >
                <p className="font-bold text-center text-2xl" >{data.title}</p>
                <p className="text-gray-400" >Written by - {data.author}</p>
                <p>Rating - {data.ratings}</p>
                <Link to={`/book/${data._id}`} ><button className="border-2 border-red-500 text-red-500 p-2 w-full mt-5" type="button">View More detail</button></Link>
            </div>
        </div>))}
        </div>
        </>
    )
}

export default BooksCards