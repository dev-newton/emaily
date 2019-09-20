export default function(value, name) {
  if (value) {
    // if (!value) {
    //   return `${name} must have at least ONE character`;
    // }
    if (value.length < 5) {
      return `${name} must have at least 5 characters`;
    }
    if (!value.match(/[0-9]/g)) {
      return `${name} must contain at least ONE number`;
    }
    if (!value.match(/[A-Z]/g)) {
      return `${name} must contain at least ONE upper case letter`;
    }
    return;
  }
  return `${name} must have at least ONE character`;
}
