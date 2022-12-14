import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer, Flip } from 'react-toastify';
import PropTypes from 'prop-types';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { LoaderSpiner } from 'components/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import { ScrollChevron } from 'components/ScrollChevron/ScrollChevron';

import { addToFavorite, removeFromFavorite } from 'redux/slices/favoriteSlice';

import rest from 'services/rest';
import { warmSetting } from 'services/others/toast/notificationSetting';
import download from 'operations/download';

import { ErrorMsg, AppWrapper } from './FavoritePage.styled';

function FavoritePage() {
  const { unsplash } = rest;

  const favorite = useSelector(state => state.favorite);
  const openModal = useSelector(state => state.modal);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFovorite = id => {
    if (!favorite.includes(id)) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };

  async function renderFavorite() {
    setIsLoading(true);
    async function fetch(parsedId) {
      const imagesResponse = await unsplash.getById(parsedId);
      const images = await imagesResponse.data;
      return images;
    }
    try {
      const list = await Promise.all(favorite.map(async id => fetch(id)));
      const preparedImgs = await list.map(
        ({ id, urls, alt_description, links, user }) => ({
          id,
          urls,
          alt_description,
          links,
          user,
        })
      );
      await setImages(preparedImgs);
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
          download={download}
          handleFovorite={handleFovorite}
        />
      )}
      {isLoading && <LoaderSpiner />}
      {images.length > 11 && <ScrollChevron />}
      {openModal && <Modal data={images} download={download} />}

      <Footer>Copyright © Все права защищены.</Footer>
    </AppWrapper>
  );
}

FavoritePage.propTypes = {
  handleFovorite: PropTypes.func.isRequired,
};

export default FavoritePage;
