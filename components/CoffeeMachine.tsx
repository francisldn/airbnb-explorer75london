const CoffeeMachine = () => {
    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
            <h1 className="mx-8 mb-8 lg:mb-16 text-5xl">Coffee Machine</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="coffeemachine.png" alt="coffee machine" className="object-cover w-full h-full"/>
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
                        <li><strong>Location:</strong> Coffee machine is located in the kitchen beside the cooking stove</li>
                        <li><strong>How to use:</strong>
                            <ul className="list-disc ml-5">
                                <li>Plug the switch into a power socket and switch on the coffee machine.</li>
                                <li>Fill the water container located behind machine. Please just fill in enough for your coffee consumption.</li>
                                <li>Open the coffee machine cover - as shown in the picture, and load the coffee pod. You can find some coffee pods in the cupboard above the microwave.</li>
                                <li>{`Close the coffee machine cover, put your cup at the output area, and then press the "start" button at the top of the coffee machine. The machine will start running.`}</li>
                                <li>Once the coffee is made, open the coffee machine cover and the coffee pod will be disposed.</li>
                                <li>Remove any excess water from the water container</li>
                                <li>Switch off the coffee machine.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default CoffeeMachine;