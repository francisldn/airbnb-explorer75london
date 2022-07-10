const Oven = () => {
    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
            <h1 className="mx-auto mb-16 text-5xl">Oven</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="oven.png" alt="oven" className="object-cover w-full h-full" />
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
                        <li><b>Location:</b> Oven is located in the kitchen, beside the fridge. Please do not use the oven below the cooking stove.</li>
                        <li><b>How to use:</b>
                            <ul className="list-disc ml-5">
                                <li>Plug the cable of the oven into the power socket and switch it on.</li>
                                <li>You may first adjust the temperature setting.</li>
                                <li>Then you may select the heating direction: top, bottom, or both.</li>
                                <li>Finally, select the heating time. The power indicator at the bottom will switch on once the oven starts heating.</li>
                                <li>Once the heating time is up, the oven will switch off automatically, and the power indicator at the bottom will indicate this.</li>
                                <li>Switch off the power socket and unplug the cable.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Oven;