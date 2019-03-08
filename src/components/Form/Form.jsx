import React from "react";

const Form = () => {
  return (
    <section className="section container scrollspy" id="contact">
      <div className="row">
        <div className="col s12 l5">
          <h2>GET IN TOUCH WITH ME</h2>
          <ul>
            <li>Mobile: 07540 577813</li>
            <li>Email: jamiebarrydavis@gmail.com</li>
            <li>Github: github.com/jamiebdavis</li>
            <li>Twitter: @jd_codes</li>
            <li>Instagram: @jamied_nyc</li>
          </ul>
        </div>
        <div className="col s12 l5 offset-l2">
          <form>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input type="email" name="" id="email" />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">message</i>
              <textarea id="message" className="materialize-textarea" cols />
              <label htmlFor="message">Your Message</label>
            </div>
            <div className="input-field">
              <input type="text" name="" id="date" className="datepicker" />
              <label htmlFor="date">Choose a date you need me for</label>
            </div>
            <div className="input-field">
              <p>Services Required...</p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>photography</span>
                </label>
              </p>
              <p>
                <label>
                  <input type="checkbox" />
                  <span>editing</span>
                </label>
              </p>
            </div>
            <div className="input-field center">
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
