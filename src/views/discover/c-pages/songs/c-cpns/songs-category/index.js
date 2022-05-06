import React from 'react';
import { CategoryWrapper } from './style';

function SongsCategory(props) {
  const cats = props.cats;

  function selectCategory(name) {
    console.log(name);
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={() => selectCategory('全部')}>
          全部风格
        </span>
      </div>
      <div className="category">
        {cats.map((item, index) => {
          return (
            <dl key={item.name} className={'item' + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((sItem) => {
                  return (
                    <div className="item" key={sItem.name}>
                      <span
                        className="link"
                        onClick={() => selectCategory(sItem.name)}
                      >
                        {sItem.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </CategoryWrapper>
  );
}

export default SongsCategory;
