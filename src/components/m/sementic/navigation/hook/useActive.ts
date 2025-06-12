import { useState, useEffect } from 'react';

export function useNaveAct() {

    const [ isactiveSec, setActiveSec] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if( entry.isIntersecting ) {
                    const id = entry.target.id;
                    setActiveSec(id);
                }
            })
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const section = document.querySelectorAll('section[id]');

        section.forEach((section) => {
            observer.observe(section)
            // console.log('observe: ', section)
        });
        
        return () => {
            section.forEach((section) => {
                observer.unobserve(section)
                // console.log('unobserve: ', section)
            });
        }
    })
    return { isactiveSec }
}