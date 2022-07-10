const Supermarket = () => {
    return (
        <div className="flex flex-col lg:mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Supermarkets</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[200px] lg:w-[400px] h-[350px] rounded-xl overflow-hidden lg:mx-8">
                        <img src="nisa.jpeg" alt="nisa supermarket" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Nisa Supermarket</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: East India</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d409.0891048215602!2d-0.0023720692585874063!3d51.50910790291541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602a98e3398e3%3A0x2fafa7de2378280a!2sNisa%20Extra%20Virginia%20Quay%2C%201%20Newport%20Ave%2C%20London%20E14%202ED!3m2!1d51.509151499999994!2d-0.0020023!5e0!3m2!1sen!2suk!4v1657388226634!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://www.about.sainsburys.co.uk/~/media/Images/S/Sainsburys/content-images/news/London%20City%20Island%20press.jpg?h=566&iar=0&w=920" alt="sainsbury supermarket" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">{`Sainsbury's`}</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canning Town</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d158912.46360182535!2d-0.2733281671875!3d51.51308310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x47d8a990c98395f3%3A0x638d69fc6d95daf2!2sSainsbury&#39;s%20Local%2C%2050%20Hopewell%20Square%2C%20Leamouth%20Peninsula%2C%20London%20E14%200SY!3m2!1d51.513083099999996!2d0.0068232!5e0!3m2!1sen!2suk!4v1657389345666!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy" ></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://www.allinlondon.co.uk/images/venues/images_all/12160171.jpg" alt="tesco supermarket" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Tesco</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Blackwall</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1918.6065774725616!2d-0.011288136142923342!3d51.50851749979487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602ae6ad33fcd%3A0xb717207d59cbf861!2sTesco%20Express%2C%20262%20Poplar%20High%20St%2C%20London%20E14%209RL!3m2!1d51.5086273!2d-0.0097069!5e0!3m2!1sen!2suk!4v1657389956480!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy" ></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://i2-prod.mylondon.news/incoming/article23096849.ece/ALTERNATES/s810/0_IMG_8993.jpg" alt="waitrose supermarket" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Waitrose</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2483.4702757667683!2d-0.018335284543622807!3d51.50458771873027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b0af154951%3A0x5524edc29d3420!2sWaitrose%20%26%20Partners%20Canary%20Wharf%2C%2016-19%20Canada%20Square%2C%20London%20E14%205EW!3m2!1d51.5045844!2d-0.0161466!5e0!3m2!1sen!2suk!4v1657390902868!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy" ></iframe></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Supermarket;