import React from 'react';
import { getSizeImage, formatMinuteSecond } from '@/utils/format-utils.js';

import ThemeHeaderSong from '@/components/ThemeHeaderSong';
import { RankingListWrapper } from './style';

function RankingList(props) {
  const playList = props.playList;
  const tracks = playList.tracks || [];
  return (
    <RankingListWrapper>
      <ThemeHeaderSong playList={playList} />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item, index) => {
              return (
                <tr className="" key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span className="play sprite_table"></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
}

export default RankingList;
