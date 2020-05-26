import Container from "../components/Container";
export default function Home() {
  return (
    <Container>
      <div id="imgsBG" class="main-background">
        <img
          src="img/bgDesign.jpg"
          alt="Punto & Guion | Oscar Crespo"
          id="bgDesign"
          class="bgImg  -top"
        />
        <img
          src="img/bgInteraction.jpg"
          alt="Punto & Guion | Oscar Crespo"
          id="bgInteraction"
          class="bgImg "
        />
      </div>
      <div id="homeButtons">
        <h2 class="fieldsTitle design" id="designBtn">
          Design <span id="plusSign">+</span>
        </h2>
        <h2 class="fieldsTitle interaction" id="interactionBtn">
          Interaction
        </h2>
      </div>
    </Container>
  );
}
