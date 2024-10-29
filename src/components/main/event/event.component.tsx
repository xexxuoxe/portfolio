/*
	evnet component
	src/component/main/evnet/evnet.component.tsx
*/
'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Pagination from '@components/_utiles/pagination/pagination.component';
import { useEventHook } from './event.hook';
import styles from './event.module.scss';

export default function EventItem() {

	const { eventData } = useEventHook();
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = eventData.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (page: number) => {
		setCurrentPage(page);
	};

    return (
		<div className={ styles.inner_container }>
			<div className={ styles.section_sub }>
				<Image
					src="https://siwon-cdn.siwonschool.com/asia/community/event/vietnam_event_header.jpg"
					width={ 1100 }
					height={ 170 }
					alt="수강후기"
				/>
			</div>
			<div className={ styles.siwon_events }>
				<div className={ styles.evnets_list }>
					<ul>
						{ currentItems.map((index) => (
							<li
								key={ index.id }
								className={ `${ styles.events_items } ${ index.state.includes('종료') ? `${ styles.finished }` : ''}`}
								>
								<Link href={ index.link } target="_blank">
									<div className={ styles.items_img }>
										<Image
											src={ index.image }
											alt={ index.title }
											fill
											sizes="(max-width: 640px) 50vw 100vw"
										/>
									</div>
									<div className={ styles.items_detail }>
										<span><em>{ index.state }</em></span>
										<h3>{ index.title }</h3>
										<p>{ index.subtitle }</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Pagination
					currentPage={ currentPage }
					totalPages={ Math.ceil( eventData.length / itemsPerPage )}
					onPageChange={ paginate }
				/>
			</div>
		</div>
    )
}

