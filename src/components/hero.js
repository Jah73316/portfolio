function Hero({ name, percentOff, imageType }) {
  return (
    <div className={`hero-image-${imageType} card col-6 my-3`}>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div>
          <h5 className="">
            <u>Latest Collection</u>
          </h5>
          <p>Up to {percentOff} off!</p>
        </div>
        <a href="#" className={`btn btn-primary text-white`}>
          Shop Now
        </a>
      </div>
    </div>
  );
}

export default Hero;
