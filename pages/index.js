import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub, faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { fa1, faExternalLink, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFolderClosed, faHeart } from '@fortawesome/free-regular-svg-icons';
import Navigation from '../comp/navigation';

function HomePage() {
	return (
		<>
			<Navigation />
			<header id='about' className='hero '>
				<div className='container'>
					<h1>
						Hey, What's up? I'm <span class='accent'> Kaleb</span>, I create digital experiences.
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
							<h3>Torch.AI</h3>
							<p>
								A public facing website for Torch AI. Created with Next JS, and Contentful. I was
								able to help design, create and structure the website for the company.
							</p>
							<p>Next SCSS Figma Contentful Vercel</p>
							<ul>
								<li>
									<a role='icon' href='https://github.com/torch-ai/public-website' target='_blank'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a role='icon' href='https://torch.ai' target='_blank'>
										<FontAwesomeIcon icon={faExternalLink} />
									</a>
								</li>
							</ul>
						</div>

						<div className='projectGallery-item'>
							<h3>Nyacchii</h3>
							<p>
								A portoflio website for Nyacchii, an professional digital artist and Twitch partner.
								To help with commission pricing and information.
								<i> This project is still in development with the client.</i>
							</p>
							<p class='stack'>SCSS Next Figma Vercel</p>
							<ul>
								<li>
									<a
										role='icon'
										href='https://github.com/Sorumeiji/project-minami-v2'
										target='_blank'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a role='icon' href='https://project-minami-v2.vercel.app/'>
										<FontAwesomeIcon icon={faExternalLink} />
									</a>
								</li>
								<li>
									<a
										role='icon'
										href='https://www.figma.com/file/y2pkkI53aZocla9VnAZhZR/Nyacchii-V3-Portfolio?node-id=571%3A143'
										target='_blank'>
										<FontAwesomeIcon icon={faFigma} />
									</a>
								</li>
							</ul>
						</div>

						<div className='projectGallery-item'>
							<h3>Suncast Weather</h3>
							<p>
								A single page application, I designed and developed during an interview process that
								showcases the today, hourly, and daily weather, based on Amazon weather API.
							</p>
							<p className='stack'>React Amazon API Figma Vercel</p>
							<ul>
								<li>
									<a
										role='icon'
										href='https://github.com/Sorumeiji/weather-casestudy'
										target='_blank'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
								<li>
									<a role='icon' href='https://weather-casestudy.vercel.app/'>
										<FontAwesomeIcon icon={faExternalLink} />
									</a>
								</li>
							</ul>
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
