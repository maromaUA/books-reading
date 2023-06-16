import { useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import {
  selectGoingtoRead,
  selectCurrentlyReading,
  selectFinishedReading,
} from '../../redux/auth/authSelectors';
import { addNewBook } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import LibraryHint from '../../components/LibraryHint/LibraryHint';
import { useEffect, useState } from 'react';
import GoingReadingNowElement from '../../components/GoingReadingNowElement/GoingReadingNowElement';
import {
  ButtonStyled,
  FieldStyled,
  FieldWrapper,
  FormStyled,
  LabelStyled,
  MainDivStyled,
  UlStyled,
} from './Library.styled';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [modal, setModal] = useState(false);
  const goingToRead = useSelector(selectGoingtoRead);
  const currentlyReading = useSelector(selectCurrentlyReading);
  const finishedReading = useSelector(selectFinishedReading);

  let goingToReadList = [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <MainDivStyled>
      {modal ? (
        <LibraryHint handleOk={handleOk} />
      ) : (
        <Formik>
          <FormStyled onSubmit={formik.handleSubmit}>
            <FieldWrapper>
              <LabelStyled htmlFor="title">Book title</LabelStyled>
              <FieldStyled
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="author">Author</LabelStyled>
              <FieldStyled
                name="author"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.author}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="publishYear">Publication date</LabelStyled>
              <FieldStyled
                name="publishYear"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.publishYear}
              />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="pagesTotal">Amount of pages</LabelStyled>
              <FieldStyled
                name="pagesTotal"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.pagesTotal}
              />
            </FieldWrapper>
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
    </MainDivStyled>
  );
};

export default Library;
