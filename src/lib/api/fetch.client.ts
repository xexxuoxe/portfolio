const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';

interface ApiResponse<T = any> {
    status: number;
    error_code?: string;
    message?: string;
    data?: T;
}

interface RequestOptions extends RequestInit {
    data?: any;
}

class ApiError extends Error {
    status: number;
    data: any;

    constructor(message: string, status: number, data?: any) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

async function apiClient<T>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { data, ...customConfig } = options;
    const headers = {
        'Content-Type': 'application/json',
        ...customConfig.headers,
    };

    const config: RequestInit = {
        method: data ? 'POST' : 'GET',
        ...customConfig,
        headers,
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
        const responseData: ApiResponse<T> = await response.json();

        if (response.ok) {
            return responseData;
        } else {
            throw new ApiError(responseData.message ?? 'API call failed', response.status, responseData);
        }
    } catch (error) {
        if (error instanceof ApiError) { 
            throw error;
        }
        throw new ApiError('Network error', 0);
    }
}

export const api = {
    get: <T>(endpoint: string, options?: RequestOptions) => 
        apiClient<T>(endpoint, { ...options, method: 'GET' }),
    post: <T>(endpoint: string, data: any, options?: RequestOptions) => 
        apiClient<T>(endpoint, { ...options, method: 'POST', data }),
    put: <T>(endpoint: string, data: any, options?: RequestOptions) => 
        apiClient<T>(endpoint, { ...options, method: 'PUT', data }),
    delete: <T>(endpoint: string, options?: RequestOptions) => 
        apiClient<T>(endpoint, { ...options, method: 'DELETE' }),
};

export default api;