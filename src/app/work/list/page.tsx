/*
	Work page
	src/app/work/page.tsx
*/
import WorkListPage from '@components/main/work/list/workList.component'
import NavComponent from '@components/sementic/nav.component'

export default function WorkPage() {
	return (
		<>
			<NavComponent />
			<WorkListPage />
		</>
	);
}