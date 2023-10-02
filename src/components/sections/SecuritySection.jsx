import React, { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

import banks from '@/images/illustrations/banks.png';
import { Fade } from 'react-reveal';
import SecuritySectionCart from '../userGroup/SecuritySectionCart';

const data = [
	'Maria	Jackson',
	'Adam	Slater',
	'Andrea	Gibson',
	'Wanda	Paterson',
	'Faith	King',
	'Max	Avery',
	'Donna	Rutherford',
	'Paul	Metcalfe',
	'Rose	White',
	'Victoria	Short',
	'Rose	Davidson',
	'Virginia	Young',
	'Zoe	Dickens',
	'Nathan	James',
	'Pippa	Campbell',
	'Sonia	MacDonald',
	'Andrew	Parsons',
	'Trevor	Fisher',
	'Joseph	Vance',
	'Leonard	Parr',
	'Warren	Nash',
	'Bella	Payne',
	'Alexander	Wallace',
	'John	Jackson',
	'Maria	Ogden',
];
const cryptoNames = [
	'Bitcoin',
	'Ethereum',
	'Cardano',
	'Binance Coin',
	'Solana',
	'Polkadot',
	'Ripple',
	'Dogecoin',
	'Litecoin',
	'Chainlink',
];
export default function SecuritySection() {
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	return (
		<section className='container mx-auto py-32' id='about'>
			<div className='grid md:grid-cols-2'>
				<div>
					<Fade up>
						<img
							src={banks}
							alt=''
						/>
					</Fade>
				</div>
				<div className='flex justify-center'>
					<div className='max-w-xl'>
						<h2 className='font-bold text-4xl mb-6 leading-normal'>
							Latest crypto payouts
						</h2>
						<ul className='my-6 h-2/3 overflow-auto'>
            <li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} (0:{getRandomNumber(14, 30)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
              <li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} ({getRandomNumber(2, 10)}:{getRandomNumber(11, 49)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
              <li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} ({getRandomNumber(15, 30)}:{getRandomNumber(48, 55)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
              <li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} ({getRandomNumber(36, 43)}:{getRandomNumber(14, 30)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
							<li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} ({getRandomNumber(44, 51)}:{getRandomNumber(14, 30)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
              <li className='mb-6'>
								<span>
									<BsCheckCircleFill className='text-primary inline mr-2' />
									{
										data[
											Math.floor(
												Math.random() * data.length
											)
										]
									} ({getRandomNumber(51, 59)}:{getRandomNumber(14, 30)} time ago)
								</span>
								<br />
								<p className='inline mr-2'>
									Received:{' '}
									<span className='text-gray'>
										${(Math.random() * 234.123).toFixed(3)}{' '}
										{
											cryptoNames[
												Math.floor(
													Math.random() *
														cryptoNames.length
												)
											]
										}
									</span>
								</p>
							</li>
              
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
