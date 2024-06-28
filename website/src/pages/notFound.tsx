import styles from '@/styles/notFound.module.scss'
import { AnimateWrapper } from '@/components/animateWrapper/animateWrapper'
import { Container } from '@/components/container/container'
import { Overlay } from '@/components/overlay/overlay'
import { SEO } from '@/components/seo'
import { useScrollTop } from '@/hooks/useScrollTop'
import { Link } from 'react-router-dom'
import photo404 from '@/assets/images/404_photo.jpg'
import { Image } from '@/components/image'

const metaData = {
	title: 'Not Found',
	path: '/404',
}

export default function NotFound() {
	useScrollTop()

	return (
		<>
			<SEO title={metaData.title} path={metaData.path} />

			<Overlay>
				<AnimateWrapper>
					<Container>
						<div className={styles.notFoundMainContainer}>
							<h1>404</h1>
							<p>Page not found</p>
							<Link to={'/'}>
								Back to home page
							</Link>
							<Image source={photo404}/>
						</div>
					</Container>
				</AnimateWrapper>
			</Overlay>
    </>
	)
}
