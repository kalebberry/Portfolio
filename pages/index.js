function HomePage() {
	return (
		<>
			<header className='hero'>
				<div className='container'>
					<h1>Hello! I'm Kaleb, a developer based in United States.</h1>
					<h2>Front-End Developer</h2>
					<p>
						An aesthetic web developer and design advocate. I strive to help others to achieve thier
						dreams through my own passions and creativity.
					</p>
					<button>View Github</button>
					<button>View LinkedIn</button>
				</div>
			</header>

			<section>
				<div className='container'>
					<div className='projects'>
						<h1>Projects & Work.</h1>
						<p>Preview of completed and ongoing projects:</p>
					</div>
					<div className='projectGallery'>
						<div className='projectGallery-item'>
							<h2>Torch AI</h2>
							<p>
								A public facing website for Torch AI. Created with Next JS, and Contentful. I was
								able to help design, create and structure the website for the company.
							</p>
							<p>Html5 Scss NextJS Contentful Animation Vercel</p>
							<ul>
								<li>
									<a href='#'>Link</a>
								</li>
								<li>
									<a href='#'>Link</a>
								</li>
							</ul>
						</div>

						<div className='projectGallery-item'>
							<h2>Nyacchii</h2>
							<p>
								A portoflio website for Nyacchii, an professional digital artist and Twitch partner.
							</p>
							<p>Html5 Scss NextJS Vercel</p>
							<ul>
								<li>
									<a href='#'>Link</a>
								</li>
								<li>
									<a href='#'>Link</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomePage;
