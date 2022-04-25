import Navigation from '../../comp/navigation';
import Image from 'next/dist/client/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

function TorchAI() {
	return (
		<>
			<Navigation />
			<section className='casestudy'>
				<div className='container'>
					<div className='casestudy__title'>
						<p className='accent'>Case Study</p>
						<h1>Torch AI</h1>
						<p>Next - SCSS - Figma - Contentful - Fullpage - Vercel</p>
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
					<div className='casestudy__purpose'>
						<h2>Purpose & Goal</h2>
						<p>
							This website was created to be the public facing website of Torch.AI, which is a
							company that creates a platform called Nexus. The company hired me to create and help
							design a website that fit the CEO needs and wants, and wanted something that lots of
							mixed features such as scroll jacking, animation and background movement. They wanted
							to replicate Undgsgn.com shop-techie theme.
						</p>
						<p>
							I wanted the website to be something that the company can always use and always depend
							on, that will drive the company forward telling a story. Although, there were lots of
							changes and complications, I wanted this website to standout on it own.
						</p>
					</div>

					<div className='casestudy__purpose'>
						<h2>Spotlight</h2>
						<p>
							The accomplishments I was able to make for this website is mostly attemping to keep
							the website responsive as possible. Using Fullpage doesn't allow for dynamic growth
							when adding content, which can cause overflow. I was able to override some styles to
							help with this.
						</p>
						<p>
							Second, using contentful for HR and the Marketing team can constantly update and
							produce content and static pages. This was also, easy enough for me to teach HR and
							the team how to add content as well, so I wasn't the solo person in creating content.
						</p>
						<p>
							Lastly, I was super proud of myself for learning GSAP and its animation tools to
							create moving effects, and tweens.
						</p>
					</div>

					<div className='casestudy__status'>
						<h2>Lessons Learned</h2>
						<p>
							I really learned to talk and communicate what others wanted from me, and to try
							compromise in working with something they liked with good UI / UX. I couldn't pull
							away from scroll jacking which creates bad experiences for users as it messes with
							natural scrolling behavior, but with fullpage, I was able to slove that problem.
						</p>

						<p>
							Somthing neat I leared was using intesection observer. Which allows you to track the
							dom and its state in the view port. With this, I was able to change the navigation
							color and track it based on a logical condition. Although, not perfect, the logic help
							to slove the problem of making the navigation change colors on scroll.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default TorchAI;
