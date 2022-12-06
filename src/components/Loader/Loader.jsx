import { ThreeDots } from 'react-loader-spinner';

export const LoaderSpiner = () => {
  return (
    <ThreeDots
      height="200"
      width="200"
      radius="9"
      color="#444444"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
