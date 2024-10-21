import { successResponse, errorResponse } from '@lib/api/response';
import { postData, WriteService } from '@services/post/write.service';

export async function GET(request: Request) {
	return successResponse(null, '정상적으로 작성되었습니다.');
}

export async function POST(request: Request) {

    const postData : postData = await request.json();

    const result: postData | false = await WriteService.start(postData);

    if( result === false ){
		return errorResponse('인증번호 발신 중 오류가 발생했습니다.');
    }

	return successResponse(null, '정상적으로 작성되었습니다.');
}
