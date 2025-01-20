/*
	Work page
	src/app/work/page.tsx
*/
import WorkItemPage from '@components/main/work/work.component'
import NavComponent from '@components/sementic/nav.component'

export default function WorkPage() {
	return (
		<>
			<NavComponent />
			<WorkItemPage />
		</>
	);
}