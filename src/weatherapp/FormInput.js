import React from "react";
import "./Form.style.css";
const FormInput = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.loadweather}>
        <div className="row ">
          <div className="col-md-3  offset-2">
            <input
              type="text"
              className="form-control"
              name="city"
              placeholder="City"
              autoComplete="off"
            />
          </div>

          <div className="col-md-3 ">
            <input
              type="text"
              className="form-control"
              name="country"
              placeholder="Country"
              autoComplete="off"
            />
          </div>

          <div className="col-md-3 ">
            <br />
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormInput;
