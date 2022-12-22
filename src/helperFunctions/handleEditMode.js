// context is need from the using classes state in order to change it

export default function handleEditModeFun(context, switchMode) {
  switchMode
    ? context.setState({ editMode: true })
    : context.setState({ editMode: false });
}
