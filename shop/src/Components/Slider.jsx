
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class MyCarousel extends Component {
  render() {
    return (
      <Carousel autoPlay={true} infiniteLoop={true} width="100%">
        <div>
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Feb/21/HB3_JDD_Web_Esha_21Feb23Rev.jpg"
            alt=""
          />
          
        </div>
        <div>
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Feb/21/HB1_RefurbMobile_Web_SYM_21Feb23.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Jan/31/Shopclues_SMB_SYM_Web_31Jan23.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Feb/21/HB2_Bestsellers_Web_SYM_21Feb23.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://cdn.shopclues.com/images/banners/2023/Feb/21/HB3_JDD_Web_Esha_21Feb23Rev.jpg"
            alt=""
          />
        </div>

        
      </Carousel>
    );
  }
}