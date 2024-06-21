const Main = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>
          YOUR FEET <br /> DESERVE <br />
          THE BEST
        </h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="buttons">
          <button className="btn white-btn ">Shop Now</button>
          <button className="btn red-btn">Categories</button>
        </div>

        <p>Also Available On</p>

        <div className="company-logo">
          <img src="./images/flipkart.png" alt="Flipkart" />
          <img src="./images/amazon.png" alt="Amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="./images/shoe_image.png" alt="Image" />
      </div>
    </main>
  );
};

export default Main;
