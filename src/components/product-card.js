import Review from './review';

function ProductCard({ name, price, review, percentOff, imgSrc }) {
  return (<div className="card text-center mx-2 p-0 border-primary" style={{width: 300}}>
    <img src={imgSrc} height='340' className="card-img-top p-0" alt="..." />
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{percentOff} Off</p>
      <p><Review rating={review}  /></p>
      <p className="card-text">${price}</p>
    </div>
  </div>)
}

export default ProductCard;
