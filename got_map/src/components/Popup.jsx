import React from "react";
import "./Popup.scss";

class Popup extends React.Component {
  closeBtnClick = () => {
    this.props.handleClick(this.props.btnToggle);
  };

  render() {
    return this.props.btnToggle ? (
      <div className="pop-up">
        <div className="pop-up__container">
          <button className="pop-up__btn" onClick={this.closeBtnClick}>
            X
          </button>
          {this.props.filteredLocation.map((person) => {
            return (
              <div className="pop-up__person-card" key={person.id}>
                <img
                  className="pop-up__person-img"
                  src={person.image}
                  alt={person.name}
                ></img>
                <h1 className="pop-up__person-name">{person.name}</h1>|
                <h2 className="pop-up__title">{person.title}</h2>
                <h3 className="pop-up__person-location">{person.location}</h3>
                <p className="pop-up__person-description">
                  {person.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default Popup;
