import { useEffect } from 'react';
import {
  BooksList,
  ScoreBoardContentDiv,
  ScoreBoardDiv,
  ScoreBoardHeader,
  ScoreDiv,
  ScoreDivLabel,
  ScoreDivNumber,
  SpanHeader,
  SpanLabel,
  SpanNumber,
  WrapperDivStyled,
} from './Training.styled';
import { useDispatch } from 'react-redux';
import { getPlanning } from '../../redux/training/trainingOperations';

const Training = () => {
  const dispatch = useDispatch();

  const addHandler = () => {};

  useEffect(() => {
    dispatch(getPlanning());
  }, [dispatch]);
  return (
    <WrapperDivStyled>
      <ScoreBoardDiv>
        <ScoreBoardHeader>
          <SpanHeader>My goals</SpanHeader>
        </ScoreBoardHeader>
        <ScoreBoardContentDiv>
          <ScoreDiv>
            <ScoreDivNumber>
              <SpanNumber>0</SpanNumber>
            </ScoreDivNumber>
            <ScoreDivLabel>
              <SpanLabel>Amount of books</SpanLabel>
            </ScoreDivLabel>
          </ScoreDiv>
          <ScoreDiv>
            <ScoreDivNumber>
              <SpanNumber>0</SpanNumber>
            </ScoreDivNumber>
            <ScoreDivLabel>
              <SpanLabel>Amount of days</SpanLabel>
            </ScoreDivLabel>
          </ScoreDiv>
        </ScoreBoardContentDiv>
      </ScoreBoardDiv>
      <BooksList></BooksList>
      <button onClick={addHandler}>+</button>
    </WrapperDivStyled>
  );
};

export default Training;
