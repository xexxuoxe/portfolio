/*
	main page
	src/app/page.tsx
*/
import IntroItemPage from '@components/main/intro/intro.component'
import HomeItemPage from '@components/main/home/home.component';

export default function Main() {
  return (
	<div>
		<IntroItemPage />
		<HomeItemPage />
	</div>
	
  );
}
