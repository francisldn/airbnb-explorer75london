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
                            <ul className="ml-5 list-disc pt-2">
                                <li>{`Easiest way: Scan this QR code with your phone camera to connect to the wifi. You don't need to enter password this way.`}</li>
                                <div className="w-[200px] ml-5">
                                    <img src="qrcode.png" alt="wifi qr-code" className="object-contain w-full h-full" />
                                </div>
                                <li>Alternatively, you can also look for the wifi name: <b>FCFB Hyperoptic 1Gb Fibre 5Ghz</b>, <br />and then enter the password on the wifi router</li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Wifi;