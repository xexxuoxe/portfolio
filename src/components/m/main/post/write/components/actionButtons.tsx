'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './actionButtons.module.scss';

interface PostWriteButtonsProps {
    postId: string;
    handleSubmit: () => void;
}

const PostWriteButtons = ({ postId, handleSubmit }: PostWriteButtonsProps) => {
    const [loading, setLoading] = useState(false);
    
    const onSubmit = async () => {
        setLoading(true);
        try {
            await handleSubmit();
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
                <div className={styles.post_cancel_btn}>
                    <Link href={postId ? `/post/view/${postId}` : "/post/list"}>
                        <span>CANCEL</span>
                    </Link>
                </div>
                <div className={styles.post_submit_btn}>
                    <button onClick={onSubmit} disabled={loading}>
                        <span>{loading ? 'SUBMITTING...' : 'SUBMIT'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostWriteButtons;