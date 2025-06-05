"use client";

import React from "react";
import { MENU_LIST } from './constants/navLinks';
import styles from "./nav.module.scss";

export default function NavComponent() {
	return (
		<div id={ styles.navigation }>
			<div className={ styles.inner_wrap }>
			{/* site link */}
			<ul className={ styles.nav_menu }>
				{ MENU_LIST.map(( link, index ) => (
				<li key={ index }>
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
