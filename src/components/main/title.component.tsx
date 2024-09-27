'use client';
import React from 'react';
import styles from './title.module.scss';

export default function TitleComponent() {
	return (
		<div className={ styles.pagetit }>
			<h1 className={ styles.tit }>Members</h1>
			<h2 className={ styles.txt }>시원스쿨 회원은 한 아이디로 시원스쿨 전 사이트를 이용하실 수 있습니다.</h2>
		</div>
	)
}
