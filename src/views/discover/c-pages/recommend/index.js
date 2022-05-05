import React from 'react';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import Ranking from './c-cpns/ranking';
import UserLogin from './c-cpns/user-login';
import SettleSinger from './c-cpns/settle-singer';
import HotRadio from './c-cpns/hot-radio';
import { Content, RecommendLeft, RecommendRight } from './style';

function Recommend() {
  return (
    <div>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotRadio />
        </RecommendRight>
      </Content>
    </div>
  );
}

export default Recommend;
