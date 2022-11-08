import React from 'react';
interface Props {
    imgURL:string,
    imgAlt:string,
    text:React.ReactNode
}

const CheckInBox = ({imgURL,imgAlt, text}:Props) => {
  return (
    <div className="flex gap-4">
        <div className="w-[24rem] md:w-[40rem] md:h-[20rem] rounded-md overflow-hidden my-5">
            <img src={imgURL} alt={imgAlt} className="w-full h-full object-cover"/>
        </div>
        <div className="flex my-5 w-[60%] text-md sm:text-xl items-center">
            {text}
        </div>
    </div>
  )
}

export default CheckInBox