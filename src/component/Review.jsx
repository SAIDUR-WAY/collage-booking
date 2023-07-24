import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const Review = () => {

    const [data, setData] = useState();
    // const [reviews] = data;
    console.log(data)
    useEffect(()=>{
        fetch('https://collage-booking-server-sigma.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


    const textData = [
        'Review 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Review 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Review 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        // Add more review texts here
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
    return (
        <>
             <section className="mt-10 mb-10 pt-10 pb-10  border-t-4 rounded-3xl border-[#adb1ab] bg-[#E9F2E7]">
      <h2 className='text-3xl text-center pb-10 '>Student Reviews</h2>
      <Slider {...settings}>
        {data?.map(value => 
          <div key={value._id}
          className='w-1/3 mx-auto text-center'
          >
            <h3>{value.reviews[0].student_name}</h3>
            <p>{value.reviews[0].feedback}</p>
            <p>Rating:  {value.reviews[0].studentRating}</p>
            
          </div>
        )}
      </Slider>
    </section>
        </>
    );
};

export default Review;