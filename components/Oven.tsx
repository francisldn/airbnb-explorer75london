const Oven = () => {
    return (
        <div className="flex flex-col mx-20 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Oven</h1>
            <div className="flex">
                <div className="w-[600px] rounded-xl overflow-hidden mx-8">
                    <img src="oven.png" alt="oven" className="object-cover w-full h-full" />
                </div>
                <div className="px-10 mr-20">
                    <ul className="list-disc leading-8">
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