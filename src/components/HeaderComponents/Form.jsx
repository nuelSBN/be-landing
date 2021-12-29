import React from "react";

export default function Form() {
  return (
    <form>
      <h3>Sign up for newsletter</h3>
      <div className="inputContainer">
        <input type="text" placeholder="enter fullname" />
      </div>
      <div className="inputContainer">
        <input type="email" placeholder="enter your email" />
      </div>
      <div className="inputContainer">
        <textarea placeholder="make a review...."></textarea>
      </div>
      <div className="inputContainer">
        <button>Submit</button>
      </div>
    </form>
  );
}
