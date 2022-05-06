import React, { useEffect, useState } from 'react';
import { SongsWrapper } from './style';
import { getSongCategory } from '@/apis/songs';
import SongsHeader from './c-cpns/songs-header';
import { handleSongsCategory } from '@/utils/handle-data';

function Songs() {
  const [cats, setCats] = useState([]);
  // const [currentCategory, setCurrentCategory] = useState('全部');
  const _getSongCategory = async () => {
    const res = await getSongCategory();
    setCats(handleSongsCategory(res));
  };
  useEffect(() => {
    _getSongCategory();
  }, []);
  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader cats={cats} />
    </SongsWrapper>
  );
}

export default Songs;
