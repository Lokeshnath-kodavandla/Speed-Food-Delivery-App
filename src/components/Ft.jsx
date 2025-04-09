const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-4" style={{ fontFamily: 'Poppins' }}>
      <div className="container">
        <div className="row text-md-left text-center">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">Eternal</h5>
            <ul className="list-unstyled">
              {['Zomato', 'Blinkit', 'District', 'Hyperpure', 'Feeding India', 'Investor Relations'].map((item, i) => (
                <li key={i}><a href="#" className="text-white text-decoration-none d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">For Restaurants</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none d-block py-1">Partner With Us</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block py-1">Apps For You</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">For Delivery Partners</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none d-block py-1">Partner With Us</a></li>
              <li><a href="#" className="text-white text-decoration-none d-block py-1">Apps For You</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="fw-bold">Learn More</h5>
            <ul className="list-unstyled">
              {['Privacy', 'Security', 'Terms of Service', 'Help & Support', 'Report a Fraud', 'Blog'].map((item, i) => (
                <li key={i}><a href="#" className="text-white text-decoration-none d-block py-1">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social + App Buttons */}
        <div className="row mt-4 justify-content-between align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">Social Links</h5>
          </div>

          <div className="col-md-6 text-center text-md-end">
            <img src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png" alt="App Store" height="40" className="me-2 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" height="40" className="rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
