import { useState, useEffect } from 'react';
import { MENU_LIST, SOCIAL_LINKS } from '../constants/footerLinks';

export function useFooter() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return { year, MENU_LIST, SOCIAL_LINKS };
}
