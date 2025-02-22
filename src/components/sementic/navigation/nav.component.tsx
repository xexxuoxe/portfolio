"use client";

import React from "react";
import Link from "next/link";
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
					<Link href={ link.url }>
						{ link.name }
					</Link>
				</li>
				))}
			</ul>
			</div>
		</div>
	);
}
