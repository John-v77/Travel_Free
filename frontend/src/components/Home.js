import React from 'react';
import Slider from 'react-slick';
import './Home.css'


function Home(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <h2>Check out some of the gently-used items you can find on WhyNew!</h2>
            <Slider {...settings}>
      <div >
        <img className= 'apple' src = './Images/iphone range.jpg' alt= 'apple'/>
      </div>
      <div>
      <img className= 'samsung' src = './Images/s21transp.png' alt= 'S21'/>
      </div>
      <div>
      <img className= 'macbook' src = './Images/macbookairwhtbg.png' alt= 'macbook'/>
      </div>
      <div>
      <img className= 'apple2' src = './Images/iphone12transparent.png' alt= 'apple2'/>
      </div>
      {/* <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>

            
        </>
    );
}

export default Home;