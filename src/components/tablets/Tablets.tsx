import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleGoods } from '../../store';
import { Card } from '../card/Card';

const Tablets = () => {
  const goods = useSelector(getVisibleGoods);

  return (
    <>
      <h1>Tablets</h1>
      <div className="Card">
        <ul className="Card__list">
          {goods.filter(good => good.type === 'tablet').map(good => <Card good={good} />)}
        </ul>
      </div>
    </>
  );
};

export default Tablets;
