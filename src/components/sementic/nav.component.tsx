/*
	nav component
	src/component/sementic/nav.component.tsx
*/
"use client";
import React from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
{/* site link arry  */}
const languages = [
  	{ name: "HOME", url: "/home" },
  	{ name: "ABOUT", url: "/info" },
  	{ name: "WORK", url: "/work" },
  	{ name: "BOARD", url: "/board" },
];

export default function NavComponent() {
  return (
    <div id={ styles.navigation }>
      <div className={ styles.inner_wrap }>
		{/* site link */}
        <ul className={ styles.nav_menu }>
			{ languages.map(( lang, index ) => (
			<li key={ index }>
				<Link href={ lang.url }>
					{ lang.name }
				</Link>
			</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
