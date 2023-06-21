import { useEffect, useState } from 'react';
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
  ModalButton,
  ModalHeader,
  ModalHeaderText,
} from './Training.styled';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoingtoRead } from '../../redux/auth/authSelectors';
import { getPlanning } from '../../redux/training/trainingOperations';
import {
  Modal,
  Box,
  Typography,
  Fab,
  MenuItem,
  Select,
  OutlinedInput,
} from '@mui/material';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddIcon from '@mui/icons-material/Add';

const Training = () => {
  const [open, setOpen] = useState(false);
  const [bookTitle, setBookTitle] = useState([]);
  const books = useSelector(selectGoingtoRead);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setBookTitle(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanning());
  }, [dispatch]);

  const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center',
    gap: '15px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    bgcolor: '#F6F7FB',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalHeader>
            <ModalHeaderText>My training</ModalHeaderText>
          </ModalHeader>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker defaultValue={dayjs.locale('ua')} />
            <MobileDatePicker defaultValue={dayjs.locale('ua')} />
          </LocalizationProvider>
          <Select
            multiple
            displayEmpty
            value={bookTitle}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={selected => {
              if (selected.length === 0) {
                return <em>Choose books from the library</em>;
              }

              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {/* <MenuItem disabled value="">
              <em>Choose books from the library</em>
            </MenuItem> */}
            {books &&
              books
                .map(book => book.title)
                .map(title => (
                  <MenuItem
                    key={title}
                    value={title}
                    //  style={getStyles(name, personName, theme)}
                  >
                    {title}
                  </MenuItem>
                ))}
          </Select>
          <ModalButton>Add</ModalButton>
        </Box>
      </Modal>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </WrapperDivStyled>
  );
};

export default Training;
