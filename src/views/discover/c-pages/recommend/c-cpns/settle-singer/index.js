import React, { useEffect, useState } from 'react';
import ThemeHeaderSmall from '@/components/ThemeHeaderSmall';
import { SetterSongerWrapper } from './style';
import { getArtistList } from '@/apis/recommend';
import { getSizeImage } from '@/utils/format-utils';

function SettleSinger() {
  const [settleSings, setSettleSings] = useState([]);
  async function _getArtistList() {
    const res = await getArtistList(5, 5001);
    setSettleSings(res.artists);
  }

  useEffect(() => {
    _getArtistList();
  }, []);
  return (
    <SetterSongerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSings.map((item, index) => {
          return (
            <a href="/singer" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="title">{item.alias.join('') || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SetterSongerWrapper>
  );
}

export default SettleSinger;
