import Container from "../components/Container";
export default function Home() {
  return (
    <Container>
      <style jsx>
        {`
          .bgImg {
            width: 1920px;
            height: 1080px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            z-index: 90;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }

          .bgImg.-top {
            z-index: 100;
            opacity: 1;
          }
        `}
      </style>
      <div id="imgsBG" className="main-background">
        <img
          src="img/bgDesign.jpg"
          alt="Punto & Guion | Oscar Crespo"
          id="bgDesign"
          className="bgImg  -top"
        />
        <img
          src="img/bgInteraction.jpg"
          alt="Punto & Guion | Oscar Crespo"
          id="bgInteraction"
          className="bgImg "
        />
      </div>
      <div id="homeButtons">
        <h2 className="fieldsTitle design" id="designBtn">
          Design <span id="plusSign">+</span>
        </h2>
        <h2 className="fieldsTitle interaction" id="interactionBtn">
          Interaction
        </h2>
      </div>
    </Container>
  );
}
