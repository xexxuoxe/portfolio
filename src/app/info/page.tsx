/*
	Info page
	src/app/info/page.tsx
*/
import InfoItemPage from '@components/main/info/info.component'
import NavComponent from '@components/sementic/nav.component'
import FooterComponent from '@components/sementic/footer.component'

export default function InfoPage() {
	return (
		<>
			<NavComponent />
			<InfoItemPage />
			<FooterComponent />
		</>
	);
}