
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a real application, here you would:
    // 1. Connect to MongoDB using Mongoose
    // 2. Save the message: await Message.create({ name, email, subject, message, createdAt: new Date() })
    // 3. Send an email notification

    // Mocking successful DB interaction for demonstration
    console.log('Form submission received:', { name, email, subject, message, createdAt: new Date().toISOString() });

    return NextResponse.json(
      { message: 'Your inquiry has been received. We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    );
  }
}
