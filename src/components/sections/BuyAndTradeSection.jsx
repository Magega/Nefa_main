import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';

import buyIcon from '@/images/illustrations/buy.png';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import Select from '@/components/Select';
import { Link } from 'react-router-dom';

export default function BuyAndTradeSection({ number }) {
	const [cryptoPrices, setCryptoPrices] = useState({});
	const [topAmount, setTopAmount] = useState('');
	const [botAmount, setBotAmount] = useState('');
	const [selectedCrypto, setSelectedCrypto] = useState('bitcoin');
	const [outputCrypto, setOutputCrypto] = useState('bitcoin');
	const [address, setAddress] = useState('');
	const [price, setPrice] = useState(0);
	const fetchCryptoPrices = async (number) => {
		try {
			const response = await fetch(
				'https://api.coingecko.com/api/v3/simple/price' +
					'?ids=bitcoin,ethereum,litecoin,tether,monero' +
					'&vs_currencies=usd'
			);

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			if (number) {
				setCryptoPrices(data * number);
			} else {
				setCryptoPrices(data);
			}
		} catch (error) {
			console.error('Error fetching crypto prices:', error);
		}
	};
	useEffect(() => {
		fetchCryptoPrices();
	}, []);
	const handleAmountChange = (event) => {
		setTopAmount(event.target.value);
	};

	const handleCryptoChange = (event) => {
		setSelectedCrypto(event.target.value);
	};

	const handleOutputCryptoChange = (event) => {
		setOutputCrypto(event.target.value);
	};
	const handleAddressChange = (event) => {
		setAddress(event.target.value);
	};

	const calculateValue = () => {
		const inputPrice = cryptoPrices[selectedCrypto]?.usd || 0;
		const outputPrice = cryptoPrices[outputCrypto]?.usd || 0;
		return (
			((parseFloat(topAmount) * inputPrice) / outputPrice).toFixed(8) *
			1.05
		);
	};
	const formHandler = (e) => {
		e.preventDefault();
	};

	const inputChangeHandler = (e) => {
		console.log(e.target.value);
	};

	return (
		<section
			className='container mx-auto py-32'
			id='exchange'
		>
			<div className='grid md:grid-cols-2 gap-10'>
				<div className='flex items-center'>
					<div className='max-w-xl'>
						<h2 className='font-bold text-4xl mb-6 leading-normal'>
							Buy & trade on the <br /> original crypto exchange.
						</h2>
						<p className='text-gray mb-6'>
							Buy now and get 40% extra bonus Minimum pre-sale
							amount <br /> 25 Crypto Coin. We accept BTC
							crypto-currency
						</p>

						<form onSubmit={formHandler}>
							<div className='border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full my-6'>
								<div className='border-r border-primary pr-4 md:pr-6'>
									<small className='text-primary'>
										Address
									</small>
								</div>
								<input
									type='text'
									value={address}
									onChange={handleAddressChange}
									className='text-right outline-none w-full'
								/>
							</div>
							<div className='flex justify-between gap-4 md:gap-6 mb-6'>
								<div className='border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center'>
									<div className='border-r border-primary pr-4 md:pr-6'>
										<small className='text-primary'>
											Amount
										</small>
									</div>
									<input
										type='number'
										value={topAmount}
										onChange={handleAmountChange}
										className='text-right outline-none w-full'
									/>
								</div>
								<select
									value={selectedCrypto}
									label='Input'
									onChange={handleCryptoChange}
									className='border border-primary rounded-2xl py-3 md:py-4 text-primary'
								>
									<option value='bitcoin'>Bitcoin</option>
									<option value='ethereum'>Ethereum</option>
									<option value='litecoin'>Litecoin</option>
									<option value='tether'>Tether</option>
									<option value='monero'>Monero</option>
								</select>
							</div>

							<div className='flex justify-between gap-4 md:gap-6 mb-6'>
								<div className='border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-full'>
									<div className='border-r border-primary pr-4 md:pr-6'>
										<small className='text-primary'>
											Amount
										</small>
									</div>
									<input
										type='text'
										value={
											calculateValue()
												? calculateValue().toFixed(5)
												: ''
										}
										onChange={inputChangeHandler}
										className='text-right outline-none w-full'
									/>
								</div>
								<select
									className='border border-primary rounded-2xl py-3 md:py-4 text-primary'
									value={outputCrypto}
									label='Output'
									onChange={handleOutputCryptoChange}
								>
									<option value='bitcoin'>Bitcoin</option>
									<option value='ethereum'>Ethereum</option>
									<option value='litecoin'>Litecoin</option>
									<option value='tether'>Tether</option>
									<option value='monero'>Monero</option>
								</select>
							</div>
						</form>
						{address.length > 12 && topAmount > 0 ? (
							<Link
								to='/cryptocurrency'
								onClick={() => {
									const key = 'CryptoOpgect';
									const value = {
										selectedCrypto: `${selectedCrypto}`,
										outputCrypto: `${outputCrypto}`,
										youSend: `${topAmount}`,
										address: `${address}`,
										youReceive: calculateValue()
											? calculateValue().toFixed(5)
											: '',
									};
									sessionStorage.setItem(
										key,
										JSON.stringify(value)
									);
								}}
								className='border bg-primary border-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10'
							>
								{' '}
								Buy Now
							</Link>
						) : (
							<Link
								to='#exchange'
								className='border bg-[#ff9966] border-[#ff9966] text-white  transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10'
							>
								Fill in all fields
							</Link>
						)}
					</div>
				</div>
				<div className='row-start-1 md:col-start-2'>
					<Fade up>
						<img
							src={buyIcon}
							alt=''
						/>
					</Fade>
				</div>
			</div>
		</section>
	);
}
