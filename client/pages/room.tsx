function Room() {
  return (
    <>
    <div className="flex justify-center items-center space-x-20">
        <div>
            <div className="video border border-blue-500 h-72 w-72">
                Participant 1
            </div>
            <div className="tracks my-4 flex space-x-6 justify-center items-center">
                <button className="bg-gray-900 font-bold p-2 rounded-md text-white">Mute</button>
                <button className="bg-red-600 font-bold p-2 rounded-md text-white">End call</button>
            </div>
        </div>
        <div>
            <div className="video border border-blue-500 h-72 w-72">
                Participant 2
            </div>
            <div className="tracks my-4 flex space-x-6 justify-center items-center">
                <button className="bg-gray-900 font-bold p-2 rounded-md text-white">Mute</button>
                <button className="bg-red-600 font-bold p-2 rounded-md text-white">End call</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Room