import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <div className='text-6xl underline font-bold text-blue-600'>
        Toogle Meet
      </div>
      <div className='flex flex-col my-6 space-y-3'>
        <input type={"text"} className='p-3 bg-slate-100' placeholder='Enter room code'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white font-bold'>Join</button>
      </div>
    </div>
    </>
  )
}

export default Home
