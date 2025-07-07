import { useState } from "react";

function Legal() {
  const [information, setInformation] = useState();

  return (
    <div className="legal-container bg-gray-800 text-xs leading-tight text-gray-200 mx-auto p-4 w-[100%]">
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("TAC");
        }}
      >
        Terms and Conditions
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("PP");
        }}
      >
        Privacy Policy
      </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("RRP");
        }}
      >
        Refund and Return Policy
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("SP");
        }}
      >
        Shipping Policy
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("DC");
        }}
      >
        Disclaimer
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("CP");
        }}
      >
        Cookie Policy
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("IPR");
        }}
      >
        Intellectual Property Rights
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("AR");
        }}
      >
        Age Restrictions
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("GLJ");
        }}
      >
        Governing Law and Jurisdiction
      </span>
      <span> | </span>
      <span
        className="underline cursor-pointer"
        onClick={() => {
          setInformation("");
        }}
      >
        clear
      </span>
      {information === "TAC" && <p> terms </p>}
      {information === "PP" && <p> privacy policy </p>}
      {information === "RRP" && <p> returns refund policy </p>}
      {information === "SP" && <p> shipping policy </p>}
      {information === "DC" && <p> disclaimer </p>}
      {information === "CP" && <p> cookie policy </p>}
      {information === "IPR" && <p> intellectual property rights </p>}
      {information === "AR" && <p> age restrictions </p>}
      {information === "GLJ" && <p> governing law and jurisdiction </p>}
    </div>
  );
}
export default Legal;
