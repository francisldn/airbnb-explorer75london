const Buses = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Buses</h1>
            <div className="flex mx-auto">
                <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                    <img src="https://images.pexels.com/photos/9828257/pexels-photo-9828257.jpeg?auto=compress&cs=tinysrgb&w=600" alt="buses" className="object-cover w-full h-full" />
                </div>
                <div>
                    <ul className="leading-8 text-lg list-disc">
                        <li>Buses available: </li>
                        <ul className="ml-5 list-disc">
                            <li>D3 (Leamouth - Bethnal Green via Canary Wharf) </li>
                            <li>N550 (Canning Town - Trafalgar Square)</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Buses;