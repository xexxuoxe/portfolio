import { httpClient } from '@lib/api/axios.client';

export interface postData {
	id: number,
	title: string,
	content: string
}

export class WriteService {

    public static async start (
        postData: postData
    ): Promise<postData | false>
    {
        try {
            const result : postData | false = await httpClient.post(
                `http://localhost:3002/postReview`,
                postData
            )
			return result;
        } catch(error) {
            return false;
        }
    }
}
