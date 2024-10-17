'use client';
import PostViewItem from '@components/main/post/view/postView.component';
import { usePostHook } from '@components/main/post/view/postView.hook';

interface PostViewProps {
	params: {
		id: number;
	}
}

export default function Main({ params }: PostViewProps) {

	const postData = usePostHook(params.id);

	return (
		<div>
			<PostViewItem post={postData} />
		</div>
	);
}
