/*
	Info page
	src/app/info/page.tsx
*/
import InfoItemPage from '@components/main/info/info.component'
import NavComponent from '@components/sementic/nav.component'

export default function InfoPage() {
	return (
		<>
			<NavComponent />
			<InfoItemPage />
		</>
	);
}