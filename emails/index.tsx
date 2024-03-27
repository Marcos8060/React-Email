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

export default function EmailTemplate({ emailAlertsData }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Florisynergy Automated Notification</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section style={coverSection}>
              <table width="100%" cellPadding="" cellSpacing="0" border={0}>
                <tr>
                  <td style={imageSection}>
                    <Img
                      className="w-4/12"
                      src={`${baseUrl}/logo.png`}
                      alt="Your Image"
                      // style={userImage}
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
                  Rosenstrasse 54, D-25365 Klein Offenseth-Sparrieshoop,
                  Germany.
                </p>
                <p className="text-xs" style={mainText}>
                  LETTER OF CONFIRMATION
                </p>
                <p className="text-xs" style={mainText}>
                  DATE: 2023-07-10
                </p>
                <p className="text-xs" style={mainText}>
                  ATT: {emailAlertsData[0]?.growername}
                </p>
                <p className="text-xs" style={mainText}>
                  TOWN: {emailAlertsData[0]?.town}
                </p>
                <p className="text-xs" style={mainText}>
                  COUNTRY: {emailAlertsData[0]?.country}
                </p>
                <p className="text-xs" style={mainText}>
                  REF NO.: {emailAlertsData[0]?.contractnumber}
                </p>
                <p className="text-xs" style={mainText}>
                  GROWER ID: {emailAlertsData[0]?.growercode}
                </p>
                <Hr />
                <p className="text-sm" style={mainText}>
                  We refer to our discussions and understand that you wish to
                  plant the following varieties in the following quantities and
                  at the following times:-
                </p>
                <p className="text-xs" style={mainText}>
                  Variety: {emailAlertsData[0]?.variety}
                </p>
                <p className="text-xs" style={mainText}>
                  Denomination: KORcut0521
                </p>
                <p className="text-xs" style={mainText}>
                  Tradename: Unicorn
                </p>
                <p className="text-xs" style={mainText}>
                  Plants: {emailAlertsData[0]?.totalplants}
                </p>
                <p className="text-xs" style={mainText}>
                  M2: {emailAlertsData[0]?.sqmeters}
                </p>
                <p className="text-xs" style={mainText}>
                  Approx. Planting Date: {emailAlertsData[0]?.dateofplanting}
                </p>
                <p className="text-xs" style={mainText}>
                  Greenhouse Location: {emailAlertsData[0]?.greenhouse}
                </p>
                <p className="text-xs" style={mainText}>
                  Propagator: {emailAlertsData[0]?.propagator}
                </p>
                <p className="text-xs" style={mainText}>
                  Value of License(EUR): {emailAlertsData[0]?.amount}
                </p>
              </Section>
              <Hr />
              <Section style={upperSection}>
                <p className="text-xs" style={mainText}>
                  Please note that you will be required to pay license fees as
                  follows:-
                </p>
                <table className="border-collapse w-full">
                  <tr className="bg-[#204B1B] text-white ">
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Due Date
                    </th>
                    <th
                      className="text-sm"
                      style={{
                        border: "1px solid #dddddd",
                        textAlign: "left",
                        padding: "8px",
                      }}
                    >
                      Amount
                    </th>
                  </tr>
                  {Array.isArray(emailAlertsData) &&
                    emailAlertsData.map((item, index) => (
                      <tr key={index}>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #dddddd",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.duedate1}
                        </td>
                        <td
                          className="text-sm"
                          style={{
                            border: "1px solid #dddddd",
                            textAlign: "left",
                            padding: "8px",
                          }}
                        >
                          {item?.dueamount1}
                        </td>
                      </tr>
                    ))}
                </table>
              </Section>
              <Hr />
              <Section style={upperSection}>
                <p className="text-xs">
                  Please also note that your obligation to pay such license
                  fees, and the terms on which the above varieties may be
                  exploited will be governed by a W. Kordes Söhne Cut Flower
                  Agreement. A copy of this can be made available on request.
                </p>
                <p className="text-xs">
                  In the event that any of the information captured herein is
                  not accurate, please contact our agent Kreative Roses Ltd
                  <a href="mailto:krcentre@kreative-roses.com">
                    {" "}
                    krcentre@kreative-roses.com
                  </a>{" "}
                  within seven (7) days. After this period, the details and
                  conditions will be considered as binding.
                </p>
              </Section>
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
