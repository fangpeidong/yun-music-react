import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { getTopBanners } from '@/apis/recommend';

function TopBanner() {
  const [topBanners, setTopBanners] = useState([]);
  const _getTopBanners = async () => {
    const res = await getTopBanners();
    setTopBanners(res.banners);
  };

  const bannerRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  useEffect(() => {
    _getTopBanners();
  }, []);

  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

export default TopBanner;
