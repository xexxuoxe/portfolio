import { successResponse, errorResponse } from '@lib/api/response';

export default async function POST(request: Request) {
    // POST 요청 처리
    const body : {

    } = await request.json();

    return successResponse(null, '로그인 성공');
}
