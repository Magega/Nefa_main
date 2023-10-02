import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CoinAreaChart from '@/components/charts/CoinAreaChart';

export default function CoinRow({ item, number }) {
	const [coinUpTrend, setCoinUpTrend] = useState(
		item.price_change_24h > 0 ? true : false
	);

	return (
		<div className='grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none'>
			<div className='flex items-center'>
				<img
					className='inline h-[1em] mr-2'
					draggable='false'
					src={item.image}
					alt={item.id}
				/>
				<p className='uppercase'>
					{item.symbol.split('-').join(' ')}
				</p>
			</div>
			<div className='flex items-center'>{(item.current_price-item.current_price*number).toFixed(3)}</div>
			<div>
				<div>
					<CoinAreaChart isUpTrend={coinUpTrend} />
					{coinUpTrend ? (
						<p className='uppercase text-green'>
							{item.price_change_24h.toFixed(6)}
						</p>
					) : (
						<p className='uppercase text-red '>
							{item.price_change_24h.toFixed(6)}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

// CoinRow.propTypes = {
// 	image: PropTypes.string.isRequired,
// 	coinName: PropTypes.string.isRequired,
// 	coinPrice: PropTypes.string.isRequired,
// 	coinUpTrend: PropTypes.bool,
// };
	