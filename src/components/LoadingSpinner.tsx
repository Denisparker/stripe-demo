import Image from "next/image"

export default function Spinner() {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-14 h-14 animate-spin-slow rounded-full">
        <div>
          <Image src="/assets/cookie.png" alt="loading" width={606} height={544}/>
        </div>
      </div>
    </div>
  )
}
