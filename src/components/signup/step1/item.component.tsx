import React from 'react';
import CheckBox from '@components/_utiles/form/checkbox.component';
import ToggleArrowButton from '@components/_utiles/button/toggleArrow.component';
import RadioBox from '@components/_utiles/form/radio.component';
import styles from './item.module.scss';

interface AgreementItemProps {
    id: string;
    checked: boolean;
    onCheck: (checked: boolean) => void;
    label: string;
    isRequired: boolean;
    showDetail: boolean;
    onToggleDetail: () => void;
    detailComponent: React.ReactNode;
    isAgo: string | null,
    setIsAgo: (value: string ) => void;
}

const AgreementItem: React.FC<AgreementItemProps> = ({
    id,
    checked,
    onCheck,
    label,
    isRequired,
    showDetail,
    onToggleDetail,
    detailComponent,
    isAgo,
    setIsAgo
}) => {

    return (
        <div className={styles.ck_box}>
            <CheckBox 
                id={id}
                checked={checked}
                onChange={onCheck}
                label={(isChecked) => (
                    <>
                        {label} <em className={`${styles.em} ${isChecked ? styles.checked : ''}`}>({isRequired ? '필수' : '선택'})</em>
                    </>
                )}
                labelClass={styles.label}
            />
            <div className={styles.btn_more}>
                <ToggleArrowButton
                    initialState={true}
                    onChange={onToggleDetail}
                />
            </div>
            
            {id == 'agree_essential' && (
                <div className={styles.subcheck}>
                    <RadioBox 
                        id="check_ago_up"
                        name="check_ago"
                        value="up"
                        checked={isAgo === 'up'}
                        onChange={() => setIsAgo('up')}
                        className={{ container: styles.radioContainer }}
                        label="만 14세 이상입니다."
                        labelClass={styles.label}
                    />
                    <RadioBox 
                        id="check_ago_under"
                        name="check_ago"
                        value="under"
                        className={{ container: styles.radioContainer }}
                        checked={isAgo === 'under'}
                        onChange={() => setIsAgo('under')}
                        label="만 14세 미만입니다."
                        labelClass={styles.label}
                    />
                </div>
            )}
            {showDetail && (
                <div className={styles.policy_box}>
                    {detailComponent}
                </div>
            )}
        </div>
    )
};

export default AgreementItem;