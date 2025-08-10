"use server"

export async function submitContactForm(prevState: any, formData: FormData) {
  // Simulate form processing delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const email = formData.get('email') as string
  const company = formData.get('company') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      error: true,
      message: 'Please fill in all required fields.'
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: true,
      message: 'Please enter a valid email address.'
    }
  }

  // In a real application, you would:
  // 1. Save to database
  // 2. Send email notification
  // 3. Integrate with CRM
  // 4. Add to mailing list, etc.

  console.log('Contact form submission:', {
    firstName,
    lastName,
    email,
    company,
    message,
    timestamp: new Date().toISOString()
  })

  return {
    success: true,
    error: false,
    message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
  }
}
