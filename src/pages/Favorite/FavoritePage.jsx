import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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

function FavoritePage({
  addToFovorite,
  toggleModal,
  downloadImage,
  downloadImageFromMain,
  setIndxForModal,
  changeIndx,
  indx,
  showModal,
  images,
  setImages,
}) {
  const favorite = useSelector(state => state.favorite.favorite);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function renderFavorite() {
    setIsLoading(true);
    async function fetch(parsedId) {
      const imagesResponse = await getImageById(parsedId);
      const images = await imagesResponse.data;

      return images;
    }

    try {
      const list = await Promise.all(favorite.map(async id => fetch(id)));
      setImages(list);
      setIsLoading(false);
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
      toast.warn('Упс... Попробуйте перезагрузить страницу!', warmSetting);
      setError(error);
    }
  }
  useEffect(() => {
    renderFavorite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorite]);

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
