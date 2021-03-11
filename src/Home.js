import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />
        
        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />

      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />
        
        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />

        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />

      </div>
      <div className="home__row">
        <Product
          id="1"
          title="Let Us C"
          price="12.56"
          rating="2"
          image="https://images-na.ssl-images-amazon.com/images/I/51NuHATrs8L.jpg"
        />
        
      </div>
    </div>
  );
}

export default Home;
