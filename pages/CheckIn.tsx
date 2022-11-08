import React from 'react'
import SmallHeader from '../components/SmallHeader'
import CheckInBox from '../components/CheckInBox'

const step1 = (<ul className="list-disc pl-4">
                <li>The photo on the left shows the <b>East India DLR station</b>.</li>
                <li>Once you arrive at the station, you will see a <b>Nisa supermarket</b> right across the road from the station.</li>
            </ul>)
const step2 = (<ul className="list-disc pl-4">
                <li>The <b>Nisa supermarket</b> is located across the road from the East India DLR station.</li>
                <li><b>Explorers Court</b> entrance is located to the left of the supermarket.</li>
            </ul>)
const step3 = (<ul className="list-disc pl-4">
                <li>Walk to the <b>Explorers Court</b> entrance and you will see the building door.</li>
            </ul>)
const step4 = (<ul className="list-disc pl-4">
                <li>Press <b>75</b> and <b>call</b> to get the host to open the door. Repeat this if the door is not open.</li>
                <li>Once you are in, Flat 75 is located on the <b>4th floor</b>.</li>
            </ul>)

const CheckIn = () => {
  return (
    <div>
        <SmallHeader />
        <div className="flex flex-col sm:mx-[25%] mx-[2%] mt-[3%]">
            <CheckInBox imgURL={"DLRstation.jpg"} imgAlt={"East India DLR station"} text={step1}/>
            <CheckInBox imgURL={"nisa.jpg"} imgAlt={"Nisa supermarket"} text={step2}/>
            <CheckInBox imgURL={"explorerscourt.jpg"} imgAlt={"Explorers Court entrance"} text={step3}/>
            <CheckInBox imgURL={"buildingdoor.jpg"} imgAlt={"Building door"} text={step4}/>
        </div>
    </div>
  )
}

export default CheckIn