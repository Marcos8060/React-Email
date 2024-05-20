import nodemailer from "nodemailer";
import ReactDOMServer from "react-dom/server";
import EmailTemplate from "../../../emails";
import axios from "axios";
import { API_URL } from "../../assets/api-endpoints";

// Function to send email
export async function sendEmail({ to, subject, html }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    // Verify transporter
    await transporter.verify();
    console.log("Transporter verified successfully.");
  } catch (error) {
    console.log("Error verifying transporter:", error);
    return;
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html,
    });
    console.log("Email sent successfully:", sendResult);
  } catch (err) {
    console.log("Error sending email:", err);
  }
}

// Handler function
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch data from the API endpoint
      const { data: emailAlertsData } = await axios.get(
        `${API_URL.EMAIL_ALERT}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );


      if (emailAlertsData !== "No more LOC's to process." && emailAlertsData !== "") {
        // Generate HTML content using the template component
        const emailBody = ReactDOMServer.renderToString(
          <EmailTemplate emailAlertsData={emailAlertsData} />
        );

        // Send email
        await sendEmail({
          to: [
            // "marcosgav80@gmail.com"
            "licenceea@kordes-rosen.com", 
            "support@thinksynergy.co.ke",
            "christian@kreative-roses.com",
            "bas@kreative-roses.com"
           ],
          subject: "KORDES ROSEN LETTER OF CONFIRMATION",
          html: emailBody,
        });

        // Return success response
        res
          .status(200)
          .json({ success: true, message: "Email sent successfully" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "No email data available to send" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
