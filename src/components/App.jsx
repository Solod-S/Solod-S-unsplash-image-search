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
  const [searchQuery, setSearchQuery] = useState(() => FirstRender());
  const [page, setPage] = useState(1);

  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [indx, setIndx] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const firstRenderPassed = useRef(false);

  async function FirstRender() {
    // console.log(firstRenderPassed.current);
    async function fetch() {
      setIsLoading(true);

      const imagesResponse = await getRandomImages();
      const images = imagesResponse.data;

      const preparedImgs = images.map(
        ({ id, urls, alt_description, links }) => ({
          id,
          urls,
          alt_description,
          links,
        })
      );

      setImages(prevState => [...preparedImgs]);
      setIsLoading(false);
      setTotalPages(Math.ceil(imagesResponse.data.total / 12));
      // if (page === 1) {
      //   toast.success(
      //     `Всего было найдено ${imagesResponse.data.total} картинок.`,
      //     successSettings
      //   );
      // }
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
        ({ id, urls, alt_description, links }) => ({
          id,
          urls,
          alt_description,
          links,
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
  // const setIndxForModal = imageLink => {
  //   setIndx(imageLink);
  //   toggleModal();
  // };
  const changeIndx = value => {
    setIndx(prevState => prevState + value);
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
      {images.length && (
        <ImageGallery
          images={images}
          openModal={toggleModal}
          setIndx={setIndxForModal}
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
      (
      <ButtonPanel
        onLoadMore={onLoadMore}
        currentPage={page}
        images={images}
        searchQuery={searchQuery}
        totalPages={totalPages}
      />
      ){images.length > 11 && <ScrollChevron />}
      {showModal && (
        <Modal
          whenClose={toggleModal}
          data={images}
          indx={indx}
          changeIndx={changeIndx}
        />
      )}
      <Footer>Copyright © Все права защищены.</Footer>
      {/* так как кнопка пропадает когда доходим до конца, мне нужен якорь для скрола по шеврону)) */}
    </AppWrapper>
  );
}

export default App;

//--------------
//--------------
//State
//--------------
//--------------
// class App extends React.Component {
//   state = {
//     images: [],
//     searchQuery: '',
//     page: 1,
//     isLoading: false,
//     error: false,
//     showModal: false,
//     zoomImage: null,
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const prevSearch = prevState.searchQuery;
//     const currentSearch = this.state.searchQuery;
//     const prevPage = prevState.page;
//     const currentPage = this.state.page;
//     if (prevSearch !== currentSearch || prevPage !== currentPage) {
//       this.setState({ isLoading: true });

//       try {
//         const imagesResponse = await GetImages(currentSearch, this.state.page);
//         const images = imagesResponse.data.hits;
//         const preparedImgs = images.map(
//           ({ id, webformatURL, largeImageURL, tags }) => ({
//             id,
//             webformatURL,
//             largeImageURL,
//             tags,
//           })
//         );

//         this.setState(({ images }) => ({
//           images: [...images, ...preparedImgs],
//         }));
//         this.setState({ isLoading: false });

//         toast.success(
//           `Всего было найдено ${imagesResponse.data.totalHits} картинок.`,
//           {
//             position: 'bottom-right',
//             autoClose: 1000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: false,
//             progress: undefined,
//           }
//         );
//       } catch (error) {
//         console.log(error, `Попробуйте перезагрузить страницу`);
//         toast.warn('Упс... Попробуйте перезагрузить страницу!', {
//           position: 'bottom-right',
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: false,
//           progress: undefined,
//         });
//         this.setState({ error });
//       }
//     }
//   }
//   handleFormSubmit = searchQuery => {
//     if (searchQuery !== this.state.searchQuery) {
//       this.setState({ images: [] });
//     }

//     this.setState({ searchQuery });
//     this.setState({ page: 1 });
//   };
//   onLoadMore = async () => {
//     this.setState(({ page }) => ({ page: page + 1 }));
//   };
//   toggleModal = () => {
//     this.setState(({ showModal }) => ({ showModal: !showModal }));
//   };

//   setZoomImage = imageLink => {
//     this.setState(({ zoomImage }) => ({ zoomImage: imageLink }));
//     this.toggleModal();
//   };
//   changeZoomImage = value => {
//     this.setState(prevState => ({ zoomImage: prevState.zoomImage + value }));
//   };
//   render() {
//     const { images, showModal, zoomImage, isLoading } = this.state;

//     return (
//       <div id="up">
//         <Searchbar onImgsSeach={this.handleFormSubmit} />
//         <ToastContainer
//           transition={Flip}
//           theme="dark"
//           position="bottom-right"
//           autoClose={1000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable={false}
//           pauseOnHover
//         />
//         {images.length && (
//           <ImageGallery
//             images={images}
//             openModal={this.toggleModal}
//             setZoomImage={this.setZoomImage}
//           />
//         )}
//         {isLoading && <LoaderSpiner />}
//         {images.length > 11 && <Button onLoadMore={this.onLoadMore} />}
//         {images.length > 11 && <ScrollChevron />}
//         {showModal && (
//           <Modal
//             whenClose={this.toggleModal}
//             data={this.state.images}
//             indx={zoomImage}
//             changeZoomImage={this.changeZoomImage}
//           />
//         )}
//       </div>
//     );
//   }
// }
