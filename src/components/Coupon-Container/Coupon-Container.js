// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import CouponCard from "../Coupon-Card/Coupon-Card";

const Coupons = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CouponCard bg="bg-[#FFCB65]" name="Beef Spaghetti" promo="20% OFF" desc="Buy 1 Choco Oreo and get 20% off for Beef Spaghetti" code="FNPR15RG" exp="May 2023" image="bg-[url(../images/spaghetti.webp)]"/>
        </SwiperSlide>
        <SwiperSlide>
          <CouponCard name="Drum Stick" textColor="text-white" hr="border-white" bg="bg-secondary" promo="10% OFF" desc="Buy 2 Pinky Promise and get 10% off for Drum Stick" code="DNFF31CO" exp="May 2023" image="bg-[url(../images/drum-stick.webp)]" />
        </SwiperSlide>
        <SwiperSlide>
          <CouponCard name="Pinky Promise" bg="bg-[#C59378]" textColor="text-black" promo="Buy 3 Get 1" hr="border-black" desc="Buy 3 pinky promise and get 1 more" image="bg-[url(../images/pinky-promise.webp)]" code="PDIP00ME" exp="May 2023" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default Coupons