import { Route, Routes, Navigate } from 'react-router-dom';
import {
  addToFavorite,
  removeFromFavorite,
} from 'components/redux/myFavoriteSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import FavoritePage from 'pages/Favorite/FavoritePage';

export const App = () => {
  const favorite = useSelector(state => state.favorite);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [indx, setIndx] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const setIndxForModal = imageLink => {
    setIndx(imageLink);
    toggleModal();
  };
  const changeIndx = value => {
    setIndx(prevState => prevState + value);
  };
  const downloadImageFromMain = async ({ data }) => {
    try {
      const response = await fetch(data.urls.full);

      const blob = await response.blob();

      let url = window.URL.createObjectURL(blob);

      let a = document.createElement('a');
      a.style = 'display: none';
      document.body.appendChild(a);
      a.href = url;
      a.download = data.id;
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Something Went Wrong... Unable to Download Image');
      console.log(error);
    }
  };
  const downloadImage = async ({ data, indx }) => {
    try {
      const response = await fetch(data[indx].urls.full);

      const blob = await response.blob();

      let url = window.URL.createObjectURL(blob);

      let a = document.createElement('a');
      a.style = 'display: none';
      document.body.appendChild(a);
      a.href = url;
      a.download = data.id;
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Something Went Wrong... Unable to Download Image');
      console.log(error);
    }
  };
  const addToFovorite = id => {
    if (!favorite.includes(id)) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };
  return (
    <Routes>
      <Route end path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <HomePage
              toggleModal={toggleModal}
              setIndxForModal={setIndxForModal}
              changeIndx={changeIndx}
              downloadImageFromMain={downloadImageFromMain}
              downloadImage={downloadImage}
              addToFovorite={addToFovorite}
              indx={indx}
              showModal={showModal}
              images={images}
              setImages={setImages}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <FavoritePage
              toggleModal={toggleModal}
              setIndxForModal={setIndxForModal}
              downloadImage={downloadImage}
              downloadImageFromMain={downloadImageFromMain}
              changeIndx={changeIndx}
              indx={indx}
              images={images}
              setImages={setImages}
              addToFovorite={addToFovorite}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
