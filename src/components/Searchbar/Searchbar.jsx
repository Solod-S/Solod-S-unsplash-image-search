import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarHeader,
  SearchBarForm,
  SearchBarButton,
  SearchBarInput,
  SearchBarLogo,
  SearchBarLinkLogo,
} from './Searchbar.styled';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../img/Pixabay-logo.png';

export default function Searchbar({ onImgsSeach }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubeventmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      return;
    }
    onImgsSeach(searchQuery);
    setSearchQuery('');
  };

  const handleNameChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  return (
    <SearchBarHeader>
      <SearchBarLinkLogo
        href="https://pixabay.com/api/docs/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <SearchBarLogo src={logo} />
      </SearchBarLinkLogo>

      <SearchBarForm onSubmit={handleSubeventmit}>
        <SearchBarInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          value={searchQuery}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
        <SearchBarButton type="submit">
          <IoIosSearch size={18} fill="#444444" />
        </SearchBarButton>
      </SearchBarForm>
    </SearchBarHeader>
  );
}

Searchbar.propTypes = {
  onImgsSeach: PropTypes.func.isRequired,
};

//----------------
//State
//----------------
// export default class Searchbar extends React.Component {
//   state = {
//     searchQuery: '',
//   };
//   static propTypes = {
//     onImgsSeach: PropTypes.func.isRequired,
//   };
//   handleSubeventmit = event => {
//     const { onImgsSeach } = this.props;
//     const { searchQuery } = this.state;
//     event.preventDefault();
//     if(searchQuery === "") {
//       return
//     }
//     onImgsSeach(searchQuery);
//     this.setState({ searchQuery: '' });
//   };
//   handleNameChange = event => {
//     this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
//   };
//   render() {
//     const { handleSubeventmit, handleNameChange } = this;
//     const { searchQuery } = this.state;
//     return (
//       <SearchBarHeader>
//         <SearchBarLinkLogo
//           href="https://pixabay.com/api/docs/"
//           target="_blank"
//           rel="noopener noreferrer nofollow"
//         >
//           <SearchBarLogo src={logo} />
//         </SearchBarLinkLogo>

//         <SearchBarForm onSubmit={handleSubeventmit}>
//           <SearchBarInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             name="searchQuery"
//             value={searchQuery}
//             onChange={handleNameChange}
//             placeholder="Search images and photos"
//           />
//           <SearchBarButton type="submit" >
//             <IoIosSearch size={18} fill="#444444" />
//           </SearchBarButton>
//         </SearchBarForm>
//       </SearchBarHeader>
//     );
//   }
// }
