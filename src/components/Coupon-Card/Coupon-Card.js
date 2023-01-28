const CouponCard = (props) => {   
    return <>
        <div className={`${props.bg || 'bg-primary'} w-full rounded-xl px-4 py-8 font-poppins ${props.textColor || 'text-black'}`}>
            <div className={`rounded-full my-2 mx-auto w-24 h-24 bg-cover bg-no-repeat bg-center ${props.image || 'bg-gray-300'}`}></div>
            <h5 className="text-xl">{props.name || 'Product 1'}</h5>
            <h5 className="text-xl">{props.promo || '20% OFF'}</h5>
            <p className="font-normal px-3 mt-3 text-base">
                {props.desc || 'lorem ipsum dot iker lat sum'}
            </p>    
            <hr className={`my-5 border-t-2 border-dashed ${props.hr || 'border-black'}`} />
            <p className="font-normal">COUPON CODE</p>
            <h3 className="font-bold">{props.code || 'FNPR15RG'}</h3>
            <p className="text-base font-normal">
                *Valid until {props.exp || 'January 20th 2023'}
            </p>      
        </div> 
    </>      
}


export default CouponCard