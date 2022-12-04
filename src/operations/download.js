const download = async (data, indx, action) => {
  switch (action) {
    case 'main':
      try {
        const { id } = data;
        const response = await fetch(data.urls.full);
        const blob = await response.blob();
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.style = 'display: none';
        document.body.appendChild(a);
        a.href = url;
        a.download = id;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        alert('Something Went Wrong... Unable to Download Image');
        console.log(error);
      }
      break;
    case 'inner':
      try {
        const { id } = data[indx];
        const response = await fetch(data[indx].urls.full);
        const blob = await response.blob();
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.style = 'display: none';
        document.body.appendChild(a);
        a.href = url;
        a.download = id;
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        alert('Something Went Wrong... Unable to Download Image');
        console.log(error);
      }
      break;
    default:
      break;
  }
};

export default download;
