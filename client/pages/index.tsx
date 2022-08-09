import type { NextPage } from 'next'

const Home: NextPage = () => {

  const roomName = document.getElementById("room-name");

  return (
    <>
    <div className='flex flex-col justify-center items-center my-44'>
      <div className='text-6xl underline font-bold text-blue-600'>
        Toogle Meet
      </div>
      <form className='flex flex-col my-8 space-y-3'>
        <input type={"text"} className='p-3 bg-slate-100' id="room-name" placeholder='Enter room code'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white font-bold'>Join</button>
      </form>
    </div>
    </>
  )
}

export default Home
