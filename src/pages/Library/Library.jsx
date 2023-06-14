import { useSelector } from 'react-redux';
import {
  selectAuthName,
  selectGoingtoRead,
  selectCurrentlyReading,
  selectFinishedReading,
  selectAuthIsLoading,
} from '../../redux/auth/authSelectors';
import { logoutUser } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import LibraryHint from '../../components/LibraryHint/LibraryHint';
import { useEffect, useState } from 'react';

const Library = () => {
  const [modal, setModal] = useState(false);

  const goingToRead = useSelector(selectGoingtoRead);
  const currentlyReading = useSelector(selectCurrentlyReading);
  const finishedReading = useSelector(selectFinishedReading);

  const username = useSelector(selectAuthName);
  const isLoading = useSelector(selectAuthIsLoading);

  const dispatch = useDispatch();

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

  //   if (
  //     goingToRead.length === 0 &&
  //     currentlyReading.length === 0 &&
  //     finishedReading.length === 0
  //   ) {
  //     setModal(true);
  //   }

  return (
    <>
      <div>Library</div>
      <p>{username}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      {modal && <LibraryHint handleOk={handleOk} />}
    </>
  );
};

export default Library;
