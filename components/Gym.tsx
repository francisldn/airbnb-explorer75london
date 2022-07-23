const Gym = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Gym</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipO4W3bMoCBjQrnQ2frbWvlCn3GRkpzFvBYwqHZ2=w408-h544-k-no" alt="Pure Gym" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Pure Gym</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: East India or Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4966.29968463848!2d-0.011469120016227272!3d51.51046691022891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487603714c5c45c5%3A0x566bc4a0b65a1356!2sPureGym%20London%20East%20India%20Dock%2C%20Import%20Building%20Republic%2C%20London%20E14%202BE!3m2!1d51.510466799999996!2d-0.0045208!5e0!3m2!1sen!2suk!4v1657450259747!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipMUDhTCjXNLcj9qK7CK0eFsuRt89jLgHQ4rsGWu=w408-h272-k-no" alt="Barry's Gym" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">{`Barry's Gym`}</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3041.5392712318326!2d-0.01885435240525433!3d51.505990775022525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x4876031be0db3281%3A0xb6c91ba5a9a1046b!2sBarry%E2%80%99s%20London%20Canary%20Wharf%2C%201%20Crossrail%20Pl%2C%20London%20E14%205AR!3m2!1d51.506070199999996!2d-0.017379!5e0!3m2!1sen!2suk!4v1657450398134!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipMOVvbdVc0BlE9imYi0uaiGYLpKicp0Q3rtVoDN=w408-h272-k-no" alt="Third Space" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Third Space</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4966.84418087304!2d-0.02123236124390836!3d51.50547183556187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b0ae6b1903%3A0x463cbee3d194e6cd!2sThird%20Space%20Canary%20Wharf%2C%2016-19%20Canada%20Square%2C%20London%20E14%205ER!3m2!1d51.5047861!2d-0.016741199999999998!5e0!3m2!1sen!2suk!4v1657450498969!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipOqX5mxd2PsZobe07MYmVpXk0z4zLOoUcpwy0IG=w427-h240-k-no" alt="Virgin Active" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Virgin Active</h2> 
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4966.739203405709!2d-0.03731703022458139!3d51.50643490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b77b2b569b%3A0xe370e96608bb1893!2sVirgin%20Active%2C%20Riverside%2C%20West%20Ferry%20Circus%20Canary%20Wharf%2C%20Canary%2C%20London%20E14%208RR!3m2!1d51.506434899999995!2d-0.0285623!5e0!3m2!1sen!2suk!4v1657450593541!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gym;