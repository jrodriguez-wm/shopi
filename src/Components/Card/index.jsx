const Card = ()=>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'> 
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    Electronics
                </span>
                <img className='w-full h-full object-cover rounded-lg' src='https://media.istockphoto.com/id/1171805415/es/foto/auriculares-amarillos-sobre-fondo-azul-concepto-musical.jpg?s=612x612&w=0&k=20&c=5Cbm_7gJsIL1ZNGwVlzoxfjROa0W3SqlOrH7GtR5kkE=' alt='headphones' />
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full w-6 h-6 bg-white m-2 p-1 font-bold">
                    +
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-bold">$300</span>
            </p>
        </div>
    );
}

export default Card;