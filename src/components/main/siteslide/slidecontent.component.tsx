import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Banner } from './siteslide.types';
import styles from './siteslide.module.scss';

interface SlideContentProps {
    banner: Banner;
    isMobile: boolean;
}

const SlideContent: React.FC<SlideContentProps> = ({ banner, isMobile }) => (
    <div className={styles.box}>
        <p className={styles.img_box}>
            <Image 
                src={banner.img}
                width={483}
                height={415}
                alt={banner.name}
            />
        </p>
        <div className={styles.txt_box}>
            <em className={styles.site}>{banner.fullname}</em>
            <p className={`${styles.tit01} ${styles.tit}`}>{banner.tit01}</p>
            <p className={`${styles.tit02} ${styles.tit}`}>{banner.tit02}</p>
            <p className={styles.desc}>{banner.desc}</p>
            {!isMobile && (
                <Link href={banner.link} target='_blank' className={styles.bt_go}>
                    바로가기
                </Link>
            )}
        </div>
    </div>
);

export default SlideContent;