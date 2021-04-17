import React from "react";
import axios from "axios";
import "./map.scss";
import Popup from "../components/Popup";

class Map extends React.Component {
  state = {
    classList: [],
    btnToggle: false,
    defaultLocation: "",
    clickLocation: "",
    filteredLocation: [],
  };

  handleClick = (e) => {
    this.setState({
      btnToggle: !this.state.btnToggle,
    });
  };

  locationClick = (e) => {
    this.setState({
      clickLocation: e.target.name,
    });
    window.scrollTo(0, 0)
  };

  componentDidMount() {
    axios.get("http://localhost:8080/class").then((res) => {
      this.setState({
        classList: res.data,
      });
    });
  }

  componentDidUpdate() {
    if (this.state.clickLocation !== this.state.defaultLocation) {
      console.log(this.state.clickLocation);
      console.log(this.state.classList);
      this.setState({
        filteredLocation: this.state.classList.filter(
          (person) => person.location === this.state.clickLocation
        ),
        defaultLocation: this.state.clickLocation,
      });
    }
  }

  render() {
    console.log(this.state.filteredLocation);
    return (
      <div className="container">
        <main className="map">
          <div className="map__image"></div>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__timmins"
            name="Timmins"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__vancouver"
            name="Vancouver"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__toronto"
            name="Toronto"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__bc"
            name="British Columbia"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__montreal"
            name="Montreal"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__ottawa"
            name="Ottawa"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__waterloo"
            name="Waterloo"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__oregon"
            name="Oregon"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__texas"
            name="Texas"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__california"
            name="California"
          ></button>
          <button
            onClick={(e) => {
              this.locationClick(e);
              this.handleClick();
            }}
            className="map__new-york"
            name="New York"
          ></button>
        </main>
        <Popup
          btnToggle={this.state.btnToggle}
          handleClick={this.handleClick}
          classList={this.state.classList}
          clickLocation={this.state.clickLocation}
          filteredLocation={this.state.filteredLocation}
        />
      </div>
    );
  }
}

export default Map;
