import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Nav from '../styles/modules/nav.module.scss';
import Image from 'next/image';

const Navigation = () => {
	const buttonRef = useRef();
	const navRef = useRef();
	const router = useRouter();

	useEffect(() => {
		buttonRef.current.addEventListener('click', toggle);
	}, []);

	function toggle(event) {
		const visibilty = navRef.current.getAttribute('data-visible');
		if (visibilty === 'false') {
			navRef.current.setAttribute('data-visible', true);
			buttonRef.current.setAttribute('aria-expanded', true);
		} else {
			navRef.current.setAttribute('data-visible', false);
			buttonRef.current.setAttribute('aria-expanded', false);
		}
	}
	return (
		<div className='navigation-container'>
			<div className='logo'>
				<h3 className='accent'>KB</h3>
			</div>

			<button
				className={`${Nav.mobile_nav_toggle}`}
				aria-controls='primary_navigation'
				ref={buttonRef}
				aria-expanded='false'>
				<span className={`${Nav.sr_only}`}>menu</span>
			</button>

			<nav>
				<ul
					id='primary_navigation'
					data-visible='false'
					ref={navRef}
					className={`${Nav.primary_navigation}`}>
					<li>
						<a href='#about'>About</a>
					</li>
					<li>
						<a href='#projects'>Work</a>
					</li>
					<li>
						<a className='resume' href='/KalebBerry_Resume.pdf' target='_blank'>
							Resume
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
