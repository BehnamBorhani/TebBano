import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ message: "وارد کردن ایمیل اجباری است!" }),
        {
          status: 400,
        },
      );
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use Gmail as the email provider
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Our Service!",
      text: "This is a test email sent from a Next.js App Router application.",
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully." }),
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
      { status: 500 },
    );
  }
}
