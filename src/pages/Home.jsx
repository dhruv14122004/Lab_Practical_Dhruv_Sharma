import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='fixed px-10 py-10 justify-between flex top-0 left-0'>
        <header>
          <a href="/" className='m-5'>Home</a>
          <a href="/Login" className='m-5'>Login</a>
          <a href="/Signup" className='m-5'>SignUp</a>
        </header>
      </div>
      <div className='text-center py-30'>
        <h2>Welcome to the Home Page</h2>
        <p>This is a protected page accessible after login.</p>
      </div>
      <div className='carousel-container'>
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="image1.jpg" alt="Image 1" />
            <p className="legend">Image 1</p>
          </div>
          <div>
            <img src="image2.jpg" alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src="image3.jpg" alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
          <div>
            <img src="image4.jpg" alt="Image 4" />
            <p className="legend">Image 4</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;