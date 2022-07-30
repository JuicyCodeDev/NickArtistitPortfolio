import styles from '../styles/Gallery.module.css'
import useWindowHeight from '../hooks/useWindowHeight'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Mousewheel, Pagination, Navigation } from 'swiper';

const Gallery = ({ paintings }) => {

  // set container height to 100vh + resize automatically
  const height = useWindowHeight();
  const conainerStyle = {
    height: `${height}px`,
  }

  return ( 
    <div style={conainerStyle}>
      <Swiper
        direction={'horizontal'}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
          bulletClass: 'swiper-pagination-bullet'
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination, Navigation]}
        className='mySwiper'
      >
        {
          paintings.map(painting => (
            <SwiperSlide key={painting.sys.id}>
              <div className={styles.painting_wrapper}>
                <img className={styles.painting} src={'http:' + painting.fields.imageFile.fields.file.url} alt='Painting of the conductor Karajan' />
                <div className={styles.paintingInfo}>
                  <span className={styles.paintingName}>{painting.fields.title}&nbsp;</span>{painting.fields.size}&nbsp;{painting.fields.year}
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
   );
  }
 
export default Gallery;
