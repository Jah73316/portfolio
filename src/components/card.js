function Card({title, bodyText, buttonClass, buttonText, imgSrc}) {
  return (
    <div className="card mx-5 my-3">
      <img src={imgSrc} height='500' className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {bodyText}
        </p>
        <a href="#" className={`btn btn-${buttonClass} text-white`}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Card;
