import { useState } from "react";

const ImageInput = () => {
  const [imgSource, setImgSource] = useState("");

  const handleImageUpload = (e) => {
    e.preventDefault();
    const fileInput = e.target[0];
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("imageUpload", file);
    formData.append("id", Date.now());
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    const reader = new FileReader();

    reader.onload = function (event) {
      const source = event.target.result;
      setImgSource(source);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleImageUpload}>
      <input type="file" accept="image/*" />
      <img src={imgSource} alt="" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageInput;
