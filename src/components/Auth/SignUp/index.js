import React from "react";
import BlockButton from "../../BlockButton";

const SignUp = () => {
  return (
    <form>
      <div className="">
        <div className="row">
          <div className="col">
            <label for="inputFirstName">First name</label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="col">
            <label for="inputLastName">Last name</label>
            <input type="text" id="inputLastName" className="form-control" />
          </div>
        </div>
      </div>
      <div className="top-margin">
        <label for="inputPassword5 ">Password</label>
        <input type="password" id="inputPassword5" className="form-control" />
      </div>

      <div className="top-margin">
        <label for="inputPassword6">Confirm Password</label>
        <input type="password" id="inputPassword6" className="form-control" />
      </div>

      <BlockButton text={"Sign up"} />
    </form>
  );
};

export default SignUp;
