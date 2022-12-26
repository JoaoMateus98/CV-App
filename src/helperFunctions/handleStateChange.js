export default function handleStateChange(context, inputType, value) {
  switch (inputType) {
    // general information
    case "name":
      context.setState({ name: value });
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
    default:
      console.log("Invalid input type!!!");
      break;
  }
}
