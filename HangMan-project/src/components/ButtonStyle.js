function buttonStyle(styleType) {
  const primary =
    "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900";
  const secondary =
    "bg-gray-500 border border-blue-700 hover:bg-gray-700 hover:border-blue-900";
  const warning =
    "bg-yellow-500 border border-blue-700 hover:bg-yellow-700 hover:border-blue-900";
  const error =
    "bg-red-500 border border-blue-700 hover:bg-red-700 hover:border-blue-900";

  if (styleType == "primary") {
    return primary;
  } else if (styleType == "secondary") {
    return secondary;
  } else if (styleType == "warning") {
    return warning;
  } else if (styleType == "error") {
    return error;
  }
}

export default buttonStyle;
