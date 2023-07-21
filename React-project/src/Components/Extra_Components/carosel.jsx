import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carosel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='online-purchasing-payment-e-commerce-banking.jpg'
        alt='ecommerce'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='front-view-online-shopping-concept.jpg'
        alt='ecommerce'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg'
        alt='ecommerce'
      />
    </MDBCarousel>
  );
}