/*
	post list page
	src/app/post/list/[id]/page.tsx
*/
import NavComponent from '@components/sementic/nav.component'
import PostListItem from '@components/main/post/list/postList.component'

export default function Main() {
  return (
    <>
    <NavComponent />
		<PostListItem />
    </>
  );
}
