import React, { useRef } from 'react';

import CreditCardSection from '../sections/CreditCardSection';
import { Link } from 'react-router-dom';

export default function Menus() {
	return (
		<>
			<div className='w-full'>
				<a
					className='hover:text-primary py-2 block'
					href='#watchlist'
				>
          Watchlist
				</a>
			</div>
			<div className='w-full'>
				<a className='hover:text-primary py-2 block' href='#exchange'>Exchanges</a>
			</div>
			<div className='w-full'>
				<a
					href='#reviews'
					className='hover:text-primary py-2 block'
				>
					Reviews
				</a>
			</div>
			<div className='w-full'>
				<a
					href='#about'
					className='hover:text-primary py-2 block'
				>
					About
				</a>
			</div>
			<div className='w-full'>
				<a
					href='#questions'
					className='hover:text-primary py-2 block'
				>
					Questions
				</a>
			</div>
		</>
	);
}
