import React, { ComponentType } from 'react';
import style from './home.module.scss';

const Home: ComponentType = () => {
	const backends = ['Go', 'Nestjs', 'Express', 'Django'];

	return (
		<div id={style.home}>
			<h4>Hi there, This is a skill&apos;s show</h4>
			<h5>It&apos;s a simple social network for posting and comment</h5>
			<div>
				It includes react with typescript, vite, testing with jest and
				@testing-library/react, and the source code in this&nbsp;
				<a
					href="https://github.com/damocles217/react_example"
					target={'_blank'}
					rel={'noreferrer'}
					className={`${style.link}`}
				>
					link.
				</a>
			</div>
			<div>
				<p>
					Also it includes backend in different languages, as go, with gin;
					nodejs, with nestjs and express; and python, with django.
				</p>
				<p>List of backend technologies</p>
				<ul>
					{backends.map((backend, index) => (
						<li key={index}>
							<a
								href=""
								target={'_blank'}
								rel={'noreferrer'}
								className={`${style.link}`}
							>
								{backend} backend source code
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
