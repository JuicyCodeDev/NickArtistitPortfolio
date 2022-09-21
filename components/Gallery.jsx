import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, Pagination, Navigation } from 'swiper';
import useWindowHeight from '../hooks/useWindowHeight';
import styles from '../styles/Gallery.module.css';

const Gallery = ({ paintings }) => {
  // set container height to 100vh + resize automatically
  const height = useWindowHeight();
  const mainContainer = {
    height: `${height}px`,
  };

  return (
    <div style={mainContainer}>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop
        pagination={{
          dynamicBullets: true,
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet',
        }}
        mousewheel
        modules={[Mousewheel, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          paintings.map((painting) => (
            <SwiperSlide key={painting.sys.id}>
              <div className={styles.painting_wrapper}>
                <img
                  className={styles.painting}
                  src={`https:${painting.fields.imageFile.fields.file.url}`}
                  alt={`A painting by Nikita Shomerus with the title ${painting.fields.title}`}
                />
                <div className={styles.paintingInfo}>
                  <span className={styles.paintingName}>
                    {painting.fields.title}
                    &nbsp;
                  </span>
                  {painting.fields.size}
                  &nbsp;
                  {painting.fields.year}
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Gallery;
