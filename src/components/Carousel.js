const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide bottom-shadow"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://img.freepik.com/premium-vector/e-commerce-omnichannel-order-isometric-illustration-light-gradient-suitable-mobile-app-website-banner-diagrams-infographics-other-graphic-assets_210682-626.jpg?w=2000"
            className="d-block w-100 h-100"
            alt="Home Page"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome !</h5>
            <p>E-commerce React App by Khaydarkhujaev Akbarkhuja</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://img.freepik.com/premium-vector/e-commerce-omnichannel-isometric-illustration-suitable-mobile-app-website-banner-diagrams-infographics-other-graphic-assets_210682-537.jpg?w=2000"
            className="d-block w-100 h-100"
            alt="Home Page"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>SALE -20%</h5>
            <p>Discount till 16.09.2022</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/premium-vector/e-commerce-tracking-isometric-illustration-suitable-mobile-app-website-banner-diagrams-infographics-other-graphic-assets_210682-484.jpg?w=2000"
            className="d-block w-100 h-100"
            alt="Home Page"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>New Style T-Sirts</h5>
            <p>Check Men's Clothing Category</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
