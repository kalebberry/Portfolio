import Navigation from '../../comp/navigation';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

import Nyacchii_preview from '../../img/nyacchii_preview.png';

function Nyacchii() {
	return (
		<>
			<Navigation />
			<section className='casestudy'>
				<div className='container'>
					<div className='casestudy__title'>
						<p className='accent'>Case Study</p>
						<h1>Nyacchii</h1>
						<p>Next - SCSS - Figma - Contentful - Vercel</p>
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
					<div className='casestudy__purpose'>
						<h2>Purpose & Goal</h2>
						<p>
							This website was created to serve as a portfolio for Nyacchii's art. There, she would
							showcase her art to her clients, and would enable her to have a place to link to
							whenever they had questions.
						</p>
						<p>
							I want the finished project to fit her brand style that she used on Twitch.tv and
							something that she would really enjoy to show off to others, as she has expertise in
							graphic design and digital art. The website had to showcase her talent and attempt to
							be creative at the same time.
						</p>
					</div>

					<div className='casestudy__purpose'>
						<h2>Spotlight</h2>
						<p>
							Some great features of the website to come is allowing her to have content control of
							the website, through contenful. Updating content like pricing, and events that would
							happen soon on her Twitch channel would make her have a more custom experience with
							her community. Also, a subtle banner that would display if she was currently working
							on Twitch.TV through its API.
						</p>
					</div>

					<div className='casestudy__status'>
						<h2>Status</h2>
						<p>
							The website still is in development, and soon to be launched. Once launched, it will
							be used with her community and clients to showcase her work and hopefully to interact
							with the website to check thier commission status and more.
						</p>
					</div>

					<div className='casestudy__status'>
						<h2>Lessons Learned</h2>
						<p>
							The main challenge of this website was creating a design that was simple yet
							expressive. Nyacchii is a expert of graphic design, and it was difficult to craft
							something that pleased. I also learning lots about hooks with Twitch's API getting it
							to showcase when she was live, to when she was offline.
						</p>

						<p>
							Using Next and contentful are very helpful in creation of this project, it allows to
							really create static pages without making the client's work difficult. Dynamic routing
							is something I want to invest more time into learning. The more interactive or control
							I can give to the client, I think the better.
						</p>
					</div>
					<Image src={Nyacchii_preview} />
				</div>
			</section>
		</>
	);
}

export default Nyacchii;
