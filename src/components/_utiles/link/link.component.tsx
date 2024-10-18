import Link from 'next/link'
import styles from './link.module.scss'

const LinkButton = ({ href, text, variant, className}: {
	href: string;
	text: string;
	variant: keyof typeof styles;
	className : string;
}) => {
  return (
    <Link href={href} className={`${styles[variant]} ${className}`}>
      <span>{text}</span>
    </Link>
  )
}

export default LinkButton
