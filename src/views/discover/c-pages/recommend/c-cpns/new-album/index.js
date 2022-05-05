import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'antd';
import { getNewAlbums } from '@/apis/recommend';
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM';
import AlbumCover from '@/components/AlbumCover';
import { AlbumWrapper } from './style';

function NewAlbum() {
  const pageRef = useRef();
  const [newAlbums, setNewAlbums] = useState([]);
  const _getNewAlbums = async () => {
    const res = await getNewAlbums(10);
    setNewAlbums(res.albums);
  };
  useEffect(() => {
    _getNewAlbums();
  }, []);

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <AlbumCover
                        key={iten.id}
                        info={iten}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
}

export default NewAlbum;
