import shoes from '../images/shoes.jpg';
import mensShirt from '../images/mens-clothing.jpg';
import beauty from '../images/makeup.jpg';
import cookwear from '../images/kitchen.jpg';
import bedset from '../images/bedset.jpg';
import jewelry from '../images/watch.jpg';
import fragranceImage from '../images/perfume.jpg';
import jeansShirt from '../images/womens_outfit.jpg';
import Card from "../components/card";
import mainCardImage from '../images/main-card-image.jpg'
import ProductCard from "../components/product-card";
import Perks from "../components/perks";
import Subscribe from "../components/subscribe";
import Hero from "../components/hero";


function HomePage(){
    const products = [
        {
          name: 'Fragrance',
          price: 30,
          review: 4.2,
          percentOff: '25%',
          imgSrc: fragranceImage
        },
        {
          name: 'Jeans and Shirt',
          price: 80,
          review: 5,
          percentOff: '15%',
          imgSrc: jeansShirt
        },
        {
          name: 'Shoes',
          price: 40,
          review: 3.2,
          percentOff: '40%',
          imgSrc: shoes
        },
        {
          name: 'Mens Shirts',
          price: 70,
          review: 4.5,
          percentOff: '20%',
          imgSrc: mensShirt
        },
        {
          name: 'Beauty',
          price: 30,
          review: 4.1,
          percentOff: '50%',
          imgSrc: beauty
        },
        {
          name: 'Cookwear',
          price: 50,
          review: 3.5,
          percentOff: '30%',
          imgSrc: cookwear
        },
        {
          name: 'Comforter set',
          price: 90,
          review: 2,
          percentOff: '20%',
          imgSrc:bedset
        },
        {
          name: 'Watches',
          price: 70,
          review: 4.4,
          percentOff: '70%',
          imgSrc:jewelry
        },
      ]
    
      const heroItems =[
        {
          name: 'Skin Care',
          percentOff: '40%',
          imageType: 'skin'
        },
        {
          name: 'Hair Care',
          percentOff: '80%',
          imageType: 'hair'
        }
      ]

      return (
        <>
        <Card 
        title="Shop This Holiday with us Up To 40% Off" 
        bodyText='Amazing savings + Great Values means something for everyone. 
        price may be lower as part of clearance.'
        buttonText='Shop Now'
        buttonClass='primary'
        imgSrc={mainCardImage}
        />
        <div className="mx-5 my-3">
          <h2 className="text-secondary text-center">Products</h2>
          <hr />
          <div className="d-flex flex-wrap flex-row justify-content-center gap-3 my-3 mx-2">
            {products.map((p, index)=>{
              return <ProductCard 
              key={index} 
              name={p.name} 
              price={p.price} 
              percentOff={p.percentOff} 
              review={p.review} 
              imgSrc={p.imgSrc} />
            })}
          </div>
          <div className="d-flex col-12 flex-row justify-content-evenly my-3 gap-3 px-4">
            {heroItems.map((p, index)=>{
              return <Hero 
              key={index} 
              name={p.name} 
              percentOff={p.percentOff}
              imageType={p.imageType}   />
            })}
          </div>
        </div>
        <div className="my-5 mx-5">
            <Perks />
        </div>
        <div className="d-flex justify-content-center my-5 mx-5">
            <Subscribe />
        </div>
        </>
      )

}

export default HomePage;