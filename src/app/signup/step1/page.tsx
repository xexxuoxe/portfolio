'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { Popup, usePopup } from '@components/_utiles/popup/default'
import SqureButton from '@components/_utiles/button/squre.component';
import CheckBox from '@components/_utiles/form/checkbox.component';
import AgreementItem from '@components/signup/step1/item.component';
import useSignupStep1 from '@hooks/signup/step1.hook';
import { AgreeUtil, AgreeEssential, AgreeMarketing, AgreePersonal} from '@components/signup/step1/agree/agree';
import { AgreeState } from '@store/slices/signup/agree.slice';

const agreementItems = [
    { id: 'util', label: '이용약관', isRequired: true, component: AgreeUtil },
    { id: 'essential', label: '개인정보 수집 및 이용', isRequired: true, component: AgreeEssential },
    { id: 'personal', label: '개인정보 수집 및 이용', isRequired: false, component: AgreePersonal },
    { id: 'marketing', label: '광고성 정보 수신 동의', isRequired: false, component: AgreeMarketing },
];

const Step1: React.FC = () => {
    const router = useRouter();
    const { isChecked, isDetail, isAgo, toggleDetail, checkAgree, setIsAgo } = useSignupStep1();
    const { popupState, openPopup, closePopup } = usePopup();

    const goStep2 = () => {
        if( isChecked.util !== true ){
            openPopup('필수 약관에 동의해주세요.',[
                {
                    text :'확인',
                    onClick: closePopup,
                    backgroundColor: '#4285F4'
                }
            ])

            return ;
        }
        if( isChecked.essential !== true ){
            openPopup('개인정보 수집 및 이용에 동의해주세요.',[
                {
                    text :'확인',
                    onClick: closePopup,
                    backgroundColor: '#4285F4'
                }
            ])
            
            return ;
        }

        if( !isAgo ){
            openPopup('만 14세 이상 여부란에 체크해주세요.',[
                {
                    text :'확인',
                    onClick: closePopup,
                    backgroundColor: '#4285F4'
                }
            ])
            
            return ;
        }
        router.push('/signup/step2')
    }

    return (
        <div className={`${styles.join_step1} ${styles.join_step}`}>
            <strong className={styles.txt_mark}>* 필수입력항목</strong>

            <div className={`${styles.ck_box} ${styles.top}`}>
                <CheckBox 
                id="agree_all"
                checked={isChecked.all}
                onChange={(checked) => checkAgree('all', checked)}
                label="아래 약관에 전체 동의합니다"
                labelClass={styles.label}
                />
            </div>

            {agreementItems.map(item => (
                <AgreementItem
                    key={item.id}
                    id={`agree_${item.id}`}
                    checked={ isChecked[item.id as keyof AgreeState] }
                    onCheck={(checked) => checkAgree(item.id as keyof AgreeState, checked)}
                    label={item.label}
                    isRequired={item.isRequired}
                    showDetail={isDetail[item.id as keyof typeof isDetail]}
                    onToggleDetail={() => toggleDetail(item.id as keyof typeof isDetail)}
                    detailComponent={<item.component />}
                    isAgo={isAgo}
                    setIsAgo={(value: string) => setIsAgo(value)}
                />
            ))}

            <SqureButton
                style={{
                    height: '70px'
                }}
                backgroundColor="#2f62cb"
                onClick={goStep2}
            >
                동의하기
            </SqureButton>

            <Popup
                isOpen={popupState.isOpen}
                onClose={closePopup}
                message={popupState.message}
                buttons={popupState.buttons}
            />
        </div>
    )
}

export default Step1;