import React, { useEffect, useState, useRef } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { ErrorMsg, AppWrapper } from './FavoritePage.styled';
import { getImageById } from 'components/services/api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { LoaderSpiner } from 'components/Loader/Loader';
import { ScrollChevron } from 'components/ScrollChevron/ScrollChevron';
import { toast } from 'react-toastify';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warmSetting } from 'components/services/notificationSetting';
import { Footer } from 'components/Footer/Footer';

function FavoritePage() {
  const [images, setImages] = useState([]);
  const [localStrg, setLocalStrg] = useState(
    JSON.parse(localStorage.getItem('myFavorite'))
  );
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [indx, setIndx] = useState(null);

  async function renderFavorite() {
    async function fetch(parsedId) {
      const imagesResponse = await getImageById(parsedId);
      const images = await imagesResponse.data;

      setIsLoading(false);
      return images;
    }

    try {
      const list = await Promise.all(localStrg.map(async id => fetch(id)));

      setImages(list);
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
      toast.warn('Упс... Попробуйте перезагрузить страницу!', warmSetting);
      setError(error);
    }
  }
  useEffect(() => {
    renderFavorite();
  }, [localStrg]);

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
      parsedStorage.push(id);
      localStorage.setItem('myFavorite', JSON.stringify(parsedStorage));
      setLocalStrg(JSON.parse(localStorage.getItem('myFavorite')));
    } else {
      const filter = parsedStorage.filter(value => value !== id);

      localStorage.setItem('myFavorite', JSON.stringify(filter));
      setLocalStrg(JSON.parse(localStorage.getItem('myFavorite')));
    }
  };
  return (
    <AppWrapper>
      <ToastContainer
        transition={Flip}
        theme="dark"
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
      {error && (
        <ErrorMsg>Something wrong.. Press F5 and try again. :( </ErrorMsg>
      )}
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={toggleModal}
          setIndx={setIndxForModal}
          downloadImage={downloadImageFromMain}
          addToFovorite={addToFovorite}
        />
      )}
      {isLoading && <LoaderSpiner />}
      {images.length > 11 && <ScrollChevron />}
      {showModal && (
        <Modal
          whenClose={toggleModal}
          data={images}
          indx={indx}
          changeIndx={changeIndx}
          downloadImage={downloadImage}
        />
      )}
      <Footer>Copyright © Все права защищены.</Footer>
    </AppWrapper>
  );
}

export default FavoritePage;
