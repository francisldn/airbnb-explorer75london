const Centralheating = () => {
    return (
        <div className="flex flex-col mx-18 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Central Heating</h1>
            <div className="flex">
                <div className="w-[600px] rounded-xl overflow-hidden mx-8">
                    <img src="centralheating.png" alt="central heating" className="object-cover w-full h-full"/>
                </div>
                <div className="px-10 mr-20">
                    <ul className="list-disc leading-8 text-lg">
                        <li><strong>Location:</strong> Central heating control is located along the entrance hallway beside the bathroom</li>
                        <li><strong>How to use:</strong>
                            <ul className="list-disc ml-5">
                                <li>To switch on the central heating, you can toggle the button on the control to the last option - 24Hr. This will trigger the boiler to start heating.</li>
                                <li>You may adjust the temperature via the thermometer which is located in the living room, above the sofa.</li>
                                <li className="list-none w-[300px]"><img src="thermometer.png" alt="thermometer" /></li>
                                <li>The central heating will stop heating automatically if the target temperature is reached.</li>
                                <li>To switch off the central heating, simply toggle the control button to the first option - Off.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Centralheating;