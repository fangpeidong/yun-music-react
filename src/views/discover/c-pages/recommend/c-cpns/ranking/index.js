import React, { useEffect, useState } from 'react';
import { getTopList } from '@/apis/recommend';
import ThemeHeaderRCM from '@/components/ThemeHeaderRCM';
import TopRanking from '@/components/TopRanking';
import { RankingWrapper } from './style';

function Ranking() {
  const [upRanking, setUpRanking] = useState({});
  const [newRanking, setNewRanking] = useState({});
  const [originRanking, setOriginRanking] = useState({});

  const _getRanking = async (idx) => {
    const res = await getTopList(idx);
    const data = res.playlist;
    switch (idx) {
      case 0:
        setUpRanking(data);
        break;
      case 2:
        setNewRanking(data);
        break;
      case 3:
        setOriginRanking(data);
        break;
      default:
    }
  };

  useEffect(() => {
    _getRanking(0);
    _getRanking(2);
    _getRanking(3);
  }, []);

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
}

export default Ranking;
