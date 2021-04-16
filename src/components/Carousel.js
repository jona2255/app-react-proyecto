import { Carousel } from "react-bootstrap"

const CarouselHeader = () => {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item  >
        <img
          src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
          alt="First slide"
          className="d-block w-100 csel"
        />
        <Carousel.Caption >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHeader;
