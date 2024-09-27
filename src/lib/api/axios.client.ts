// lib/httpClient.ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface HttpClientConfig extends AxiosRequestConfig {
    baseURL?: string;
    bearerToken?: string;
}

class HttpClient {
    private defaultBearerToken: string | null = null;

    constructor(defaultBearerToken: string | null = null) {
        this.defaultBearerToken = defaultBearerToken;
    }

    setDefaultBearerToken(token: string | null) {
        this.defaultBearerToken = token;
    }

    private getHeaders(config: HttpClientConfig): Record<string, string> {
        const headers: Record<string, string> = {
            ...config.headers as Record<string, string>,
        };

        const token = config.bearerToken || this.defaultBearerToken;
        headers['Content-Type'] = 'application/json';
        
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;
    }

      
    private async request<T>(method: string, url: string, config: HttpClientConfig = {}): Promise<T> {
        try {
            const headers = this.getHeaders(config);
            const response: AxiosResponse<T> = await axios({
                method,
                url,
                ...config,
                headers,
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                throw new Error(axiosError.message);
            }
            throw error;
        }
    }

    public async get<T>(url: string, config?: HttpClientConfig): Promise<T> {
        return this.request<T>('GET', url, config);
    }

    public async post<T>(url: string, data?: any, config?: HttpClientConfig): Promise<T> {
        return this.request<T>('POST', url, { ...config, data });
    }

    public async put<T>(url: string, data?: any, config?: HttpClientConfig): Promise<T> {
        return this.request<T>('PUT', url, { ...config, data });
    }

    public async delete<T>(url: string, config?: HttpClientConfig): Promise<T> {
        return this.request<T>('DELETE', url, config);
    }

    public async patch<T>(url: string, data?: any, config?: HttpClientConfig): Promise<T> {
        return this.request<T>('PATCH', url, { ...config, data });
    }
}

export const httpClient = new HttpClient();