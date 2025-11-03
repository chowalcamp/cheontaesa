import axiosInstance from '@/lib/axios';

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

// 문의하기 제출
export async function submitContact(data: ContactFormData) {
  try {
    const response = await axiosInstance.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('문의 제출 실패:', error);
    throw error;
  }
}

