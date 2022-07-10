const Cafes = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Cafes</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="olesteen.jpeg" alt="ole and steen" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Ole and Steen</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4966.779468751961!2d-0.02498147224143076!3d51.50606550679334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b7349e2531%3A0x7135a730006118f0!2sCR34%2C%20Ole%20%26%20Steen%2C%201%20Canada%20Square%2C%20London%20E14%205AR!3m2!1d51.506065299999996!2d-0.0173765!5e0!3m2!1sen!2suk!4v1657392277487!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="gentlemen.jpeg" alt="gentlemen baristas" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">The Gentlemen Baristas</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: East India</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d463.7924759469579!2d-0.004752153883094619!3d51.510056791952515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x4876034e0b3bbd3f%3A0xdc96007f132d01f4!2sThe%20Gentlemen%20Baristas%20East%20India%2C%20The%20Import%20Building%2C%202%20Clove%20Cres%2C%20London%20E14%202BE!3m2!1d51.510037!2d-0.004617!5e0!3m2!1sen!2suk!4v1657392452953!5m2!1sen!2suk" width="300" height="200" className="border-0" ></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipMWUVuU-gMhvKGJ7V8WaGv8cQsCEZI7ODmUjUA=w408-h272-k-no" alt="black sheep coffee" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Black Sheep Coffee</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d873.2913572976119!2d-0.01894285823901487!3d51.503635991555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b993979a65%3A0xb474cb78c8cfa334!2sBlack%20Sheep%20Coffee%2C%2045%20Bank%20St%2C%20London%20E14%205NY!3m2!1d51.503093199999995!2d-0.0185881!5e0!3m2!1sen!2suk!4v1657393456392!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipOImdJRpBw0JXSO7U_aN4wUP3JmPzSdGWN-VgaA=w408-h306-k-no" alt="cargo markethall" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Cargo Markethall</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1336.6026576643608!2d-0.021308239710070224!3d51.505541683891344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x4876038c3d7868e9%3A0xb0828984a13d2fc4!2sCargo%20Markethall%2C%201%20Canada%20Square%2C%20London%20E14%205HS!3m2!1d51.5058789!2d-0.0197203!5e0!3m2!1sen!2suk!4v1657393704054!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
    );
}

export default Cafes;