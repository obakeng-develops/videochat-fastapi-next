import type { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = () => {

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    const payload = {
      room_name: event.target.roomName.value
    }

    const response = await axios.post("http://127.0.0.1:8000/join", payload);

    const token = await response.json();
    console.log(token);


  }

  return (
    <>
    <div className='flex flex-col justify-center items-center my-44'>
      <div className='text-6xl underline font-bold text-blue-600'>
        Toogle Meet
      </div>
      <form className='flex flex-col my-8 space-y-3' onSubmit={handleSubmit}>
        <input type={"text"} name="roomName" className='p-3 bg-slate-100' id="room-name" placeholder='Enter room code'/>
        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-white font-bold'>Join</button>
      </form>
    </div>
    </>
  )
}

export default Home
