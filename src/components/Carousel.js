import { Carousel } from "react-bootstrap"

const CarouselHeader = () => {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item  >
        <img
          src="/img/carousel/carousel-1.jpg"
          alt="Colegio en África"
          className="d-block w-100 mask"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carousel/carousel-2.png"
          alt="Favelas en Brasil"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/carousel/carousel-3.jpg"
          alt="Estepa en Mongolia"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHeader;
