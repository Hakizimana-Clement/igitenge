import React from "react";
import Carousel from "./Carousel";
import WelcomingMessage from "./WelcomingMessage";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CardImage from "./CardImage";
import BlogSection from "./BlogSection";
import AboutUss from "./AboutUss";
import ContactUss from "./ContactUss";
import Footer from "./Footer";
function Header() {
  return (
    <>
      {/* //
      ************************************************************************
      // ***************************** PART 1
      *********************************** // *****************************
      ****************************************** */}
      <div>
        {/*PART 1  */}
        <section className="sub-main row ">
          {/* This welcoming Message is for right text  */}
          <WelcomingMessage />
          {/* This Carousel is for image slides  */}
          <Carousel />
        </section>
        {/* // ************************************************************************ */}
        {/* // ***************************** PART 2 *********************************** */}
        {/* // *********************************************************************** */}
        {/*PART 2  */}
        {/* This part is for featuring details about our website our specialite*/}
        <section className="feature-box  row">
          <div
            className="col-lg-4 col-md-4 feature-box1"
            // style={{ background: "#e7c30459" }}
          >
            <SearchIcon
              style={{ fontSize: 66, color: "#631f1f" }}
              aria-label="MoneyExchangeIcon"
            />
            <h3>Smart size customize</h3>
            <p>Customize the size for the clothes you choose before sale it.</p>
          </div>
          <div
            className="col-lg-4 col-md-4 feature-box2"
            // style={{ background: "#e7c30459" }}
          >
            <GroupsIcon
              style={{ fontSize: 70, color: "#631f1f" }}
              aria-label="MoneyExchangeIcon"
            />
            <h3>Elite Clientelei</h3>
            <p>
              We have all the Ibitenge(igitenge in plural) style, the fanasty
              Ibitenge Sytles.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-4 feature-box3"
            // style={{ background: "#e7c30459" }}
          >
            <CurrencyExchangeIcon
              // fontSize="large"
              // style={{ fontSize: 50 }}
              style={{ fontSize: 44, marginBottom: 11, color: "#631f1f" }}
              aria-label="MoneyExchangeIcon"
            />
            <h3>Easy Returns & Exchanges</h3>
            <p>
              If you are not happy with our products for whatever reason, we
              accept returns.
              {/* For refunds up to 30 days after the delivery date. */}
            </p>
          </div>
        </section>
        {/* // ************************************************************************ */}
        {/* // ***************************** PART 3 *********************************** */}
        {/* // *********************************************************************** */}
        {/*  This is Part 3 describe samoe background of igitenge*/}
        <section className="whoWeAre  row">
          <div className="col-lg-6 whoWeAre-part1">
            <h1> Igitenge style for everyone</h1>
            <p>
              Igitenge style is for all people that wants to wear best African
              wax print fabric with beautiful colorful pieces that contain a
              variety of patterns and designs. We become best for you in
              choosing best igitenge wear to it.
            </p>
          </div>
          <div className="col-lg-6 whoWeAre-part2">
            <div className="whoWeAre-image">
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1481325545291-94394fe1cf95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=546&q=95"
                alt="african-wax-fabric"
              />
            </div>
          </div>
        </section>
        <section className="products ">
          <h1>Our Products</h1>
          <CardImage />
        </section>

        <section className="blog-section">
          <h1>FORM THE BLOG</h1>
          <BlogSection />
        </section>

        <section>
          <AboutUss />
        </section>
        <section className="contact-section">
          <ContactUss />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Header;
