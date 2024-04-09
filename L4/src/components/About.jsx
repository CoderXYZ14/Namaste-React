import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Shahwaiz Islam</h2>
      {/* <User name={"Shahwaiz"} /> */}
      <UserClass name={"Shahwaiz"} />
    </div>
  );
};

export default About;
