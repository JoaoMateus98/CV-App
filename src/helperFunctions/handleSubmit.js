// close edit window
// call classes custom update UI function

export default function handleSubmitFunc(context, updateStateFunc) {
  context.setState({ EditMode: false });
  updateStateFunc();
}
