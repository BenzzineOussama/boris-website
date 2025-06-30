import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, phone, service } = body
    
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }
    
    // In a real application, you would:
    // 1. Send an email notification to the business
    // 2. Save the inquiry to a database
    // 3. Send a confirmation email to the customer
    // 4. Integrate with a CRM system
    
    // For now, we'll just log the submission
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      company: body.company || 'Not provided',
      service,
      message: body.message || 'No message',
      timestamp: new Date().toISOString(),
    })
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your inquiry. We will contact you within 24 hours.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}