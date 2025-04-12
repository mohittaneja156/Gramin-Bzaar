import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Make sure we're using a valid model name
    // Groq supports models like "llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768" etc.
    // Update the model name if it's coming as "llama-4" which doesn't exist
    if (body.model === 'meta-llama/llama-4-maverick-17b-128e-instruct') {
      body.model = 'meta-llama/llama-4-maverick-17b-128e-instruct'; // Use a valid model name
    }
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY || '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'}`
      },
      body: JSON.stringify(body)
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API error:', errorData);
      throw new Error(`API request failed with status ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred' },
      { status: 500 }
    );
  }
}