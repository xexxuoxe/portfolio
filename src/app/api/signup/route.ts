import { AuthService } from '@services/signup/auth/auth'
import { successResponse, errorResponse } from '@lib/api/response'


export async function POST(request: Request) {
    // POST 요청 처리
    const body : {
        
    } = await request.json();

    return successResponse(null, '환영합니다! \n시원스쿨 가입이 완료 되었습니다.');
}