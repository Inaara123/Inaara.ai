import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    image: '/path/to/image1.jpg',
    review: 'This is an amazing service! Highly recommended.',
    name: 'John Doe',
    title: 'Founder of Company1'
  },
  {
    image: '/path/to/image2.jpg',
    review: 'Fantastic experience, would definitely use again.',
    name: 'Jane Smith',
    title: 'CEO of Company2'
  },
  {
    image: '/path/to/image3.jpg',
    review: 'Very professional and caring team.',
    name: 'Alice Johnson',
    title: 'Manager at Company3'
  },
  {
    image: '/path/to/image4.jpg',
    review: 'Absolutely wonderful!',
    name: 'Michael Brown',
    title: 'CTO of Company4'
  },
  {
    image: '/path/to/image5.jpg',
    review: 'Top-notch service and support.',
    name: 'Emily Davis',
    title: 'Director at Company5'
  }
];

const TestimonialsCarousel = () => {
  const sliderRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", color: "", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToScroll: 1,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1.5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-6xl font-extrabold mb-8 author-bold">Client Diary</h2>
        <p className='absolute right-0 bottom-4 pr-28 text-lg author-regular'>Slide to explore...</p>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="px-2 h-[60vh]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#e8eef0] text-black p-6 rounded-3xl shadow-md h-full flex flex-col justify-between border-2 border-[#c2c8d3] cursor-grab active:cursor-grabbing active:scale-90 transition-transform duration-500">
                <p className="text-4xl font-bold mb-4">{testimonial.review}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="text-2xl font-semibold">{testimonial.name}</p>
                    <p className="text-md text-slate-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
