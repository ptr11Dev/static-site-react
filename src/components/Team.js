import React, { Component } from "react";

class Team extends Component {
  state = { users: [], isLoaded: false };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=4&inc=name,picture")
      .then(res => res.json())
      .then(res => {
        this.setState({ users: res.results, isLoaded: true });
      })
      .catch(error =>
        console.log(
          "Unable to read members' faces - please contact me at piotrkaczmarek.dev@gmail.com",
          error
        )
      );
  }

  render() {
    return (
      <section className="team">
        <h2 className="team__title">Team Members</h2>
        <p className="team__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas
          iste vero. Quod hic minima ut eligendi autem repellendus alias.
        </p>

        {!this.state.isLoaded ? (
          "Loading"
        ) : (
          <article className="members">
            <div className="member">
              <img
                src={this.state.users[0].picture.large}
                alt=""
                className="member__img"
              />
              <p className="member__name">
                {this.state.users[0].name.first +
                  " " +
                  this.state.users[0].name.last}
              </p>
              <p className="member__position">3D Model Designer</p>
            </div>
            <div className="member">
              <img
                src={this.state.users[1].picture.medium}
                alt=""
                className="member__img"
              />
              <p className="member__name">
                {this.state.users[1].name.first +
                  " " +
                  this.state.users[1].name.last}
              </p>
              <p className="member__position">Lead Developer</p>
            </div>
            <div className="member">
              <img
                src={this.state.users[2].picture.medium}
                alt=""
                className="member__img"
              />
              <p className="member__name">
                {this.state.users[2].name.first +
                  " " +
                  this.state.users[2].name.last}
              </p>
              <p className="member__position">
                Customer Service Representative
              </p>
            </div>
            <div className="member">
              <img
                src={this.state.users[3].picture.medium}
                alt=""
                className="member__img"
              />
              <p className="member__name">
                {this.state.users[3].name.first +
                  " " +
                  this.state.users[3].name.last}
              </p>
              <p className="member__position">Account Manager</p>
            </div>
          </article>
        )}
      </section>
    );
  }
}

export default Team;
