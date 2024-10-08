import React from 'react'

function SongCard() {
    const data = [
        {name: "Mahiya ve ", description:"the name of the child node of the child node"},
        {name:"Chaleya", description:"This song is awesome the child node  of the child"},
    ]

    const handleClickDownload = ()=>{
        alert("chal rha h");
    }
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center'>
        {data.map((value, index)=>(
            <div className='px-2 py-2 bg-zinc-200  rounded-md'>
            <h3 className='font-bold text-xl'>{value.name}</h3>
            <p className='text-xs mt-2'>{value.description}</p>
            <button onClick={handleClickDownload} className='px-1 py-2 bg-blue-400 rounded mt-3 text-zinc-100 font-bold text-sm'>Download</button>
        </div>
        ))}
    </div>
  )
}

export default SongCard