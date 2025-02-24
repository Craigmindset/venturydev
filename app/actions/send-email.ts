"use server"

export async function sendEmail(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}) {
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "contact@venturydev.com",
        to: ["contact@venturydev.com"],
        cc: ["venturynigeria@gmail.com"],
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      }),
    })

    if (!response.ok) {
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email. Please try again." }
  }
}

