import styles from './agree.module.scss';

export default function AgreeMarketing(){
    return (
        <div className={ styles.agree_cont }>
            <p className={ styles.pt15 }>개인정보 보호법 규정에 따라 시원스쿨 통합회원에 회원가입 신청하시는 분들 중 광고성 정보 수신 동의에 대한 내용을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.<br /></p>
            <p className={ `${styles.pt15} ${styles.fs13}` }><b>시원스쿨 통합회원가입 중 광고성 정보 수신동의에 동의하신 회원분들의 개인정보를 활용하여 전자식 전송매체(SMS/MMS/ E-mail 등 다양한 전송매체)를 통해 시원스쿨 및 제휴업체의 상품 또는 서비스에 대한 광고성 정보를 전송할 수 있습니다.</b></p>
            <p className={ styles.pt15 }>본동의는 거부할 수 있습니다. 다만 거부 시 동의를 통해 제공 가능한 각종 우대 서비스, 혜택, 경품 및 이벤트 안내를 받아 볼 수 없습니다. <br /><br />고객이 본 수신동의를 철회하고자 할 경우에는 고객센터(02-6409-0878)로 연락하시거나, 시원스쿨홈페이지를 통해 수신동의 철회 요청을 할 수 있습니다.</p>
        </div>
    )
}