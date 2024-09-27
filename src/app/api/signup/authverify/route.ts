import { AuthService } from '@services/signup/auth/auth'
import { successResponse, errorResponse } from '@lib/api/response'


export async function POST(request: Request) {
    // POST 요청 처리
    const body : {
        type: 'phone' | 'email',
        verifyCode: number
    } = await request.json();

    return successResponse(null, '인증이 완료되었습니다.');
}