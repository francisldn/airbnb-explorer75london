const Microwave = () => {

    return (
        <div className="flex flex-col mx-20 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Microwave</h1>
            <div className="flex">
                <div className="w-[600px] rounded-xl overflow-hidden mx-8">
                    <img src="microwave.png" alt="microwave" className="object-cover w-full h-full" />
                </div>
                <div className="px-10 mr-20">
                   <ul className="leading-8 list-disc">
                        <li><b>Location:</b> The microwave is located in the kitchen on the right corner of the cooking stove.</li>
                        <li><b>How to use:</b></li>
                        <ul className="list-disc ml-5">
                            <li>Plug the cable into the power socket and switch it on.</li>
                            <li>Open the microwave and load your food inside.</li>
                            <li>You may first select the power of heating: low, mid-low, medium, mid-high, high</li>
                            <li>Then you may select the heating time.</li>
                            <li>Then microwave will now start heating. Once done, it will switch off automatically.</li>
                            <li>Once done, you may remove your food.</li>
                            <li>Switch off the power socket and unplug the cable.</li>
                        </ul>
                   </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Microwave;