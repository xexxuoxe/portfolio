"use client";

import React from "react";
import { MENU_LIST } from './constants/navLinks';
import { useNaveAct } from "./hook/useActive";
import styles from "./nav.module.scss";

export default function NavComponent() {

	const {isactiveSec} = useNaveAct();

	return (
		<div id={ styles.navigation }>
			<div className={ styles.inner_wrap }>
			{/* site link */}
			<ul className={ styles.nav_menu }>
				{ MENU_LIST.map(( link, index ) => (
				<li key={ index } className={isactiveSec === link.return.slice(1) ? styles.active : 'test'}>
					<a href={ link.return }>
						{ link.name }
					</a>
				</li>
				))}
			</ul>
			</div>
		</div>
	);
}