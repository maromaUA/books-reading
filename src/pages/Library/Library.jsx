import { useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import {
  selectAuthName,
  selectGoingtoRead,
  selectCurrentlyReading,
  selectFinishedReading,
} from '../../redux/auth/authSelectors';
import { addNewBook, logoutUser } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import LibraryHint from '../../components/LibraryHint/LibraryHint';
import { useEffect, useState } from 'react';
import GoingReadingNowElement from '../GoingReadingNowElement/GoingReadingNowElement';
import {
  ButtonStyled,
  FieldStyled,
  FormStyled,
  UlStyled,
} from './Library.styled';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [modal, setModal] = useState(false);

  const goingToRead = useSelector(selectGoingtoRead);
  const currentlyReading = useSelector(selectCurrentlyReading);
  const finishedReading = useSelector(selectFinishedReading);

  let goingToReadList = [];

  const username = useSelector(selectAuthName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  const handleOk = () => {
    setModal(false);
  };

  useEffect(() => {
    if (goingToRead && currentlyReading && finishedReading) {
      if (
        goingToRead.length === 0 &&
        currentlyReading.length === 0 &&
        finishedReading.length === 0
      ) {
        setModal(true);
        console.log('goingToRead:', goingToRead);
        console.log('currentlyReading:', currentlyReading);
        console.log('finishedReading:', finishedReading);
      }
    }
  }, [goingToRead, currentlyReading, finishedReading]);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      publishYear: '',
      pagesTotal: '',
    },
    onSubmit: values => {
      dispatch(addNewBook(values));
    },
  });

  if (goingToRead && goingToRead.length > 0) {
    goingToReadList = goingToRead.map(book => (
      <GoingReadingNowElement key={book._id} book={book} />
    ));
  }

  return (
    <>
      <div>Library</div>
      <p>{username}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      {modal ? (
        <LibraryHint handleOk={handleOk} />
      ) : (
        <Formik>
          <FormStyled onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Book title</label>
            <FieldStyled
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <label htmlFor="author">Author</label>
            <FieldStyled
              name="author"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.author}
            />
            <label htmlFor="publishYear">Publication date</label>
            <FieldStyled
              name="publishYear"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.publishYear}
            />
            <label htmlFor="pagesTotal">Amount of pages</label>
            <FieldStyled
              name="pagesTotal"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.pagesTotal}
            />
            <ButtonStyled type="submit">Add</ButtonStyled>
          </FormStyled>
        </Formik>
      )}
      {!modal && goingToReadList && (
        <UlStyled>
          <h3>Going to read</h3>
          {goingToReadList}
        </UlStyled>
      )}
      {!modal && (
        <button
          type="button"
          onClick={() => {
            navigate('/training');
          }}
        >
          My Training
        </button>
      )}
    </>
  );
};

export default Library;
