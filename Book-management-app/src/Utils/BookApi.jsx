import { useEffect, useState } from "react"
import BooksCards from "./BooksCards";
import { useBooks } from "./useBooks"

function BookApi(){
    const books = useBooks();
    // console.log('I am real book',books)
    const [searchtext, setsearchtext] = useState("");
    const [filterbook, setfilterbook] = useState([]);
    
    useEffect(() => {
    setfilterbook(books);
  }, [books]);

    const srchBook = ()=> {
        const ftr = books.filter((data)=>( data.title.toLowerCase().includes(searchtext.toLowerCase())))
        if(ftr.length > 0){
            setfilterbook(ftr)
        }else{
            alert('No Book Found')
        }
        
    }


    console.log(filterbook)
    
        return (
    <>
    <div className="flex justify-center mt-5">
        <input onChange={(e)=>{setsearchtext(e.target.value)}} className="bg-white h-10 w-80 outline-none focus:border-3 focus:border-blue-500 p-2 rounded-3xl" type="text" placeholder="Enter Book Name"/>
        <button onClick={srchBook} className="border-2 bg-gray-300 p-1 w-18 rounded-3xl ml-2" >Search</button>
    </div>
<BooksCards cd={filterbook}/>

        </>
    )
}

export default BookApi