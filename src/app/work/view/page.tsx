/*
	Work page
	src/app/work/page.tsx
*/
import WorkViewPage from '@components/main/work/view/workView.component'
import NavComponent from '@components/sementic/nav.component'

export default function WorkPage() {

	return (
		<>
			<NavComponent />
			<WorkViewPage/>
		</>
	);
}