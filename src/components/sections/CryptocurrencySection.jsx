import React, { useEffect, useState } from 'react';

import ListCoin from '@/components/ListCoin';
import { Route } from 'react-router-dom';
const data = [];

export default function CryptocurrencySection({ number }) {
	const [trending, setTrending] = useState([]);
	const [topGainers, setTopGainers] = useState([]);
	const API_BASE_URL = 'https://api.coingecko.com/api/v3';

	useEffect(() => {
		fetch(`${API_BASE_URL}/coins/markets?vs_currency=usd`)
			.then((response) => response.json())
			.then((data) => {
				setTrending(data.slice(0, 5));
				setTopGainers(data.slice(5, 10));
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (

			<section className='relative md:-mt-10' id='watchlist'>
				<div className='mx-auto rounded-3xl lg:mx-8 bg-white py-8 px-4 shadow-lg'>
					<div className='grid md:grid-cols-2 xl:grid-cols-2'>
						<div className='px-4 mb-6 lg:mb-0'>
							<ListCoin
								title='Most value'
								data={trending}
								more='/'
								number={number}
							/>
						</div>
						<div className='px-4 mb-6 lg:mb-0'>
							<ListCoin
								title='Trending'
								data={topGainers}
								more='/'
								number={number}
							/>
						</div>
					</div>
				</div>
			</section>
	);
}
