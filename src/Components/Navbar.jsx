import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login, Logout } from "../Redux/AuthReducer/action";
import LoginPopup from "./LoginPopup";

import "./Navbar.css";

const Navbar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [buttonPopup, setButtonPopup] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const handleLogin = (e) => {
    e.preventDefault();

    let userData = { email, password };
    dispatch(login(userData)).then(() => {
      navigate(location.state, { replace: true });
    });
  };

  const handleLogout = () => {
    dispatch(Logout());
  };

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img
            onClick={() => navigate(`/`)}
            src="https://img2.hkrtcdn.com/src/main/webapp/assets/images/logoNew.svg"
            alt="logo"
          />
        </div>
        <div className="input">
          <input placeholder="Search for products & brands" />
        </div>
        {isAuth && (
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        )}
        <div className="loginbtn">
          <div className="LoginPopup">
            <main>
              <button onClick={() => setButtonPopup(true)}>Login</button>
            </main>
            <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <div className="Loginform">
                <div className="Caraousel">
                  <div>
                    <img
                      src="https://static1.hkrtcdn.com/hknext/static/media/login/slider/1.svg"
                      alt="Logo"
                    />
                    <h4>
                      Wide Range of Original & Authentic <br /> Nutritional
                      Products
                    </h4>
                    <p>
                      We Strive to Provide 100% Authentic <br /> Products to our
                      Customer
                    </p>
                  </div>
                </div>
                <div className="Signup">
                  <p>Login or Sign UP</p>
                  <form onSubmit={handleLogin}>
                    <div className="forminput">
                      <p>Email :- </p>
                      <input
                        type="email"
                        placeholder="Enter Email*"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="forminput">
                      <p>Password :- </p>
                      <input
                        type="password"
                        placeholder="Enter Password*"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <button>Log In</button>
                  </form>
                </div>
              </div>
            </LoginPopup>
          </div>
        </div>
        <div className="cartlogo">
          <img
            onClick={() => navigate(`/cart`)}
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png"
            alt=""
          />
        </div>
      </div>
      <hr />
      <div className="navbar2">
        <div className="dropdown1">
          <p>Shop By Category</p>
          <div className="dropdown-content">
            <div className="dropdown-content1">
              <div>
                <p>Sports Nutrition &gt;</p>
                <p>Vitamins & Supplements &gt;</p>
                <p>Ayurveda & Herbs &gt;</p>
                <p>Health Food & Drinks &gt;</p>
                <p>fitness &gt;</p>
                <p>Wellness &gt;</p>
              </div>
              <div>
                <p>Proteins</p>
                <br />
                <p>Whey Protiens</p>
                <p>Beginners Whey Protein</p>
                <p>Whey Protein Isolate</p>
                <p>Raw Whey Proteins</p>
                <p>Plant Proteins</p>
                <p>Protein for Women</p>
                <p>Protein for Blends</p>
                <p>Casein Proteins</p>
                <p>Soy Proteins</p>
              </div>
              <div>
                <p>Gainers</p>
                <br />
                <p>Weight Gainers</p>
                <p>Mass Gainers</p>
                <p>Herbal Gainers</p>
              </div>
              <div className="Dropdownunder">
                <p>Protein Foods</p>
                <br />
                <p>Peanut Butter</p>
                <p>Muesli</p>
                <p>Protein Shakes</p>
                <p>Oats</p>
                <p>Cereals</p>
                <p>Granola</p>
                <p>Protein Bars</p>
                <p>Protein Water</p>
              </div>
              <div className="Dropdownunder">
                <p>Pre/Post Workout</p>
                <br />
                <p>Pre-Workout</p>
                <p>Creatine</p>
                <p>BCAAs</p>
                <p>Carb Blends</p>
                <p>Electrolytes</p>
                <p>EAA</p>
                <p>Nitric Oxide</p>
                <p>Other Supports</p>
                <p>Citrulline Malate</p>
              </div>
              <div className="Dropdownunder">
                <p>Workout Essentials</p>
                <br />
                <p>Fat Burners</p>
                <p>Consult Services</p>
                <p>L Carnitine</p>
                <p>Multivitamins for</p>
                <p>Bodybuilding</p>
                <p>Pre Hormone</p>
                <p>ZMA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown2">
          <p>Best Sellers</p>
          <div className="dropdown-content2">
            <div>
              <div className="dropdown-content23">
                <p>Sport Nutrition &gt;</p>
                <p>Health Nutrition &gt;</p>
                <p>Fitness &gt;</p>
                <p>Wellness &gt;</p>
              </div>
              <div className="dropdown-content234">
                <p>Protein Powder</p>
                <p>Whey Protein</p>
                <p>Whey Protein Isolate</p>
                <p>Mass Gainer</p>
                <p>BCAA</p>
                <p>Fat Burners</p>
                <p>Pre Workout</p>
                <p>Creatine</p>
                <p>Protein Bars</p>
                <p>Weight Gainer</p>
                <p>Carb Blends</p>
                <p>Other Support</p>
                <p>Casein Protein</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown3">
          <p>Brands</p>
          <div className="dropdown-content3">
            <div>
              <img
                src="https://img6.hkrtcdn.com/8846/bnr_884565_o.png"
                alt=""
              />
              <img
                src="https://img10.hkrtcdn.com/8846/bnr_884579_o.png"
                alt=""
              />
              <img
                src="https://img10.hkrtcdn.com/8846/bnr_884569_o.png"
                alt=""
              />
              <img
                src="https://img10.hkrtcdn.com/10848/bnr_1084799_o.png"
                alt=""
              />
              <img
                src="https://img2.hkrtcdn.com/8846/bnr_884581_o.png"
                alt=""
              />
              <img
                src="https://img8.hkrtcdn.com/8846/bnr_884587_o.png"
                alt=""
              />
              <img
                src="https://img2.hkrtcdn.com/10849/bnr_1084801_o.png"
                alt=""
              />
              <img
                src="https://img6.hkrtcdn.com/8846/bnr_884595_o.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="dropdown4">
          <p>Deals</p>
          <div className="dropdown-content4">
            <div>
              <h3>Offers & Deals</h3>
            </div>
            <div className="Deals">
              <div>
                <img
                  src="https://img5.hkrtcdn.com/20091/smn_image_2009054_o.png"
                  alt=""
                />
                <p>Flash Sale</p>
              </div>
              <div>
                <img
                  src="https://img3.hkrtcdn.com/20091/smn_image_2009062_o.png"
                  alt=""
                />
                <p>Clearance Sale</p>
              </div>
              <div>
                <img
                  src="https://img7.hkrtcdn.com/20091/smn_image_2009056_o.png"
                  alt=""
                />
                <p>Under RS2999</p>
              </div>
              <div>
                <img
                  src="https://img9.hkrtcdn.com/20091/smn_image_2009058_o.png"
                  alt=""
                />
                <p>Under RS1999</p>
              </div>
              <div>
                <img
                  src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/crazy.svg"
                  alt=""
                />
                <p>Crazy Deals</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Blogs</p>
        </div>
        <div>
          <p>Gift Card</p>
        </div>
        <div className="dropdown7">
          <p>customer Support</p>
          <div className="dropdown-content7">
            <div className="support1">
              <p>Chat with us</p>
              <p>Email us</p>
              <p>Ask our Experts</p>
              <p>Returns policy</p>
              <p>FAQS</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="support2">
              <p>For Support & Order Enquiries</p>
              <p>Call us at : 1024-4616444</p>
              <p>10 AM to 7 PM</p>
            </div>
          </div>
        </div>
        <div>
          <p>Store Locator</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
