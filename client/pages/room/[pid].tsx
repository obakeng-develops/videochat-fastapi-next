import { useRouter } from 'next/router'
import * as Twilio from 'twilio'
import * as Video from 'twilio-video'

function Room() {

    const router = useRouter();
    const { pid } = router.query;

    const connectVideoRoom = async (roomName: string, token: string) => {

    }

    return (
        <>
        <div className="text-blue-500 underline text-3xl flex justify-center items-center font-bold mt-20">
            Toogle Room
        </div>
        <div className="flex justify-center items-center space-x-20 my-20">
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