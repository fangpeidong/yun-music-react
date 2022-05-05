import React from 'react';
import { HeaderWrapper } from './style';

function ThemeHeaderSong(props) {
  const playList = props.playList;

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  );
}

export default ThemeHeaderSong;
