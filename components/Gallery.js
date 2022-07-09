import Image from 'next/image'
import styles from '../styles/Gallery.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Mousewheel, Pagination, Navigation } from 'swiper';

const Gallery = () => {

  return ( 
    <>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet'
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
            <div className={styles.paintingContainer}>
              <Image src='/paintings/Karajan.png' alt='Painting of the conductor Karajan' width={727} height={586}/>
              <div className={styles.paintingInfo}><span className={styles.paintingName}>Karajan&nbsp;</span> 190 x 160 cm&nbsp; 2016</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
   );
}
 
export default Gallery;