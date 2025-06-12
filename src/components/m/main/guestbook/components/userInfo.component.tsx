'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import styles from './userInfo.module.scss';


export default function UserInfoPage() {
    const { data: session } = useSession();

    return (
        <>
            <div className={styles.user_contents}>
                {session ? (
                    <>
                        <div className={styles.user_img}>
                            <Image 
                            src={session.user?.image || ''} 
                            fill
                            alt="프로필" 
                        />
                        </div>
                        <b>{session.user?.name}</b>
                    </>
                ) : (
                    <>
                        <b>로그인하면 방명록을 남기실 수 있습니다</b>
                    </>
                )}
            </div>
        </>
    );
};