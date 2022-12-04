import Button from 'react-bootstrap/Button';
import { header1, header2, header3, text1, text2, text3 } from '../../data/bannerData';

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container d-flex justify-content-between">
          <div className='banner-card'>
            <h1 className="big-text text-center">
              {header1}
            </h1>
            <p>{text1}</p>
          </div>
          <div className="banner-card mx-5 px-5">
            <h1 className="big-text text-center">
              {header2}
            </h1>
            <p className="text-justify">{text2}</p>
          </div>
          <div className='banner-card'>
            <h1 className="big-text text-center">
              {header3}
            </h1>
            <p>{text3}</p>
          </div>
        </div>
        <div>
          <Button className='mt-5' variant="dark" size="lg">Get Started</Button>
        </div>
      </div>
    </>
  );
}