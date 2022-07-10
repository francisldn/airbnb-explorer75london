const WashingMachine = () => {
    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
            <h1 className="mx-8 mb-8 lg:mb-16 text-5xl">Washing Machine</h1>
            <div className="flex flex-col lg:flex-row">
            <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="washingmachine.png" alt="washing machine" className="object-cover w-full h-full" />
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
                        <li><strong>Location:</strong> Washing machine is located in the kitchen, on the left cupboard below the kitchen sink</li>
                        <li><strong>How to use:</strong>
                            <ul className="ml-5 list-disc leading-8">
                                <li >Switch on the washing machine. You can find the switch on the right corner of the kitchen sink, as shown below</li>
                                <li className="w-[200px] list-none"><img src="washingmachineswitch.jpg" alt="washing machine switch" /></li>
                                <li >Then proceed to the washing machine, open the door, load your laundry and washing pods (available below the kitchen sink) and close the door</li>
                                <li >{`Select washing option "8 (40°C)" or "9 (30°C)" for your washing requirement`}</li>
                                <li>{`Press "Start/Pause" button to start the washing machine`}</li>
                                <li>Once the washing is done, the machine will emit beeping sound. Then you can proceed to open the door and unload your laundry.</li>
                                <li>Switch off the washing machine </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default WashingMachine;