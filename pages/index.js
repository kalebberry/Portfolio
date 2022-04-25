import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Navigation from '../comp/navigation';

function HomePage() {
	return (
		<>
			<Navigation />
			<header id='about' className='hero'>
				<div className='container'>
					<h1>
						Hey, What's up? I'm <span className='accent'> Kaleb</span>, I Create Digital
						Experiences.
					</h1>
					<p>
						With proven experience in helping companies create a better experience with their brand,
						software, and maintain a better codebase. I am capable of learning and adapting to
						technologies, and teams. Eager to tackle more problems and create using modern
						technologies using skills like JavaScript (ES6+), Next JS, Contentful, APIs and more.
					</p>
					<ul>
						<li>
							<a role='button' href='https://github.com/Sorumeiji' target='_blank'>
								View on Github
							</a>
						</li>
						<li>
							<a
								role='button-outline'
								href='https://www.linkedin.com/in/kalebgberry/'
								target='_blank'>
								View on LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</header>

			<section id='projects' className='projects'>
				<div className='container'>
					<div className='projectsTitle'>
						<h1>Projects & Work.</h1>
						<p>Preview of completed and ongoing projects:</p>
					</div>
					<div className='projectGallery'>
						<div className='projectGallery-item'>
							<h4>Torch.AI</h4>
							<p>
								A public facing website for Torch AI. Created with Next JS, and Contentful. I was
								able to help design, create and structure the website for the company.
							</p>
							<Link href='/project/torch-ai'>
								<a className='accent'>Read More</a>
							</Link>
						</div>

						<div className='projectGallery-item'>
							<h4>Nyacchii</h4>
							<p>
								A portoflio website for Nyacchii, an professional digital artist and Twitch partner.
								To help with commission pricing and information.
								<i> This project is still in development with the client.</i>
							</p>
							<Link href='/project/nyacchii'>
								<a className='accent'>Read More</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<footer className='footer'>
				<div className='container'>
					<p>Designed and Built by Kaleb Berry.</p>
				</div>
			</footer>
		</>
	);
}

export default HomePage;
