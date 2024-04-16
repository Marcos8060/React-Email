// Handler function
export default async function handler(req, res) {

    if (req.method === 'GET') {
        try {
            // Fetch data from the API endpoint
            const { data: emailAlertsData } = await axios.get(`${API_URL.EMAIL_ALERT}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);

            // Check if emailAlertsData is empty
            if (emailAlertsData && emailAlertsData.length > 0) {
                // Generate HTML content using the template component
                const emailBody = ReactDOMServer.renderToString(
                    <EmailTemplate
                        emailAlertsData={emailAlertsData}
                    />
                );

                // Send email
                await sendEmail({
                    to: ["marcosgav80@gmail.com","support@thinksynergy.co.ke"],
                    subject: 'KORDES ROSEN LETTER OF CONFIRMATION',
                    html: emailBody
                });

                // Return success response
                res.status(200).json({ success: true, message: 'Email sent successfully' });
            } else {
                // Return success response with message indicating no data to send email
                res.status(200).json({ success: true, message: 'No email data available to send' });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
