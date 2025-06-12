'use client';

import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react'
import styles from './actionButtons.module.scss';

interface PostWriteButtonsProps {
    postId: string;
    handleSubmit: () => void;
}

const WriteGuestButtons = ({ postId, handleSubmit }: PostWriteButtonsProps) => {
    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();

    const onSubmit = async () => {
        setLoading(true);
        try {
            await handleSubmit();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.post_submit_btn}>
            {!session?.user ? (

                <button onClick={() => { signIn() }}>
                    <span>
                        <i className={styles.ico_git}></i>
                        <span>GitHub </span> 로그인 해주세요
                    </span>
                </button>
            ) : (
                <button onClick={onSubmit} disabled={loading}>
                    <span>{loading ? '저장중입니다...' : '보내기'}<i className={styles.ico_send}></i></span>
                </button>
            )
            }
        </div>
    );
};

export default WriteGuestButtons;