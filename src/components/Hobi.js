import hobi1 from "../assets/img/healty/healty7.jpg";
import hobi2 from "../assets/img/healty/healty8.jpg";
import hobi3 from "../assets/img/healty/healty9.jpg";
import hobi4 from "../assets/img/healty/healty10.jpg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Hobi = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="hobi" id="hobi">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hobi-bx wow zoomIn">
              <h2>Mengekspresikan Kreativitas</h2>
              <p> Mengekspresikan kreativitas dapat menjadi outlet untuk memproses emosi yang kompleks. Melalui seni, menulis, atau aktivitas kreatif lainnya, Anda dapat mengungkapkan dan menjelajahi perasaan yang sulit atau kompleks dengan cara yang non-verbal</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme hobi-slider">
                <div className="item">
                  <img src={hobi1} alt="Image" style={{ borderRadius: "10%  20%", width: "70%" }}
                  />
                  <h5>Fotografer</h5>
                </div>
                <div className="item">
                  <img src={hobi2} alt="Image" style={{ borderRadius: "20% 10%", width: "70%" }}
                  />
                  <h5> Melukis </h5>
                </div>
                <div className="item">
                  <img src={hobi3} alt="Image" style={{ borderRadius: "10%  20%", width: "70%" }}
                  />
                  <h5>Belajar Coding</h5>
                </div>
                <div className="item">
                  <img src={hobi4} alt="Image" style={{ borderRadius: "20%  10%", width: "70%" }}
                  />
                  <h5> Main Musik</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
