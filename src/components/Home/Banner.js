import Button from 'react-bootstrap/Button';

export default function Banner() {
  return (
    <>
      <div className="banner">
        <div className="container d-flex justify-content-between">
          <div className='banner-card'>
            <h1 className="big-text text-center">LEARN!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident veritatis, adipisci ipsum, repellendus doloribus molestias dicta ea, animi officiis praesentium a!</p>
          </div>
          <div className="banner-card mx-5 px-5">
            <h1 className="big-text text-center">PRACTISE!</h1>
            <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos est exercitationem sequi laborum, aperiam corporis. Debitis repudiandae earum tenetur, eaque vero, odit ipsum dolorum voluptatem ut, corrupti iste enim magnam.</p>
          </div>
          <div className='banner-card'>
            <h1 className="big-text text-center">COMPETE!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita natus nesciunt quo quaerat esse provident inventore temporibus odio cum.</p>
          </div>
        </div>
        <div>
          <Button className='mt-5' variant="dark" size="lg">Get Started</Button>
        </div>
      </div>
    </>
  );
}