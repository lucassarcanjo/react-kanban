import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "./error-lottie.json";
import { Container } from "./Error.styles";

export const Error: React.FC = () => (
  <Container>
    <Player src={errorAnimation} autoplay loop />
    <h3>Desculpe, parece que algo deu errado... </h3>
  </Container>
);
