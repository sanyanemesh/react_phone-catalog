import React, { useEffect, useState } /*{ useState }*/ from 'react';
import Banner from '../banner/Banner';
import { GoodList } from '../goodList/GoodList';
import { IGood, getGoods } from '../../provider/dataFromApi';

 type Props = {
    goods: IGood[];
 };


export const Home: React.FC<Props> = () => {

  const [goods, setGoods] = useState<IGood[]>([]);
  useEffect(() => {
    getGoods()
      .then(data => {
        setGoods(data);
      });
  }, []);

  return (
    <div>
      <Banner />
      <h1 className="block__title"> Hot prices</h1>
      <GoodList goods={goods}/>
    </div>
  )
};


export default Home;

