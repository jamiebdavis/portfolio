import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer black">
      <div className="container">
        <div className="row">
          <div className="col s12 l6">
            <h5>About ME</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget
              velit aliquet sagittis id consectetur purus.
            </p>
          </div>
          <div className="col s12 l4 offset-l2">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="https://twitter.com/jd_codes">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/jamied_nyc/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jamie-davis-87b48995/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright blue">
        <div className="container center-align">&copy; 2019 Jamie Davis</div>
      </div>
    </footer>
  );
};

export default Footer;
