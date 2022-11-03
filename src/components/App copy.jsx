import React, { useEffect, useState, useRef } from 'react';
import Searchbar from './Searchbar/Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { ErrorMsg, AppWrapper } from './App.styled';
import { GetImages, getRandomImages } from './services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonPanel } from './PaginationControlPanel/PaginationControlPanel';
import { Modal } from './Modal/Modal';
import { LoaderSpiner } from './Loader/Loader';
import { ScrollChevron } from './ScrollChevron/ScrollChevron';
import { toast } from 'react-toastify';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { warmSetting, successSettings } from './services/notificationSetting';
import { Footer } from './Footer/Footer';

function App() {
  const [images, setImages] = useState([]);
  // const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => FirstRender() ?? '');
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [indx, setIndx] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const firstRenderPassed = useRef(false);

  async function FirstRender() {
    async function fetch() {
      setIsLoading(true);

      const imagesResponse = await getRandomImages();
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
      toast.warn('Упс... Попробуйте перезагрузить страницу!', warmSetting);
      setError(error);
    }
  }

  useEffect(() => {
    // console.log(firstRenderPassed.current);
    if (!firstRenderPassed.current) {
      firstRenderPassed.current = true;
      return;
    }
    if (!searchQuery) {
      return;
    }

    async function fetch() {
      setIsLoading(true);
      const imagesResponse = await GetImages(searchQuery, page);
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
          successSettings
        );
      }
    }
    try {
      fetch();
    } catch (error) {
      console.log(error, `Попробуйте перезагрузить страницу`);
      toast.warn('Упс... Попробуйте перезагрузить страницу!', warmSetting);
      setError(error);
    }
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
  return (
    <AppWrapper id="up">
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
          openModal={toggleModal}
          setIndx={setIndxForModal}
          downloadImage={downloadImageFromMain}
        />
      )}
      {isLoading && <LoaderSpiner />}
      {/* {images.length > 11 && currentPage !== 1 &&(
        <ButtonPanel
          onLoadMore={onLoadMore}
          currentPage={page}
          totalPages={totalPages}
        />
      )} */}

      <ButtonPanel
        onLoadMore={onLoadMore}
        currentPage={page}
        images={images}
        searchQuery={searchQuery}
        totalPages={totalPages}
      />
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

export default App;
