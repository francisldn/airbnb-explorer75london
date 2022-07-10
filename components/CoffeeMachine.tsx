const CoffeeMachine = () => {
    return (
        <div className="flex flex-col mx-18 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Coffee Machine</h1>
            <div className="flex">
                <div className="w-[600px] rounded-xl overflow-hidden mx-8">
                    <img src="coffeemachine.png" alt="coffee machine" className="object-cover w-full h-full"/>
                </div>
                <div className="px-10 mr-20">
                    <ul className="list-disc leading-8 text-lg">
                        <li><strong>Location:</strong> Coffee machine is located in the kitchen beside the cooking stove</li>
                        <li><strong>How to use:</strong>
                            <ul className="list-disc ml-5">
                                <li>Plug the switch into a power socket and switch on the coffee machine.</li>
                                <li>Fill the water container located behind machine. Please just fill in enough for your coffee consumption.</li>
                                <li>Open the coffee machine cover - as shown in the picture, and load the coffee pod. You can find some coffee pods in the cupboard above the microwave.</li>
                                <li>Close the coffee machine cover, put your cup at the output area, and then press the "start" button at the top of the coffee machine. The machine will start running.</li>
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