const Cable = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Cable Car</h1>
            <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/25549367-emirates-airline-cable-car-640x360.jpg?mw=640&hash=DD21E18B7E88C31F3EFCE31D7DCB6D15E01A695D" alt="london cable car" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">London Cable Car</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Royal Victoria</li>
                            <li><b>Location:</b> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d19866.39914265282!2d-0.01702832089842882!3d51.5077139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x47d8a80c3784788f%3A0x3ed1b8236589ff17!2sEmirates%20Royal%20Docks%2C%2027%20Western%20Gateway%2C%20London%20E16%201FA!3m2!1d51.5077139!2d0.0179906!5e0!3m2!1sen!2suk!4v1657460734206!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
}

export default Cable;