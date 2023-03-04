const element = (
  // Write your code here.
  <div className="congrats-card-bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="discription">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
