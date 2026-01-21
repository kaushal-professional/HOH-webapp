import { NextRequest, NextResponse } from 'next/server';

// This is a mock API endpoint - Replace with your actual backend API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation - Replace this with your actual authentication logic
    // Example: Call your backend API, verify credentials, etc.
    if (email === 'demo@example.com' && password === 'password123') {
      return NextResponse.json({
        success: true,
        user: {
          id: '1',
          email: email,
          name: 'Demo User',
        },
        token: 'mock-jwt-token-12345',
      });
    }

    // Invalid credentials
    return NextResponse.json(
      { success: false, message: 'Invalid email or password' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
