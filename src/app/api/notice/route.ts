import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'https://port-0-cheonteasa-backend-m4h0qv5272cd3f9d.sel4.cloudtype.app';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');
    const recent = searchParams.get('recent');
    
    let url = `${BACKEND_URL}/notice`;
    if (recent === 'true') {
      url = `${BACKEND_URL}/notice/recent`;
    } else if (limit) {
      url = `${BACKEND_URL}/notice?limit=${limit}`;
    }
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Notice API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notices' },
      { status: 500 }
    );
  }
}

