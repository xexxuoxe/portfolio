import Link from 'next/link';
import styles from '../home.module.scss';

interface WorkTextProps {
  text: string;
  icon: JSX.Element;
}

const WorkText = ({ text, icon }: WorkTextProps) => (
  <div className={styles.text_list}>
    <span>{text}</span>
    {icon}
  </div>
);

const WorkIcon = () => (
  <svg fill="transparent" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.8992 45.6573C33.8992 44.8613 33.4314 44.1417 32.7067 43.8201C31.9812 43.4984 31.1357 43.636 30.5496 44.1716C23.2788 50.8129 6.70007 65.9535 6.70007 65.9535C5.52786 67.0247 3.83602 67.3 2.38576 66.6566C0.935497 66.0148 0 64.5741 0 62.9837V8.0167C0 6.42634 0.935497 4.98559 2.38576 4.34226C3.83602 3.70043 5.52786 3.97572 6.70007 5.04693C6.70007 5.04693 23.2788 20.1875 30.5496 26.8288C31.1357 27.3644 31.9812 27.502 32.7067 27.1803C33.4314 26.8587 33.8992 26.1391 33.8992 25.3431C33.8992 18.9353 33.8992 8.0167 33.8992 8.0167C33.8992 6.42634 34.8347 4.98559 36.2849 4.34226C37.7352 3.70043 39.427 3.97572 40.6001 5.04693L70.6916 32.5304C71.5249 33.2919 72 34.3691 72 35.5002C72 36.6313 71.5249 37.7085 70.6916 38.47L40.6001 65.9535C39.427 67.0247 37.7352 67.3 36.2849 66.6566C34.8347 66.0148 33.8992 64.5741 33.8992 62.9837C33.8992 62.9837 33.8992 52.0651 33.8992 45.6573Z" 
      fill="#ffd810" 
      strokeWidth="0" 
      fillRule="evenodd" 
    />
  </svg>
);

export const Work = () => {
  return (
    <div className={styles.info_work}>
      <div className={styles.link_container}>
        <Link href="/work/list">
          {[...Array(6)].map((_, index) => (
            <div key={`text-container-${index}`}>
              <WorkText text="Let's work together" icon={<WorkIcon />} />
            </div>
          ))}
        </Link>
      </div>
    </div>
  );
};