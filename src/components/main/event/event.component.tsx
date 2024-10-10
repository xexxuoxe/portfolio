'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ComponentPagination from '@components/_utiles/pagination/pagination.component';
import { Event, useEventHook } from './event.hook';
import styles from './event.module.scss';

export default function EventItem() {
	const {
		eventData
	} = useEventHook();

	const events = eventData;

    return (
		<div className={styles.inner_container}>
			<div className={styles.section_sub}>
				<Image
					src="https://siwon-cdn.siwonschool.com/asia/community/event/vietnam_event_header.jpg"
					width={1100}
					height={170}
					alt="수강후기"
				/>
			</div>
			<div className={styles.siwon_events}>
				<div className={styles.evnets_list}>
					<ul>
						{events.map((index) => (
						<li key={index.id} className={styles.events_items}>
							<Link href={index.link} target="_blank">
								<div className={styles.items_img}>
									<Image
										src={index.image}
										alt={index.title}
										fill={true}
									/>
								</div>
								<div className={styles.items_detail}>
									<span><em>{index.state}</em></span>
									<h3>{index.title}</h3>
									<p>{index.subtitle}</p>
								</div>
							</Link>
						</li>
						))}
					</ul>
				</div>
			</div>
		</div>
    )
}
