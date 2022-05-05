import React, { useState, useEffect } from 'react';
import TopRanking from './c-cpns/top-ranking';
import RankingHeader from './c-cpns/ranking-header';
import RankingList from './c-cpns/ranking-list';
import { RankingWrapper, RankingLeft, RankingRight } from './style';
import { getTopList, getRankingList } from '@/apis/ranking';

function Ranking() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [playList, setPlayList] = useState([]);
  const _getRankingList = async (id) => {
    const res = await getRankingList(id);
    setPlayList(res.playlist);
  };

  const [topList, setTopList] = useState([]);
  const _getTopList = async () => {
    const res = await getTopList();
    const list = res.list;
    setTopList(list);
    _getRankingList(list[currentIndex].id);
  };

  const handleItemClick = async (index) => {
    const id = topList[index].id;
    setCurrentIndex(index);
    _getRankingList(id);
  };

  useEffect(() => {
    _getTopList();
    // eslint-disable-next-line
  }, []);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking
          currentIndex={currentIndex}
          topList={topList}
          handleItemClick={(index) => handleItemClick(index)}
        />
      </RankingLeft>
      <RankingRight>
        <RankingHeader playList={playList} />
        <RankingList playList={playList} />
      </RankingRight>
    </RankingWrapper>
  );
}

export default Ranking;
