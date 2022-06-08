import TitleSection from "../components/TitleSection";

const Impressum = () => {
  return (
    <div>
      <TitleSection title="Impressum" subTitle="Last update: 29.05.2022" />
      <div className="w-1/2 m-auto my-10">
        <p>
          Established in 2020, Blockchain Presence AG (BCP) is a Swiss oracle
          platform. The company&rsquo;s goal is to provide an efficient,
          cost-effective, reliable, timely, and secure way to access information
          on the Polygon blockchain using smart contract applications.
        </p>
        <p>&nbsp;</p>
        <p>Office and Contact</p>
        <p>Blockchain Presence AG</p>
        <p>8044 Z&uuml;rich</p>
        <p>Switzerland</p>
        <p>
          Email:{" "}
          <a href="mailto:info@blockchainpresence.net">
            info@blockchainpresence.net
          </a>
        </p>
        <p>&nbsp;</p>
        <p>Company identification number UID</p>
        <p>CHE-370.249.799</p>
        <p>&nbsp;</p>
        <p>Register of commerce reference number</p>
        <p>CH-020-3049583-1</p>
      </div>
    </div>
  );
};

export default Impressum;
