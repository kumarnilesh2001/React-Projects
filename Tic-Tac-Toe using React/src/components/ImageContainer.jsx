/* eslint-disable react/prop-types */
const ImageContainer = ({ image, ...rest }) => {
  return <img src={image} alt="Image" {...rest} />;
};

export default ImageContainer;
