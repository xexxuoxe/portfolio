import { useNotion } from '@lib/notion/hook/useNotion.hook';

export const usePostActions = (postId: string) => {
  const { deletePage } = useNotion();

  const handleDelete = async () => {

    const confirmed = window.confirm("정말로 삭제하실겁니까?");

    if (confirmed) {
      try {
        await deletePage(postId); 
        window.location.href = '/post/list';

      } catch (error) {

        console.error(error);
      }
    }
  };

  return { handleDelete };
};
