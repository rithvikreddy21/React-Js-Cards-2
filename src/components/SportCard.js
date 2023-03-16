function SportCard(props) {
  return (
    <div className="card">
      <div className="card-header text-dark">
        <b>{props.name}</b>
      </div>
      <div className="card-body" style={{color:"black",textAlign:"center"}} >
        <h5 className="card-title">{props.sport}</h5>
        <p className="card-text">Age: {props.age}</p>
        <p className="card-text">Country: {props.country}</p>
        <p className="card-text">Description: {props.description}</p>
        <a href ="https://www.google.com/" className = "btn btn-primary">Know More</a>
      </div>
    </div>
  );
}

export default SportCard;