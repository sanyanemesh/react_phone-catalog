import React from 'react';
import { useSelector } from 'react-redux';

import { getVisibleGoods } from '../../store';
import { Card } from '../card/Card';

const Phones = () => {
  const goods = useSelector(getVisibleGoods);

  return (
    <>
      <h1>Phones</h1>
      <div className="Card">
        <ul className="Card__list">
          {goods.filter(good => good.type === 'phone').map((good: Good) => <Card good={good} />)}
        </ul>
      </div>
    </>
  );
};

export default Phones;
