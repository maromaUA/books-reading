const LibraryHint = ({ handleOk }) => {
  return (
    <div>
      <ul>
        <li>Create your own library</li>
        <li>Create your first training</li>
      </ul>
      <button type="button" onClick={handleOk}>
        OK
      </button>
    </div>
  );
};

export default LibraryHint;
