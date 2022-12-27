export default function handleStateChange(context, inputType, value) {
  switch (inputType) {
    // general information
    case "firstName":
      context.setState({ firstName: value });
      break;
    case "lastName":
      context.setState({ lastName: value });
      break;
    case "email":
      context.setState({ email: value });
      break;
    case "phone":
      context.setState({ phone: value });
      break;
    // experience
    case "company":
      context.setState({ company: value });
      break;
    case "position":
      context.setState({ position: value });
      break;
    case "description":
      context.setState({ description: value });
      break;
    // education
    case "school":
      context.setState({ school: value });
      break;
    case "major":
      context.setState({ major: value });
      break;
    default:
      console.log("Invalid input type!!!");
      break;
  }
}
