import TitleSection from "../components/TitleSection";

const Impressum = () => {
  return (
    <div>
      <TitleSection title="Impressum" subTitle="Last update: 29.05.2022" />
      <div className="w-1/2 m-auto my-10">
        <p>
          {`Blockchain Presence AG is a Zurich based start-up
          incorporated in December 2020 under Swiss law. The Chief Executive
          Officer is Prof. Dr. Johannes Christian Ewerhart. The company’s
          activities aim at developing and running a universal platform for the
          transfer of real-world information to innovative smart contract
          applications.`}
        </p>
        <p>&nbsp;</p>
        <p className="font-bold">Office and Contact</p>
        <p>Blockchain Presence AG</p>
        <p>Fritz-Fleiner-Weg 15</p>
        <p>8044 Zürich</p>
        <p>Switzerland</p>
        <br />
        <p className="">
          Email:{" "}
          <a
            className="text-blue-400"
            href="mailto:info@blockchainpresence.net"
          >
            info@blockchainpresence.net
          </a>
        </p>
        <br />
        <br /> <p className="font-bold">Company identification number UID</p>
        <br />
        <p>CHE-370.249.799</p>
        <p>&nbsp;</p>
        <br />
        <p className="font-bold">Register of commerce reference number</p>
        <br />
        <p>CH-020-3049583-1</p>
      </div>
    </div>
  );
};

export default Impressum;
