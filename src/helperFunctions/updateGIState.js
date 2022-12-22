export default function updateGIState(context, fieldToUpdate, newValue) {
  const { name, email, phone } = context.state.GI_MetaInfo;

  switch (fieldToUpdate) {
    case "name":
      context.setState({
        GI_MetaInfo: {
          name: newValue,
          email: email,
          phone: phone,
        },
      });
      break;

    case "email":
      context.setState({
        GI_MetaInfo: {
          name: name,
          email: newValue,
          phone: phone,
        },
      });
      break;

    case "phone":
      context.setState({
        GI_MetaInfo: {
          name: name,
          email: email,
          phone: newValue,
        },
      });
      break;

    default:
      console.log("Invalid field to update!!!");
      break;
  }
}
