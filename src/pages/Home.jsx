import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  AllImages,
  brandRange,
  lastBanner,
  midBanner,
} from "../Components/AllImages";
import Footer from "../Components/Footer";

const Home = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="topBanner">
        <Carousel infinitLoop autoPlay>
          {AllImages.length > 0 &&
            AllImages.map((item, index) => {
              return (
                <div className="topBannerImage" key={index}>
                  <img src={item.imgLink} alt="404 image error" />
                </div>
              );
            })}
        </Carousel>
      </div>
      {/* //////////--------------slider mid section */}
      <div className="commonDiv sliderimgLinerbg">
        <div className="sliderimg">
          <div id="you_may_also_like_slider">
            <div className="product_container">
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22859/bnr_2285808_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img7.hkrtcdn.com/22576/bnr_2257566_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img7.hkrtcdn.com/22814/bnr_2281326_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img1.hkrtcdn.com/22576/bnr_2257570_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img5.hkrtcdn.com/22874/bnr_2287304_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img9.hkrtcdn.com/22576/bnr_2257568_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22813/bnr_2281240_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img3.hkrtcdn.com/22576/bnr_2257572_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22874/bnr_2287308_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img7.hkrtcdn.com/22576/bnr_2257566_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22874/bnr_2287310_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img
                      src="https://img9.hkrtcdn.com/22576/bnr_2257568_o.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////----------------midBanner */}
      <div className="commonDiv midBanner">
        <div className="sliderimg">
          <Carousel infinitLoop autoPlay>
            {midBanner.length > 0 &&
              midBanner.map((item, index) => {
                return (
                  <div className="topBannerImage" key={index}>
                    <img src={item.imgLink} alt="404 image error" />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>

      {/* //////////////---------------next slider mid section */}
      <div className="commonDiv sliderimgLinerbg">
        <div className="sliderimg">
          <h1
            style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left" }}
          >
            Picks You Can't Miss
          </h1>
          <div id="you_may_also_like_slider">
            <div className="product_container">
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img7.hkrtcdn.com/22576/bnr_2257566_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22576/bnr_2257570_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22576/bnr_2257568_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img3.hkrtcdn.com/22576/bnr_2257572_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img7.hkrtcdn.com/22576/bnr_2257566_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22576/bnr_2257568_o.jpg"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////----------------LastBanner */}
      <div className="commonDiv midBanner">
        <div className="sliderimg">
          <Carousel infinitLoop autoPlay>
            {lastBanner.length > 0 &&
              lastBanner.map((item, index) => {
                return (
                  <div className="topBannerImage" key={index}>
                    <img src={item.imgLink} alt="404 image error" />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>

      {/* ////////------------Brand Range */}
      <div className="commonDiv">
        <div className="sliderimg ">
          <h1
            style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left" }}
          >
            Brand Range
          </h1>
          <div id="you_may_also_like_slider">
            <div className="product_container brandRangeProductContainer">
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img3.hkrtcdn.com/22115/bnr_2211472_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img7.hkrtcdn.com/22043/normal_2204256_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22043/normal_2204258_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22043/normal_2204260_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img9.hkrtcdn.com/22101/bnr_2210088_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22099/bnr_2209880_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img7.hkrtcdn.com/22043/normal_2204266_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="product_card brandRange">
                <div className="product_image my_outer_div">
                  <img
                    src="https://img1.hkrtcdn.com/22043/normal_2204270_o.png"
                    alt=""
                  />
                  <div className="my_inner_div">
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////-----------Why HealthCart */}
      <div className="commonDiv">
        <div className="sliderimg ">
          <h1
            style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "left" }}
          >
            Why HealthKart ?
          </h1>
          <div className="whyHealthkartmain">
            <div className="whyHealthKart">
              <img
                style={{ width: "5rem", marginBottom: ".6rem" }}
                src="https://img9.hkrtcdn.com/20791/normal_2079088_o.png"
                alt=""
              />
              <h2
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  marginBottom: ".6rem",
                }}
              >
                Wide range of Nutritional products
              </h2>
              <h5 style={{ textAlign: "left", marginBottom: ".6rem" }}>
                One-stop fitness and health destination
              </h5>
            </div>
            <div className="whyHealthKart">
              <img
                style={{ width: "5rem", marginBottom: ".6rem" }}
                src="https://img3.hkrtcdn.com/20791/normal_2079092_o.png"
                alt=""
              />
              <h2
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  marginBottom: ".6rem",
                }}
              >
                Wide range of Nutritional products
              </h2>
              <h5 style={{ textAlign: "left", marginBottom: ".6rem" }}>
                One-stop fitness and health destination
              </h5>
            </div>
            <div className="whyHealthKart">
              <img
                style={{ width: "5rem", marginBottom: ".6rem" }}
                src="https://img1.hkrtcdn.com/20791/normal_2079090_o.png"
                alt=""
              />
              <h2
                style={{
                  textAlign: "left",
                  marginBottom: ".6rem",
                  fontWeight: "bold",
                }}
              >
                Wide range of Nutritional products
              </h2>
              <h5 style={{ textAlign: "left", marginBottom: ".6rem" }}>
                One-stop fitness and health destination
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////------------Footer */}
      <Footer />
    </div>
  );
};

export default Home;
