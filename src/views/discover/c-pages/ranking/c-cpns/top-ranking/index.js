import React from 'react';
import classNames from 'classnames';
import { TopRankingWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';

function TopRanking(props) {
  const { currentIndex, topList, handleItemClick } = props;
  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = (
            <div className="header">
              {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
            </div>
          );
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={() => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
}

export default TopRanking;
