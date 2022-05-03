import React, { useEffect, useState } from 'react';
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM';
import SongsCover from '@/components/SongsCover';
import { getHotRecommends } from '@/apis/recommend';
import { HotRecommendWrapper } from './style';

function HotRecommend() {
  const [recommends, setRecommends] = useState([]);
  const _getHotRecommends = async () => {
    const res = await getHotRecommends(8);
    setRecommends(res.result);
  };

  useEffect(() => {
    _getHotRecommends();
  }, []);

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {recommends.map((item) => {
          return <SongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
}

export default HotRecommend;
