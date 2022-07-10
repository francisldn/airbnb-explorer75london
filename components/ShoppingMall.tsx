const ShoppingMall = () => {
    return (
        <div className="flex flex-col mx-8 my-14">
            <h1 className="mx-auto mb-16 text-5xl">Shopping Malls</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipMrm6MgeQsejKGvC7djLatVx5FNn_17iyakr-2P=w408-h306-k-no" alt="canary wharf shopping mall" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Canary Wharf Shopping Mall</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Canary Wharf</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2483.4557875400246!2d-0.025097869519758575!3d51.50485355358135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x487602b0a1266417%3A0x8816199b3209b78f!2sCanary%20Wharf%20Shopping%20Centre%2C%201%20Canada%20Square%2C%20London%20E14%205AB!3m2!1d51.5048503!2d-0.020613199999999998!5e0!3m2!1sen!2suk!4v1657450846527!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy"></iframe></li>
                        </ul>
                    </div>
                </div>
                <div className="flex mx-auto">
                    <div className="hidden lg:block w-[400px] h-[350px] rounded-xl overflow-hidden mx-8">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipN_fmvEsR5D5LN9kO-67-PNNPup3K05RVTquXdz=w408-h306-k-no" alt="Stratford Westfield" className="object-cover w-full h-full" />
                    </div>
                    <div className="px-5 mr-5">
                        <h2 className="text-2xl font-bold py-5">Stratford Westfield</h2>
                        <ul className="text-lg list-disc">
                            <li>Nearest tube station: Stratford</li>
                            <li><strong>Location:</strong> </li>
                            <li className="mt-3 list-none"><iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4093.067509845485!2d-0.010505067043354844!3d51.542063461292045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x48761d646f76f141%3A0xea8a03aa08f5f286!2sWestfield%20Stratford%20City%2C%20Montfichet%20Rd%2C%20London%20E20%201EJ!3m2!1d51.5440354!2d-0.0053088!5e0!3m2!1sen!2suk!4v1657451097143!5m2!1sen!2suk" width="300" height="200" className="border-0" loading="lazy" ></iframe></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingMall;