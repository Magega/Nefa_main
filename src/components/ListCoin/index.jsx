import React from 'react';
import PropTypes from 'prop-types';

import emoji from 'react-easy-emoji';
import { BsChevronRight } from 'react-icons/bs';

import CoinRow from './CoinRow';

export default function ListCoin({ title, data, number }) {
  return (
    <>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-lg">{emoji(title, { props: { className: 'inline-block mr-4 text-normal' } })}</span>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <span className='text-gray'>Name</span>
          <span className='text-gray'>Price</span>
          <span className='text-gray'>Chart</span>
        </div>
        {data.map((item, i) =>
          <CoinRow key={i} item={item} number={number}/>
        )}
      </div>
    </>
  );
}

ListCoin.propTypes = {
  title: PropTypes.string,
  more: PropTypes.string,
  data: PropTypes.array.isRequired
};
