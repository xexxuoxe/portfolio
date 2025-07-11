'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './actionButtons.module.scss';

interface PostViewButtonsProps {
    postId: string;
    handleDelete: () => void;
}

const PostViewButtons = ({ postId, handleDelete }: PostViewButtonsProps) => {

    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true);
        try {
            await handleDelete();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.post_view_btn}>
            <div className={styles.post_list_btn}>
                <Link href="/post/list">
                    <span>VIEW ALL LIST</span>
                </Link>
            </div>
            <div className={styles.view_btn_right}>
                <div className={styles.post_edit_btn}>
                    <Link href={`/post/modify/${postId}`}>
                        <span>EDIT</span>
                    </Link>
                </div>
                <div className={styles.post_delete_btn}>
                    <button onClick={handleDelete}>
                        <span>{loading ? 'DELETING...' : 'DELETE'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostViewButtons;
