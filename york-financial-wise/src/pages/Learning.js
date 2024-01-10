import Navbar from '../components/Navbar'
import '../App.css';

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../carousel.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function LearningPage() {
    return (
        <>
            <Navbar />
            <div className='titlepage'>
                <h2>Learning</h2>
                <h3>Watch and learn</h3>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                touchRatio={1}
                edgeSwipeDetection={true}
                edgeSwipeThreshold={20}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                    
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
                allowTouchMove={false}

            >
                <SwiperSlide>
                <div className='video'>
                <script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
                    <iframe title="Learning Video 1" src="https://eclass.h5p.com/content/1292151044103452798/embed" aria-label="test" max-width="630" height="405" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                </div>
                
                </SwiperSlide>
                <SwiperSlide>
                <div className='video'>
                <script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
                    <iframe title="Learning Video 2" src="https://eclass.h5p.com/content/1292151044103452798/embed" aria-label="test" width="630" height="405" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                </div>
                </SwiperSlide>
                
                <SwiperSlide>
                <div className='video'>
                <script src="https://eclass.h5p.com/js/h5p-resizer.js" charset="UTF-8"></script>
                    <iframe title="Learning Video 3" src="https://eclass.h5p.com/content/1292151044103452798/embed" aria-label="test" width="630" height="405" frameborder="0" allowfullscreen="allowfullscreen" allow="autoplay *; geolocation *; microphone *; camera *; midi *; encrypted-media *"></iframe>
                </div>
                </SwiperSlide>
    

            </Swiper>

            <div>
                <button className='btn3'>
                    Hi
                </button>
            </div>

            

        </>
    )
}

