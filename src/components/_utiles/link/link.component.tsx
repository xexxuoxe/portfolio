/* 
	link component
	src/component/_utiles/link/link.component.tsx
*/
import Link from 'next/link'
import styles from './link.module.scss'

const LinkButton = ({ text, href, target, variant, className}: {
	text: string;
	href: string;
  target: string;
	variant: keyof typeof styles;
	className : string;
}) => {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`} target={target}>
      <span>{text}</span>
    </Link>
  )
}

export default LinkButton
