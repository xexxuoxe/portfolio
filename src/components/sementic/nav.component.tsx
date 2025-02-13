/*
	nav component
	src/component/sementic/nav.component.tsx
*/
"use client";
import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";

export default function NavComponent() {

	{/* nav link arry  */}
	const menuList = [
		{ name: "HOME", url: "/home" },
		{ name: "ABOUT", url: "/info" },
		{ name: "WORK", url: "/work/list" },
		{ name: "BOARD", url: "/post/list" }
	];

	return (
		<div id={ styles.navigation }>
			<div className={ styles.inner_wrap }>
			{/* site link */}
			<ul className={ styles.nav_menu }>
				{ menuList.map(( link, index ) => (
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
