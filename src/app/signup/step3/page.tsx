'use client'

import React from 'react';
import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Step3: React.FC = () => {
    
    return (
		<div className={ styles.join_step3 }>
			<div className={ styles.finish_wrap }>
				<span className={ styles.logo }>
                    <Image 
                        src="https://siwon-cdn.siwonschool.com/img/member/comm/logo_join.png" 
                        alt="로고" 
                        width={ 81 }
                        height={ 82 }
                        />
                </span>

				<p className={ styles.txt_box }>
					<strong>시원스쿨 <em>통합회원 가입을 축하드립니다.</em></strong>
					<span className={ styles.txt }>로그인 후 다양한 서비스를 이용하실 수 있습니다.</span>
				</p>

				<div className={ styles.id_box }>
					<strong>ID: <em>usrid</em></strong>
				</div>
			</div>

			<div className={ styles.bt_wrap }>
				<Link href="/">메인으로</Link>
				{/* <a href="$_SESSION['ref_url']">원래 페이지로</a> */}
			</div>
		</div>
    )
}

export default Step3;