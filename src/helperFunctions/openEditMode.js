// context is need from the using classes state in order to change it

export default function openEditModeFun(context) {
  context.setState({ EditMode: true });
}
