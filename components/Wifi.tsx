const Wifi = () => {
    return (
        <div className="flex flex-col mx-auto lg:mx-20 my-14 w-screen">
            <h1 className="mx-auto mb-8 lg:mb-16 text-5xl">Wifi</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-[330px] lg:w-[600px] rounded-xl overflow-hidden mx-auto lg:mx-8">
                    <img src="wifi.jpg" alt="wifi" className="object-cover w-full h-full" />
                </div>
                <div className="mx-7 mt-5 lg:mt-0 lg:px-10 lg:mr-20">
                    <ul className="flex flex-col gap-5 list-disc text-lg leading-8">
                        <li><strong>Location:</strong> Wifi router is located on the side of the entrance hallway, beside the bathroom door</li>
                        <li>Wifi password can be found on the wifi router, as shown in the picture</li>
                        <li><strong>How to connect:</strong>
                            <ul className="flex gap-8">
                                <li className="w-[300px] h-[300px] mt-3 overflow-hidden"><img src="wifiname.jpg" alt="wifi-name"/></li>
                                <ul className="list-disc leading-8">
                                    <li>Look for the Wifi names as shown in the picture on the left</li>
                                    <li>You can connect to either:
                                        <ul className="list-disc ml-6">
                                            <li>FCFB Hyperoptic 1Gb Fibre 5Ghz</li>
                                            <li>FCFB Hyperoptic 1Gb Fibre 2.4Ghz</li>
                                        </ul>
                                    </li>
                                    <li>Enter the wifi password as written on the router</li>
                                </ul>
                                
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Wifi;