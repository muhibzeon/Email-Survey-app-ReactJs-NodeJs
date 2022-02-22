import React from "react";

const Landing = () => {
  return (
    <div style={{ textAlign: "center" }} className="row">
      <h1>Email Survey</h1>
      <h5>Excited to see you here!</h5>
      <div class="row s12 m5">
        <div
          class="card-panel #ff9e80 deep-orange accent-1
"
        >
          <span class="black-text">
            <i class="material-icons">info_outline</i>
            The front-end work is currently ongoing. To conduct a survey Please
            Click on the Emaily Logo after Logging In. Create a new survey using
            multiple recipient list seperated by coma(,).
          </span>
        </div>
      </div>
      <div class="row s12 m5">
        <div class="card-panel #ff9e80 deep-orange accent-1">
          <span class="black-text">
            <i class="material-icons">info_outline</i>
            To get Credits fill out the cards with fake information except the
            card Number. Card Number must be: 4242 4242 4242 4242. Card validity
            should be any month and year in future from today.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
