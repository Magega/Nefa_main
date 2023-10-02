import React, { useState, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/images/logo.svg';
import { BsChevronUp } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import faq from '@/images/illustrations/faq.png';
import { Fade } from 'react-reveal';
import classNames from 'classnames';

const FaqItem = ({ open, title, children }) => {
	const [isOpen, setIsOpen] = useState(open ? true : false);

	const iconClass = classNames({
		'transition-all duration-300': true,
		'rotate-180': isOpen,
	});

	const contentClass = classNames({
		'text-gray transition-all duration-300 overflow-hidden': true,
		'h-full': isOpen,
		'h-0': !isOpen,
	});

	return (
		<div
			className='mb-3 border-b border-lightgray pb-3'
			id='questions'
		>
			<div
				className='flex justify-between py-3 cursor-pointer hover:text-primary'
				onClick={() => setIsOpen(!isOpen)}
			>
				{title}
				<BsChevronUp className={iconClass} />
			</div>
			<div className={contentClass}>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default function CryptoCurrencyPage() {
	const data = [
		{ name: 'Usdt trc20', wallet: 'TLKLXvVhFxay3Hib7h7hDDa7UU8EtzV5zA' },
		{
			name: 'Usdt erc20',
			wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7',
		},
		{
			name: 'Usdt bep20',
			wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7',
		},
		{ name: 'Dash', wallet: 'Xgr7A7gXSc2oDxkbE48vF5E8i4QeAKXUwD' },
		{
			name: 'Bitcoin (btc)',
			wallet: 'bc1qqdj79ewzx5m0zypekxp85cycxr2uumd86elxjl',
		},
		{ name: 'Eth', wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7' },
		{ name: 'Bnb', wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7' },
		{
			name: 'Litecoin',
			wallet: 'ltc1qdjtdhlnytjqy7qkmuye789fez0n49uy0zyx76u',
		},
		{
			name: 'Atom',
			wallet: 'cosmos1hclsnvm8qshfduv3gaf0x99uy0vyne70e32hd2',
		},
		{ name: 'Xrp', wallet: 'rHkBmEqAceUqn7JCUaVKduS8WCULaVZMu3' },
		{ name: 'Matic', wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7' },
		{
			name: 'Solana',
			wallet: '4XTKpxKxEa1uhXf8JDNsJ53NAFZNTUAPrQpgd3FGBUFL',
		},
		{
			name: 'Near',
			wallet: 'bbc011e0f098725ad08ce1feab893aa8347a448fdba1ae9935e8ceab3e7a7ca1',
		},
		{
			name: 'Algorant',
			wallet: '77LYRVPGFCJIXLRAO4AKN6RJ7WZQK375BWDLLZWSZKLIP2VUQXI7HLVEAM',
		},
		{ name: 'Tron', wallet: 'TLKLXvVhFxay3Hib7h7hDDa7UU8EtzV5zA' },
		{ name: 'Avax', wallet: '0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7' },
		{
			name: 'Ada',
			wallet: 'addr1qxnk8eyhwll70jqpg05473v4x3q74sqrq6kngzckyatklpdrfpjtqd46ycw9vzl54mmujj23t45z9ttprsw6462k25fqwpc4ge',
		},
		{ name: 'Doge', wallet: 'DP8BR1mVn4LdBCDEkhLBCvcHzk5TNCgYRD' },
		{ name: 'Tezos', wallet: 'tz1SmRz3bcQn4cUHAfNxcvNNacLWCX5ze73R' },
	];

	const storedUserString = sessionStorage.getItem('CryptoOpgect');
	const storedUser = JSON.parse(storedUserString);
	const [mail, setMail] = useState('');
	const [selectedWallet, setSelectedWallet] = useState(
		'0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7'
	);
	const [orderType, setOrderType] = useState('Float rate');

	const [isValid, setIsValid] = useState(true);
	const onSubmit = () => {
		const webAppUrl =
			'https://sheet.best/api/sheets/28e6e01b-b377-4e73-912a-8900ce647b81';
		const dataToSend = {
			mail: mail,
			youSend: storedUser.youSend,
			selectedCrypto: storedUser.selectedCrypto,
			youReceive: storedUser.youReceive,
			outputCrypto: storedUser.outputCrypto,
			addres: storedUser.address,
		};
		fetch(webAppUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(dataToSend),
		});
		setOrderType('Wait to approve')
	};
	const handleMailChange = (event) => {
		setMail(event.target.value);
	};
	var today = new Date();
	var date =
		today.getFullYear() +
		'-' +
		(today.getMonth() + 1) +
		'-' +
		today.getDate();
	var time =
		today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

	return (
		<section
			className='container mx-auto py-10'
			id='exchange'
		>
			<div className='flex justify-between items-center w-full pb-10'>
				<a>
					<img
						src={logo}
						className='mr-6'
						alt='Neva'
					/>
				</a>
				<Link
					to='/'
					className='flex justify-between items-center'
				>
					<AiOutlineArrowLeft className='mr-2' />
					Back to page
				</Link>
			</div>
			<div className='grid md:grid-cols-2 gap-10'>
				<div
					className='flex items-center row-start-1'
					style={{ height: '700px' }}
				>
					<div
						className='max-w-xl mt-[100px]'
					>
						<div>
							<h2 className='font-bold text-xl leading-normal'>
								Creation time:
							</h2>
							<p className='text-gray mb-6'>
								{date.replace(/-/g, '/')}
								{' - '}
								{time}
							</p>
						</div>
						<div>
							<h2 className='font-bold text-xl leading-normal'>
								Order id:
							</h2>
							<p className='mb-6 text-primary'>749028</p>
						</div>
						<div>
							<h2 className='font-bold text-xl leading-normal'>
								Order type:
							</h2>
							<p className='text-gray mb-6'>{orderType}</p>
						</div>
						<div>
							<h2 className='font-bold text-xl leading-normal'>
								You send:
							</h2>
							<p className='text-gray mb-6'>
								<span className='text-primary'>
									{storedUser.youSend}
								</span>{' '}
								{storedUser.selectedCrypto}
							</p>
						</div>
						<div>
							<h2 className='font-bold text-xl leading-normal'>
								You send to:
							</h2>
							<p className='text-gray mb-6 break-all w-[300px]'>
								{selectedWallet}
							</p>
						</div>

						<div>
							<h2 className='font-bold text-xl leading-normal'>
								You receive:
							</h2>
							<p className='text-gray mb-6'>
								<span className='text-primary'>
									{storedUser.youReceive}
								</span>{' '}
								{storedUser.outputCrypto}
							</p>
						</div>

						<div>
							<h2 className='font-bold text-xl leading-normal'>
								You receive to:
							</h2>
							<p className='text-gray mb-6 break-all w-[300px]'>
								{storedUser.address}
							</p>
						</div>
						<div
							className={`border border-primary rounded-2xl py-3 md:py-4 px-4 md:px-6 flex items-center w-[350px] ${
								isValid ? 'border-gray-300' : 'border-red-500'
							}`}
						>
							<div className='border-r border-primary pr-4 md:pr-6'>
								<small className='text-primary'>Mail</small>
							</div>
							<input
								type='text'
								value={mail}
								onChange={handleMailChange}
								className={`text-right outline-none w-full`}
							/>
						</div>
						{isValid == false ? (
							<p className='text-red-500 text-xs mt-1'>
								Please enter a valid email.
							</p>
						) : (
							<></>
						)}
						<button
							onClick={() => onSubmit()}
							className='border bg-primary border-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full py-3 px-6 md:py-4 md:px-10 mt-4'
						>
							Сonfirm the transaction
						</button>
					</div>
				</div>
				<div
					className=' md:col-start-2 overflow-auto shadow-lg p-3 rounded-3xl pt-5 max-h-[700px]'
				>
					<h2 className='font-bold text-xl leading-normal'>
						Select crypto wallet:
					</h2>
					<FaqItem
						open={true}
						title='Eth'
					>
						<button
							onClick={() =>
								setSelectedWallet(
									'0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7'
								)
							}
							className='border bg-primary border-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full px-1 mr-2'
						>
							Select
						</button>
						0xe705352c37bcE0ea4E296869FA56305ba5DCB9e7{' '}
					</FaqItem>
					{data.map((element, indx) => (
						<div key={indx}>
							<FaqItem title={element.name}>
								<button
									onClick={() =>
										setSelectedWallet(element.wallet)
									}
									className='border bg-primary border-primary text-white hover:bg-white hover:text-primary transition-colors duration-300 rounded-full px-1 mr-2'
								>
									Select
								</button>
								{element.wallet}
							</FaqItem>
						</div>
					))}
				</div>
			</div>
			<div className='mt-[150px]'>
				<h2 className='font-bold text-xl leading-normal'>
					What do you need to know?
				</h2>
				<p className='text-gray mb-6'>
					What information is important to have? You require 2
					confirmations on the Litecoin blockchain for the exchange.
					The speed of confirming a Bitcoin transaction relies on the
					Bitcoin blockchain network's congestion level; you can find
					more details in our article. If the transaction amount you
					submitted differs from the original amount specified in the
					order due to a fluctuating rate, the order will be
					automatically adjusted. If your transaction is received
					after the order's expiration but within 24 hours, it will
					automatically appear in the order. You will have the option
					to proceed with the order or request a refund.
				</p>
			</div>
		</section>
	);
}