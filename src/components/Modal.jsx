const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <p>Modal</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Modal;
