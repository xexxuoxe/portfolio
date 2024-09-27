import styles from './agree.module.scss';

export default function AgreeEssential(){
    return (
        <>
            <div className={ styles.agree_sum }>
                <table>
                    <thead>
                        <tr>
                            <th>항목</th>
                            <th>목적</th>
                            <th>보유기간</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                이름, 아이디, 비밀번호, <br />본인인증(이메일 또는 전화번호)
                            </td>
                            <td>
                                이용자 식별 ,  서비스 제공 및 상담 등의 원활한 의사소통 경로 확보, 부정 이용방지
                            </td>
                            <td>회원 탈퇴시까지</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className={ styles.desc }>
                이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다.
                <br />다만 회원 가입 시 수집하는 최소한의 개인정보 수집 및 이용 동의를 거부하실 경우 회원 가입 및 회원 관련한 서비스 이용이 어려울 수 있습니다.
            </p>
        </>
    )
}