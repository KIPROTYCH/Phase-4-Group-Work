import React from 'react'
import "./Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-main">
        <h1 className="home-title">Book club </h1>
        <p className="home-text">Establish or Discover Your Community.</p>
        <button></button>
      </div>

      <div className="home-content">
        <h1>Testimonials</h1>
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>Riggy G.</h2>
          <p>
            "The book club transformed my reading habits. It's a vibrant,
            engaging community where I've found kindred spirits.
            Thought-provoking discussions and diverse book choices make it a
            literary haven. Joining was a game-changer!"
          </p>
        </div>
        <img src="https://tinyurl.com/yux7ecza" alt="" />
      </div>

      <div className="home-section-unhidden">
        <div className="home-left-section">
          <h2>Bryant</h2>
          <p>
            "The book club has been a transformative experience. It's a haven
            for bibliophiles, offering more than just books. It's a gateway to
            new friendships, a space to discuss ideas, and a source of endless
            inspiration. My reading horizons have expanded, and I'm grateful for
            this wonderful community."
          </p>
        </div>
        <img src="https://tinyurl.com/2xd2dclt" alt="" />
      </div>

      <div className="home-section-unhidden">
        <div className="home-right-section">
          <h2>Jane</h2>
          <p>
            "Joining the book club has been a delightful journey. It's a place
            where passionate readers unite, sharing diverse perspectives and
            exploring worlds through words. It's a literary haven that's
            enhanced my reading and social life. I highly recommend it!"
          </p>
        </div>
        <img src="https://tinyurl.com/2xd2dclt" alt="" />
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>Nickolus</h2>
          <p>
            "Being part of the book club has been an incredible journey. The
            intellectual stimulation, the camaraderie, and the sheer joy of
            discovering new worlds through books have made it an essential part
            of my life. It's more than a club; it's a haven for passionate
            readers. Don't miss the chance to immerse yourself in this wonderful
            literary community – you won't regret it!"
          </p>
        </div>
        <img src="https://tinyurl.com/2xd2dclt" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
