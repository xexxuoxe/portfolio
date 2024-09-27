import { AuthService } from '@services/signup/auth/auth'
import { successResponse, errorResponse } from '@lib/api/response'


export async function POST(request: Request) {
    // POST 요청 처리
    const body : {
        type: 'phone' | 'email',
        receiver: string
    } = await request.json();

    const result: number = await AuthService.start(
        body.type, 
        body.receiver
    );

    if( result == 1 ){
        let message: string ;
        switch( body.type ){
            case 'phone' :
                message = "인증번호가 문자메세지로 발송되었습니다.";
                break;
            case 'email' :
                message = "인증번호가 이메일로 발송되었습니다.";
                break;
        }
        return successResponse(null, message);
    }

    return errorResponse('인증번호 발신 중 오류가 발생했습니다.');
}