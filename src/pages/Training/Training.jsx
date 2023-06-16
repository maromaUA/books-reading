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

const Training = () => {
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
    </WrapperDivStyled>
  );
};

export default Training;
