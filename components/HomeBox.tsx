interface HomeBoxProp {
    title: string;
    imageUrl: string;
}

const HomeBox = ({title, imageUrl}:HomeBoxProp) => {
    return (
        <div className = "my-6 rounded-xl bg-slate-300 border-slate-400 overflow-hidden hover:scale-110 cursor-pointer transition-all">
            <div className="w-full h-[308px]">
                <img src={imageUrl} alt="" className="object-cover w-full h-full"/>
            </div>
            <div>
                <h2 className="text-2xl text-center py-3">{title}</h2>
            </div>
        </div>
    );
}

export default HomeBox;