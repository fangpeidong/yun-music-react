import React from 'react';
import ThemeHeaderSmall from '@/components/ThemeHeaderSmall';
import { HotRadioWrapper } from './style';
import { hotRadios } from '@/config';

function HotRadio() {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
}

export default HotRadio;
