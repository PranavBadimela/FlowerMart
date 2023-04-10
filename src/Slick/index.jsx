import React, { Component } from "react";
import Slider from "react-slick";

/* Add css to your project */
import "./index.scss";

const companyLogosData = [
  {
    id: "d14af630-5d22-4bfb-85dd-bb507b139b82",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677760878/297_pvdv21.jpg",
  },
  {
    id: "0a932287-8002-4fc8-95d1-8cbed3224e37",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677760878/135-PPJ131_sxn1lw.jpg",
  },
  {
    id: "8211ce0c-d7dc-4d2b-8468-5e48ad9ae985",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677761868/South-Indian-bridal-traditional-Poola-Jada-hairstyle-look-_ecwefk.png",
  },
  {
    id: "daa48153-3f16-4797-8469-5d63c9cba938",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677760878/152-PPJ125-Copy_rakrzl.jpg",
  },
  {
    id: "2f4b518e-29b3-45c3-a7a5-80929f7898d9",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677762120/b0c7e4602f6eccc6c6f76ed0bf879af8_wmv5zl.jpg",
  },
  {
    id: "895b9b4d-a283-4ee1-9fb8-933a3c4b449c",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677760878/BFDCE96F-A0A6-4749-A699-56CDAAA64D50_xvn4of.jpg",
  },
  {
    id: "a8c67fd0-bab9-46ec-95de-cbfa2e3473f6",
    company_logo_url:
      "https://res.cloudinary.com/dnaarhl5b/image/upload/v1677761867/Pellipoolajada_PPJ240_xw7ef5.jpg",
  },
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

class Slick extends Component {
  renderSlider = () => {
    return (
      <Slider {...settings}>
        {companyLogosData.map((eachLogo) => {
          const { id, company_logo_url } = eachLogo;
          return (
            <div className="slick-item" key={id}>
              <img
                className="logo-image"
                src={company_logo_url}
                alt="company logo"
              />
            </div>
          );
        })}
      </Slider>
    );
  };

  render() {
    return (
      <div className="main-container">
        <h1>Company Logos</h1>
        <div className="slick-container">{this.renderSlider()}</div>
      </div>
    );
  }
}

export default Slick;
