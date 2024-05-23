import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

export default function Testmonials() {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{

        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <section className="my-10" >
        <SectionTitle
            subHeading="what our client say"
            heading="Testmonils"
        />

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map((review,idx)=> <SwiperSlide key={idx}  >

                <div className="m-24 text-center flex items-center flex-col justify-center" >

                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
                    <p className="py-8" >{review.details}</p>
                    <h3 className="text-2xl text-orange-400" >{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
     
      </Swiper>
    </section>
  )
}
