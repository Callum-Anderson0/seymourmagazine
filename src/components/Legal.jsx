import { useState } from "react";

const legalPolicies = [
  {
    key: "TAC",
    label: "Terms and Conditions",
    content: `Welcome to Seymour Magazine. By purchasing from us, you agree to our terms. All sales are subject to UK law. You must be at least 16 years old or have parental consent to purchase. Prices are listed in GBP and include VAT where applicable. We reserve the right to update these terms at any time. For support, contact us via Instagram: https://www.instagram.com/seymourmagazine/?hl=en. Only physical magazines are sold. Some issues may contain swearing or adult themes, but no explicit 18+ content.`,
  },
  {
    key: "PP",
    label: "Privacy Policy",
    content: `We collect your name, email, and address to process orders and communicate with you. Your data is stored securely in Supabase and never sold to third parties. Payments are processed securely via Stripe; we do not store your card details. You may request deletion of your data at any time by contacting us on Instagram: https://www.instagram.com/seymourmagazine/?hl=en.`,
  },
  {
    key: "RRP",
    label: "Refund and Return Policy",
    content: `If your magazine arrives damaged or you do not receive your order, contact us within 14 days for a replacement or refund. Digital products are not sold. To request a return or refund, message us on Instagram: https://www.instagram.com/seymourmagazine/?hl=en with your order details.`,
  },
  {
    key: "SP",
    label: "Shipping Policy",
    content: `Orders are processed within 3 business days and shipped via Royal Mail. Delivery within the UK typically takes 2-5 business days. International shipping is not currently available. You will receive a confirmation message when your order is dispatched.`,
  },
  {
    key: "DC",
    label: "Disclaimer",
    content: `Seymour Magazine is not responsible for delays caused by postal services or incorrect delivery information provided by the customer. Content may include swearing or adult themes, but no explicit 18+ material. Content is for informational and entertainment purposes only.`,
  },
  {
    key: "CP",
    label: "Cookie Policy",
    content: `Our website uses cookies to improve your experience and analyze site traffic. By using our site, you consent to our use of cookies. You can disable cookies in your browser settings.`,
  },
  {
    key: "IPR",
    label: "Intellectual Property Rights",
    content: `All content, images, and designs are the property of Seymour Magazine or their respective contributors. No part of this publication may be reproduced without permission.`,
  },
  {
    key: "AR",
    label: "Age Restrictions",
    content: `You must be at least 16 years old to purchase from Seymour Magazine, or have parental/guardian consent. By ordering, you confirm you meet this requirement. Some issues may contain swearing or adult themes, but no explicit 18+ content.`,
  },
  {
    key: "GLJ",
    label: "Governing Law and Jurisdiction",
    content: `These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
];

function Legal() {
  const [information, setInformation] = useState();

  return (
    <div className="legal-container bg-gray-800 text-xs leading-tight text-gray-200 mx-auto p-4 w-[100%]">
      {legalPolicies.map((policy, idx) => (
        <span key={policy.key}>
          <span
            className="underline cursor-pointer"
            onClick={() => setInformation(policy.key)}
          >
            {policy.label}
          </span>
          {idx < legalPolicies.length - 1 && <span> | </span>}
        </span>
      ))}
      <span>
        <span>| </span>
        <span
          className="underline cursor-pointer"
          onClick={() => setInformation("")}
        >
          clear
        </span>
      </span>
      {legalPolicies
        .filter((policy) => information === policy.key)
        .map((policy) => (
          <p key={policy.key + "-content"} className="mt-4 whitespace-pre-line">
            {policy.content}
          </p>
        ))}
    </div>
  );
}

export default Legal;
