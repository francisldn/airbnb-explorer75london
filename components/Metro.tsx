const Metro = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Metro/Trains</h1>
            <div className="flex mx-auto">
                <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                    <img src="https://images.pexels.com/photos/10323524/pexels-photo-10323524.jpeg?auto=compress&cs=tinysrgb&w=600" alt="metro" className="object-cover w-full h-full" />
                </div>
                <div>
                    <ul className="leading-8 text-lg list-disc">
                        <li>Metro lines available: </li>
                        <ul className="ml-5 list-disc">
                            <li><b>DLR:</b> Nearest station - East India</li>
                            <li><b>Jubilee Line:</b> Nearest Station - Canning Town</li>
                            <li><b>Elizabeth Line:</b> Nearest Station - Canary Wharf</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Metro;