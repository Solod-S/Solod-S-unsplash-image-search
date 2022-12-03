import { useEffect, useState, useRef } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ErrorMsg, AppWrapper } from './HomePage.styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ButtonPanel } from 'components/PaginationControlPanel/PaginationControlPanel';
import { Modal } from 'components/Modal/Modal';
import { LoaderSpiner } from 'components/Loader/Loader';
import { ScrollChevron } from 'components/ScrollChevron/ScrollChevron';
import { toast } from 'react-toastify';
import { ToastContainer, Flip } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Footer } from 'components/Footer/Footer';
import rest from 'services/rest';
import services from 'services/others';

function HomePage({ addToFovorite, images, setImages, download }) {
  const { unsplash } = rest;
  const { toastSettings } = services;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => FirstRender() ?? '');
  const [page, setPage] = useState(1);
  const openModal = useSelector(state => state.modal);
  const [totalPages, setTotalPages] = useState(1);
  const firstRenderPassed = useRef(false);

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
          addToFovorite={addToFovorite}
        />
      )}
      {isLoading && <LoaderSpiner />}
      <ButtonPanel
        onLoadMore={onLoadMore}
        currentPage={page}
        images={images}
        searchQuery={searchQuery}
        totalPages={totalPages}
      />
      {images.length > 11 && <ScrollChevron />}
      {openModal && <Modal data={images} download={download} />}
      <Footer>Copyright © Все права защищены.</Footer>
    </AppWrapper>
  );
}

export default HomePage;
