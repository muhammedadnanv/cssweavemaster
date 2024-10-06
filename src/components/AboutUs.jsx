import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://i.postimg.cc/wBxJsq1n/image.png" alt="Fathima Shamsudheen" className="w-full max-w-md mx-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-bold mb-4">Meet the Artist</h3>
            <h4 className="text-xl font-semibold mb-2">Fathima Shamsudheen - Owner, Founder & Lead Artist</h4>
            <p className="text-gray-600 mb-4">
            At Henna by Fathima, we believe that just as everyone deserves a diamond, henna is an essential part of joy and celebration. Our passion lies in adorning hands with rich, deep red designs, symbolizing companionship, new beginnings, and the simple pleasure of henna art.


            </p>
            <p className="text-gray-600">
             We are dedicated to providing a personalized experience tailored to each of our clients. From high-quality products and exceptional services to hands-on workshops, Henna by Fathima adds a touch of beauty and sweetness to every occasion, ensuring that your special moments are truly unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
