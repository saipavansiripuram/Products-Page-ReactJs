export default function card(props) {
    const item = props.item;

    return <div className="border flex">
        <div><img src={item.img} alt="img" className="img" /></div>
        <div>
            <div>{item.name} </div>
            <div className="flex"> {item.perks.map(perk => {
                return <div className="perk">{perk} </div>
            })}</div>
        </div>

        <div>
            <div>{item.vendorName} </div>
            <div className="vendor-address"> {item.vendorAddress}</div>
            <div className="flex vendor-address">
                <div>  Rating Value:{item.rating.value}</div>
                <div>  Rating Number:{item.rating.number}</div>
            </div>

        </div>
        <div>
            <div> Price: {item.price} </div>
            <div className="vendor-address"> Shipping charges: {item.shipping}</div>
        </div>

        <div className="cart">
            <div className="acart" >
                <button>Add to cart</button>
            </div>
            <div className="acart" >
                <button>Make Offer</button>
            </div>
        </div>

    </div>

}