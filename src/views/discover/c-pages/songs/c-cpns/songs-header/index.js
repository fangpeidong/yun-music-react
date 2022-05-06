import React, { useState } from 'react';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style';
import SongsCategory from '../songs-category';

function SongsHeader(props) {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <HeaderWrapper>
      <HeaderLeft>
        {/* <span className="title">{currentCategory}</span> */}
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <SongsCategory cats={props.cats} /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default SongsHeader;
