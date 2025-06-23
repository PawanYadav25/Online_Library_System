import { useState } from "react";

function NewBook(){

    const [sr, setsr] = useState("");
    const [tt, settt] = useState("");
    const [Auth, setAuth] = useState("");
    const [Desc, setDesc] = useState("");
const check = ()=>{
    if(sr=="" || tt=="" || Auth=="" || Desc=="")
    {
        alert("Please enter all the field")
        return
    }

    setsr("");
settt("");
setAuth("");
setDesc("");
    
}
    return (
        <>
        <div className="p-5 mt-10 bg-violet-200 flex-col justify-center items-center mx-auto rounded-2xl shadow-xl/30 md:w-190 ">
            <div className="text-center p-2">
                <label className="font-bold text-2xl">Sr no.</label> <br />
                <input value={sr} onChange={(e)=>{setsr(e.target.value)}} className="bg-white rounded-2xl w-120 h-10 p-3 outline-none focus:border-4 focus:border-blue-500 text-center" type="text" placeholder="Enter Book Serial number" />
            </div>

            <div className="text-center p-2">
                <label className="m-5 font-bold text-2xl">Title</label><br />
                <input value={tt} onChange={(e)=>{settt(e.target.value)}} className="bg-white rounded-2xl w-120 h-10 p-3 outline-none focus:border-4 focus:border-blue-500 text-center" type="text" placeholder="Enter Book Title" />
            </div>

            <div className="text-center p-2">
                <label className="m-5 font-bold text-2xl">Author</label> <br />
                <input value={Auth} onChange={(e)=>{setAuth(e.target.value)}} className="bg-white rounded-2xl w-120 h-10 p-3 outline-none focus:border-4 focus:border-blue-500 text-center" type="text" placeholder="Enter Book Author" />
            </div>

            <div className="text-center p-2">
                <label className="m-5 font-bold text-2xl">Description</label> <br />
                <textarea value={Desc} onChange={(e)=>{setDesc(e.target.value)}} className="bg-white rounded-2xl w-120 h-15 p-3 outline-none focus:border-4 focus:border-blue-500 text-center" placeholder="Enter Book Description"></textarea>
            </div>
            
            <div className="text-center p-2 flex items-center justify-center">
                <label className="m-5 font-bold text-2xl" >Image</label>
                <input className=" bg-gray-300 border-2 border-black h-10 p-1 rounded-2xl" type="file" accept="image/*" id="myFile" name="filename" />
            </div>

            <div className="text-center p-2 flex items-center justify-center">
                <button onClick={check} className="bg-violet-500 active:bg-black active:text-white p-3 w-120 rounded-2xl" >Submit</button>
            </div>
        </div>
        </>
    )
}

export default NewBook