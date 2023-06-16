const GoingReadingNowElement = ({ book }) => {
  const { _id, title, author, publishYear, pagesTotal } = book;
  return (
    <ul>
      {' '}
      <h4>{title}</h4>
      <li>
        <span>Author :</span>
        <span>{author}</span>
      </li>
      <li>
        <span>Year :</span>
        <span>{publishYear}</span>
      </li>
      <li>
        <span>Pages :</span>
        <span>{pagesTotal}</span>
      </li>
    </ul>
  );
};

export default GoingReadingNowElement;
