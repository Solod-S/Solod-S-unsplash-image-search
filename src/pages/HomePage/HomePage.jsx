import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer, Flip } from 'react-toastify';
import PropTypes from 'prop-types';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { PaginationBtns } from 'components/PaginationBtns/PaginationBtns';
import { Modal } from 'components/Modal/Modal';
import { LoaderSpiner } from 'components/Loader/Loader';
import { ScrollChevron } from 'components/ScrollChevron/ScrollChevron';
import { Footer } from 'components/Footer/Footer';

import { addToFavorite, removeFromFavorite } from 'redux/slices/favoriteSlice';

import rest from 'services/rest';
import services from 'services/others';
import download from 'operations/download';
import scroll from 'operations/scroll';

import { ErrorMsg, AppWrapper } from './HomePage.styled';

function HomePage() {
  const { unsplash } = rest;
  const { toastSettings } = services;

  const favorite = useSelector(state => state.favorite);
  const openModal = useSelector(state => state.modal);
  const [searchQuery, setSearchQuery] = useState(() => FirstRender() ?? '');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const firstRenderPassed = useRef(false);
  const dispatch = useDispatch();

  const handleFovorite = id => {
    if (!favorite.includes(id)) {
      dispatch(addToFavorite(id));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };

  async function FirstRender() {
    async function fetch() {
      setIsLoading(true);
      const imagesResponse = await unsplash.getRandom();
      const images = imagesResponse.data;
      const preparedImgs = images.map(
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
    }
    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
      toast.warn(
        'Упс... Попробуйте перезагрузить страницу!',
        toastSettings.warning
      );
      setError(error);
    }
  }

  useEffect(() => {
    if (!firstRenderPassed.current) {
      firstRenderPassed.current = true;
      return;
    }
    if (!searchQuery) {
      return;
    }
    async function fetch() {
      try {
        setIsLoading(true);
        const imagesResponse = await unsplash.getAll(searchQuery, page);
        const images = imagesResponse.data.results;
        const preparedImgs = images.map(
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
        setTotalPages(Math.ceil(imagesResponse.data.total / 40));
        if (page === 1) {
          toast.success(
            `Всего было найдено ${imagesResponse.data.total} картинок.`,
            toastSettings.success
          );
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
      toast.warn(
        'Упс... Попробуйте перезагрузить страницу!',
        toastSettings.warning
      );
      setError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, page]);

  const handleFormSubmit = newSearchQuery => {
    if (newSearchQuery === searchQuery) {
      return;
    }
    if (newSearchQuery !== searchQuery) {
      setImages([]);
    }
    setSearchQuery(newSearchQuery);
    setPage(1);
  };
  const onLoadMore = async value => {
    setPage(prevState => prevState + value);
    scroll.goUp();
  };

  return (
    <AppWrapper>
      <Searchbar onImgsSeach={handleFormSubmit} />
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
      {images.length && (
        <PaginationBtns
          onLoadMore={onLoadMore}
          currentPage={page}
          images={images}
          searchQuery={searchQuery}
          totalPages={totalPages}
        />
      )}

      {images.length > 11 && <ScrollChevron />}
      {openModal && <Modal data={images} download={download} />}
      <Footer>Copyright © Все права защищены.</Footer>
    </AppWrapper>
  );
}

HomePage.propTypes = {
  handleFovorite: PropTypes.func.isRequired,
};

export default HomePage;
