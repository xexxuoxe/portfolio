import { NEXUS_API_URI, NEXUS_SERVER_TOKEN } from '@type/constants';
import { httpClient } from '@lib/api/axios.client';

export class AuthService {

    public static async start(
        type: 'phone' | 'email',
        receiver: string
    ): Promise<number> 
    {  
        try {
            const result : {
                status : Promise<number>
            } = await httpClient.post(
                `${NEXUS_API_URI}/account/v1/account/signup/auth`,
                {
                    type: type,
                    receiver: receiver
                },
                { 
                    bearerToken: NEXUS_SERVER_TOKEN
                }
            )
            return result.status;
        } catch(error) {
            console.log(error);
            return 0;
        }
    }

}