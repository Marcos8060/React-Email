import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";

const baseUrl = "https://react-email-sage.vercel.app";

interface Props {
  emailAlertsData: any;
}

export default function LOCTemplate({ emailAlertsData }: Props) {
  return (
    <Html>
      <Head />
      <Preview>INTERPLANT ROSES EA – LETTER OF CONFIRMATION</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={coverSection}>
              <table width="100%" cellPadding="" cellSpacing="0" border={0}>
                <tr>
                  <td style={imageSection}>
                    <Img
                      className="w-1/2"
                      src={`${baseUrl}/interplantLogo.png`}
                      alt="Your Image"
                    />
                  </td>
                  <td style={imageSection}>
                    <h4 className="text-right">Florisynergy</h4>
                  </td>
                </tr>
              </table>
              <Hr />
              <Section style={upperSection}>
                <Heading className="text-xl">
                  KORDES ROSEN LETTER OF CONFIRMATION
                </Heading>
                <p className="text-sm" style={mainText}>
                  Naivasha, Kenya.
                </p>
                <p className="text-xs" style={mainText}>
                  DATE: 24 October 2025
                </p>
                <p className="text-xs" style={mainText}>
                  TO: Timaflor
                </p>
                <p className="text-xs" style={mainText}>
                  LOCATION: Nairobi, Kenya
                </p>
              </Section>
              <Hr />
              <Section style={upperSection}>
                <p className="text-xs">
                  Dear Sir/Madam,
                </p>
                <p className="text-xs">
                  Thank you for your continued collaboration with Interplant
                  Roses EA. We hereby confirm your intention to establish the
                  following variety under the agreed terms:
                </p>
                <table className="border-collapse w-full mb-4">
                  <tr className="bg-white">
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >Grower Name
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Grower Code
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Variety
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Quantity
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Date Of Delivery
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Rate
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Propagator
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Recipient Email
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Contract Number
                    </th>
                  </tr>
                  {Array.isArray(emailAlertsData) &&
                    emailAlertsData.map((item, index) => (
                      <tr key={index}>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.growername}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.growercode}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.variety}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.quantityinha}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.dateofdelivery}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.rate}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.propagator}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.recipientemailaddress}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.contractnumber}
                        </td>
                      </tr>
                    ))}
                </table>
                <Hr />
                <p className="my-2 font-semibold text-xl">License Fee Payment Terms</p>
                <table className="border-collapse w-full">
                  <tr className="bg-white">
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Due Amount
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #204B1B",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Due Date
                    </th>
                  </tr>
                  {Array.isArray(emailAlertsData) &&
                    emailAlertsData.map((item, index) => (
                      <tr key={index}>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.dueamount1}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #204B1B",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.duedate1}
                        </td>
                      </tr>
                    ))}
                </table>
              </Section>
              <Hr />
              <Section style={upperSection}>
                <p className="text-xs">
                  All intellectual property rights, propagation procedures, and
                  commercial usage for this variety will be governed by the
                  Interplant Roses Cut Flower Royalty Agreement. A copy can be
                  shared on request.
                </p>
                <p className="text-xs">
                  If any of the above details are inaccurate, please notify us
                  within seven (7) days from the date of this letter. If no
                  feedback is received within this period, the information will
                  be considered correct and binding.
                </p>
                <p className="text-xs">
                  All communication regarding this confirmation should be
                  directed to: gavin@interplantroses.co.ke
                </p>
                <Hr />
                <p className="text-xs">Warm regards,</p>
                <p className="text-xs">Interplant Roses EA</p>
                <p>Naivasha, Kenya</p>
              </Section>
              <Hr />
              <section>
                <p className="text-xs">
                  This email has been automatically generated and is powered by
                  Florisynergy.
                </p>
              </section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const userImage = {
  borderRadius: "50%",
  height: "48px",
  width: "48px",
};

const main = {
  fontFamily: "Kumbh Sans, sans-serif",
  backgroundColor: "#fff",
  color: "#212121",
};

const container = {
  padding: "20px",
  margin: "0 auto",
  backgroundColor: "#eee",
};

const imageSection = {
  backgroundColor: "#ffffff",
  padding: "12px 12px",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = {
  padding: "12px 12px",
};

const mainText = {
  color: "#333",
  marginBottom: "14px",
};
