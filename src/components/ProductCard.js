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

export default function ProductCard() {
  return (
    <div class="shop-card">
      <div class="title">Nike Metcon 2</div>
      <div class="desc">Men's training shoe</div>
      <CarouselProvider
        naturalSlideWidth={90}
        naturalSlideHeight={70}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <Image
              src="http://www.supah.it/dribbble/012/1.jpg"
              hasMasterSpinner="true"
              className="img-adjust"
            />
          </Slide>
          <Slide index={1}>
            <Image
              src="http://www.supah.it/dribbble/012/2.jpg"
              hasMasterSpinner="true"
              className="img-adjust"
            />
          </Slide>
          <Slide index={2}>
            <Image
              src="http://www.supah.it/dribbble/012/3.jpg"
              hasMasterSpinner="true"
              className="img-adjust"
            />
          </Slide>
        </Slider>
        <DotGroup dotNumbers="true" />
      </CarouselProvider>

      <div class="cta">
        <div class="price">$130</div>
        <Button appearance="primary" color="cyan" className="btn">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
