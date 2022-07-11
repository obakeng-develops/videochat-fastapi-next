import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <div>
      <div className='text-5xl underline font-bold text-blue-600'>
        Toogle Meet
      </div>
      <div className='flex flex-col'>
        <input type={"text"} className='p-3'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white font-bold'>Join</button>
      </div>
    </div>
    </>
  )
}

export default Home
