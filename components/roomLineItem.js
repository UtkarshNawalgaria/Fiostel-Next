import Image from 'next/image'
import Link from 'next/link'

const API_URL = process.env.API_URL

const RoomLineItem = ({ room }) => {
    const image = room.Images[0]
    const { formats: { thumbnail, small } } = image
    return (
        <div className="my-6 p-2 border border-gray-200 rounded-lg md:flex md:flex-1">
            <div className="h-96 w-full md:h-60 md:w-60 md:flex-none relative">
                <Image
                    src={`${API_URL}${thumbnail.url}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
            <div className="mt-3 md:flex md:flex-col md:justify-between md:pl-4 md:pr-2 md:mt-0">
                <div className="md:flex md:flex-col md:mt-0">

                    {/* Room Name */}
                    <Link href={`/rooms/${room.slug}`}>
                        <a className="text-3xl font-semibold mb-1 md:mt-0 md:mb-2">
                            {room.Name}
                        </a>
                    </Link>
                    <p className="mb-5 text-lg font-semibold text-gray-700 py-1 md:hidden">Rs {room.Price} / month</p>
                    <p>{room.Description}</p>
                </div>

                <div className="services my-2">Services</div>
            </div>

            <div className="md:flex md:flex-col md:justify-between md:flex-none">
                <p className="text-lg font-semibold text-gray-700 pt-1 hidden md:block">Rs {room.Price} / month</p>
                <Link href={`/rooms/${room.slug}`}>
                    <button className="p-3 mt-4 bg-yellow-400 rounded-lg text-white font-semibold md:mx-2">More Info</button>
                </Link>

            </div>

        </div>
    )
}

export default RoomLineItem
