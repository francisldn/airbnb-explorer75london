const Plane = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Plane</h1>
            <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/00B3/production/_104897100_entrance.jpg" alt="London city airport" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">London City Airport</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: London City Airport</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4405.757235554496!2d0.04575133389049217!3d51.505051262195614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x47d8a8880ebb3687%3A0x774e8a0a64b1a4b!2sLondon%20City%20Airport%20(LCY)%2C%20Hartmann%20Rd%2C%20London%20E16%202PX!3m2!1d51.504843699999995!2d0.049518!5e0!3m2!1sen!2suk!4v1657456172294!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Plane;