import React from 'react';

import Container from '../components/Container';

const Footer = () => {
	return (
		<footer>
			<Container>
				<div>
					<p>
						<a href="/">Home</a> | <a href="/about">About</a> |{' '}
						<a href="/us-states">US States</a> | <a href="/nevada/">Nevada</a> |{' '}
						<a href="/clarkcounty/">Clark County</a>
					</p>
				</div>
				<p>
					&copy; {new Date().getFullYear()}, Ron Chamberlain -{' '}
					<a href="https://pegasusteam.com">PegasusTeam</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
