import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'

const Home: NextPage = () => {

  const [token, setToken] = useState(null)

  function getRoomCode() {

    let roomCode = document.getElementById('room-name')

  }

  async function handleSubmit(event: any) {

    event.preventDefault

    let data = {
      room: getRoomCode()
    }

    let token = await fetch('http://127.0.0.1:8000/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    let result = await token.json()

    console.log(result)

  }

  return (
    <>
    <div className='flex flex-col justify-center items-center my-44'>
      <div className='text-6xl underline font-bold text-blue-600'>
        Toogle Meet
      </div>
      <form className='flex flex-col my-8 space-y-3' onSubmit={handleSubmit}>
        <input type={"text"} name="roomName" className='p-3 bg-slate-100' id="room-name" placeholder='Enter room code'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white font-bold' type='submit'>Join</button>
      </form>
    </div>
    </>
  )
}

export default Home
