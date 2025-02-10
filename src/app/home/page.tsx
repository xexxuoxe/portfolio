/*
	home main page
	src/app/home/page.tsx
*/
import HomeItemPage from '@components/main/home/home.component';
import NavComponent from '@components/sementic/nav.component';

export default function HomePage() {
  return (
	  	<>
			<NavComponent />
			<HomeItemPage />
		</>
  )
}
