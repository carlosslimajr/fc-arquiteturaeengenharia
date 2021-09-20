import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Carousel, {
  slidesToShowPlugin,
  slidesToScrollPlugin
} from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Slider from 'react-slick'
import { ServicesWrapper } from './styles'

const Services = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
  }

  return (
    <ServicesWrapper className="container">
      <div className="title">
        <h4>Serviços</h4>
      </div>
      {process.browser && (
        <div className="carousel">
          <Carousel
            plugins={[
              'clickToChange',
              'centered',
              'infinite',
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2
                }
              }
            ]}
          >
            <div className="image">
              <img src="/exemplo.png" />
            </div>

            <img src="/exemplo.png" />
            <img src="/exemplo.png" />
            <img src="/exemplo.png" />
            <img src="/exemplo.png" />
            <img src="/exemplo.png" />
          </Carousel>
        </div>
      )}
    </ServicesWrapper>
  )
}

export default Services
