import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorMsg, AppWrapper } from './FavoritePage.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { LoaderSpiner } from 'components/Loader/Loader';
import { ScrollChevron } from 'components/ScrollChevron/ScrollChevron';
import { toast } from 'react-toastify';
import { ToastContainer, Flip } from 'react-toastify';
import { warmSetting } from 'services/others/toast/notificationSetting';
import { Footer } from 'components/Footer/Footer';
import rest from 'services/rest';
import download from 'operations/download';
import PropTypes from 'prop-types';

function FavoritePage({ addToFovorite, images, setImages }) {
  const { unsplash } = rest;
  const favorite = useSelector(state => state.favorite);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const openModal = useSelector(state => state.modal);
  async function renderFavorite() {
    setIsLoading(true);
    async function fetch(parsedId) {
      const imagesResponse = await unsplash.getById(parsedId);
      const images = await imagesResponse.data;
      return images;
    }
    try {
      const list = await Promise.all(favorite.map(async id => fetch(id)));
      const preparedImgs = list.map(
        ({ id, urls, alt_description, links, user }) => ({
          id,
          urls,
          alt_description,
          links,
          user,
        })
      );
      setImages(prevState => [...preparedImgs]);
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
          addToFovorite={addToFovorite}
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
  addToFovorite: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.object.isRequired,
      links: PropTypes.object.isRequired,
      user: PropTypes.object.isRequired,
    })
  ).isRequired,
  setImages: PropTypes.func.isRequired,
};

export default FavoritePage;
