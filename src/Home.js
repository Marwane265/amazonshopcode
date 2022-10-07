import React from "react";
import Product from "./Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      ></img>
      <div className="home__row">
        <Product
          id="5"
          title="Playstation5"
          price={500}
          rating={5}
          img="https://m.media-amazon.com/images/I/51051FiD9UL._AC_UY327_FMwebp_QL65_.jpg"
        ></Product>
        <Product
          id="3"
          title="Gaming Chair"
          price={52.84}
          rating={3}
          img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBivxpCMRFOVUp75Dsnk-5ki-18G1mjWIBPDERmYriA1_6A7uVnb73Ovgtkdu5Fw9U8OU6mdjBT0QRFS1hHNur9-LE1j9X3t-RPDjd-Jw&usqp=CAE"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="Computer Gaming Keyboard(Black)"
          price={10}
          rating={4}
          img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRg1XiebcnQ7Xuut2fNRit8wGNbxfzknnNV4dt_DXSHwyHbVmCh-lct6eC9YEYGlFuBAwECiCKk5W5zG7GjMY1Nj52rSD3rpuVi4jnwlZTCQoywwbNiqMV3pA&usqp=CAE"
        ></Product>
        <Product
          id="4"
          title=" Computer Gaming Mice"
          price={17.88}
          rating={4}
          img="https://m.media-amazon.com/images/I/8189uwDnMkL._AC_UY218_.jpg"
        ></Product>
        <Product
          id="4"
          title="SAMSUNG 85-Inch Class Neo QLED 8K"
          price={1299.99}
          rating={5}
          img="https://m.media-amazon.com/images/I/81a3EBam-yL._AC_SX466_.jpg"
        ></Product>
      </div>
      <div className="home__row">
        <Product
          id="4"
          title="Noise Cancelling Over Ear Headphones with Mic, LED Light "
          price={17.88}
          rating={4}
          img="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
