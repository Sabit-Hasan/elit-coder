import Button from 'react-bootstrap/Button';
import { header1, header2, header3, text1, text2, text3 } from '../../data/bannerData';

const BannerCard = ({ header, text }) => {
  return (
    <>
      <div>
        <h1 className="big-text text-center">
          {header}
        </h1>
        <p className='text-justify'>
          {text}
        </p>
      </div>
    </>
  );
}

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container banner-body">
          <BannerCard header={header1} text={text1} />
          <BannerCard header={header2} text={text2} />
          <BannerCard header={header3} text={text3} />
        </div>
        <div>
          <Button className='mt-5' variant="dark" size="lg">Get Started</Button>
        </div>
      </div>
    </>
  );
} 