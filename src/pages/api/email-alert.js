import { Resend } from 'resend';
import { API_URL,API_METHODS } from "../../assets/api-endpoints";
import EmailTemplate from '../../../emails'
import { backendAxiosInstance } from '../../assets/backend-axios-instance';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1024mb", // Set desired value here
    },
  },
};

export default async function handler(req, res) {
  
  if (req.method === API_METHODS.GET) {
    try {
      const config = {
        headers: {
          Authorization: req.headers.authorization,
        },
      };

      // Fetch email alerts
      const response = await backendAxiosInstance.get(
        `${API_URL.EMAIL_ALERT}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        config
      );

      // Extract data from response
      const emailAlertsData = response.data;
      // Send email with data
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { data: emailData, error: emailError } = await resend.emails.send({
        from: 'Florisynergy <onboarding@resend.dev>',
        to: ["support@thinksynergy.co.ke","anthony@thinksynergy.co.ke"],
        subject: 'KORDES ROSEN LETTER OF CONFIRMATION',
        react: EmailTemplate({ emailAlertsData }),
      });
  
      if (emailError) {
        return res.status(400).json(emailError);
      }

      // Return success response
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, error: error.toString() });
    }
  } else {
    res.status(404).json({ message: "path not found!" });
  }
}
