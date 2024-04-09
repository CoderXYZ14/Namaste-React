import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "https://avatars.githubusercontent.com/u/150971985?v=4",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Coderxyz14");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    //const { name } = this.props;
    // const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default UserClass;
