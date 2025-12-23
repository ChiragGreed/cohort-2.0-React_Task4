const Book = (props) => {

    return (
        <div className="p-7 relative text-white h-[38em] w-[19em] bg-cover bg-center ">

            <img className="absolute h-full top-0 left-0 right-0 bottom-0 object-cover object-center z-2" src={props.cover} />
            <div className="overlay bg-[linear-gradient(transparent,#ffffff24)] absolute z-20 left-0 right-0 top-0 bottom-0"></div>

            <div className="absolute z-10 flex flex-col justify-between top-5 left-5 right-5 bottom-5">
                <div className="header">

                    <div className="flex pb-1 mb-2 border-b justify-between">
                        <h3 className="text-2xl font-extrabold font-impact">MO.</h3>
                        <i className="ri-menu-3-line text-3xl"></i>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                        <i className="ri-play-reverse-fill opacity-[0.8] text-xs"></i>
                        <p className="opacity-[0.8]">Explore</p>
                        <i className="ri-play-fill opacity-[0.8] text-xs"></i>
                    </div>

                </div>
                <div className="content flex flex-col gap-4.5">
                    <div className="flex gap-1 mb-[-1.2em]">
                        <h5 className="underline ">NO</h5>
                        <h2 className="text-5xl font-extrabold ">{props.number}</h2>
                    </div>
                    <div>
                        <h3 className="text-[1.34em]  text-[#C3DF31]">Featured</h3>
                        <h1 className="text-5xl font-extrabold ">MO.<br />{props.title}</h1>
                    </div>
                    <p className="text-[#ffffffe4] text-[0.88em] leading-6"><span className="text-white text-[1em] font-bold">{props.author}</span> {props.description}</p>
                    <button className="w-full p-3 text-sm font-bold border bg-[#ffffff0e]">Read Now</button>
                </div>
            </div>

        </div>
    )
}

export default Book
