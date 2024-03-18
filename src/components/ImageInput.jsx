const ImageInput = () => {
  return (
    <form>
      <input type="file" accept="image/*" />
      <button type="submit">Upload</button>
    </form>
  );
};

export default ImageInput;
