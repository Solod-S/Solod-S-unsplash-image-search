import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from 'pages/HomePage/HomePage';
import FavoritePage from 'pages/Favorite/FavoritePage';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
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
    if (!localStorage.getItem('myFavorite')) {
      const LOCAL_STORAGE_DATA = [];
      localStorage.setItem('myFavorite', JSON.stringify(LOCAL_STORAGE_DATA));
    }
    const savedIds = localStorage.getItem('myFavorite');
    const parsedStorage = JSON.parse(savedIds);

    if (!savedIds.includes(id)) {
      console.log(`!`, savedIds);
      parsedStorage.push(id);
      localStorage.setItem('myFavorite', JSON.stringify(parsedStorage));
    } else {
      const filter = parsedStorage.filter(value => value !== id);

      localStorage.setItem('myFavorite', JSON.stringify(filter));
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
            />
          }
        />
        <Route path="favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
