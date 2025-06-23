import React from 'react'
import BookApi from './BookApi'

export default function Home() {
  return (
    <>
    <div className="h-405 overflow-hidden">
        <div className="bg-white h-100 m-5 flex justify-center items-center text-center rounded-2xl">
        <div>
            <p className="font-bold text-5xl text-amber-500">Welcome to Online Library System</p><br />
            <p className="font-bold">Here you will find some amazing book</p>
        </div>
        </div>
        {<BookApi/>}
    </div>    
    </>
  )
}

