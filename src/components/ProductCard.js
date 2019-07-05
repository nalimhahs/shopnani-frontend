import React from "react";

import { Button } from "rsuite";

import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "../assets/css/ProductCard.css";

export default function ProductCard(props) {

  console.log(props);

  return (
    <div className="shop-card">
      <div className="title">{props.data.title}</div>
      <div className="desc">{props.data.productBrand}</div>
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={70}
        totalSlides={3}
      >
        <Slider>
          {Object.values(props.data.imageUrls).map((imageUrl, i=0) => (
            <Slide index={i++}>
              <Image
                src={imageUrl}
                hasMasterSpinner="true"
                className="img-adjust"
              />
            </Slide>
          ))}
        </Slider>
        <DotGroup dotNumbers="true" />
      </CarouselProvider>

      <div className="cta">
        <div className="price">₹{props.data.flipkartSpecialPrice.amount}</div>
        <a href={props.data.productUrl}>
          <Button appearance="primary" color="cyan" className="btn">
            Buy Now
          </Button>
        </a>
        
      </div>
    </div>
  );
}
