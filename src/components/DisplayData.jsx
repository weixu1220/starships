function DisplayData({data}) {
    
    return(
        <div className="wrapper">
        {data.map((item,index)=>{
            return(
                <div className="ship" key={index}>
                    <div className="basic">
                        <h1>Name: {item.name}</h1>
                        <p>Model: {item.model}</p>
                        <p>Manufacturer: {item.manufacturer}</p>
                        <p>Class: {item.class}</p>
                    </div>
                    <div className="stat">
                        <p>Length: {item.length}</p>
                        <p>Max atmosphering speed: {item.max_atmosphering_speed}</p>
                        <p>Crew: {item.crew}</p>
                        <p>Passengers: {item.passengers}</p>
                        <p>Hyperdrive rating: {item.hyperdrive_rating}</p>
                    </div>
                </div>
                
            )
        })}
        </div>
    )
}

export default DisplayData;