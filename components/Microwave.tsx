const Microwave = () => {

    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
            <h1 className="mx-auto mb-16 text-5xl">Microwave</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="microwave.png" alt="microwave" className="object-cover w-full h-full" />
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
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