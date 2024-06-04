import '../navbar/nav_style.css'

const Banner = () => {
  return (
    <main className="banner container">
      <div className="banner-contain">
        <h1>YOUR FEET DESEVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="banner-btn">
          <button>Show Now</button>
          <button className='secondary-btn'>Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="banner-logo">
            <img src="/flipkart.png" alt="filpkart-logo" />
            <img src="/amazon.png" alt="filpkart-logo" />
          </div>
        </div>
      </div>

      <div className="banner-image">
        <img src="/shoe_image.png" alt="show image" />
      </div>
    </main>
  );
};

export default Banner;
