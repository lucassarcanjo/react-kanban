import { Player } from "@lottiefiles/react-lottie-player";
import loadingAnimation from "./loading-lottie.json";

export const Loading: React.FC = () => (
  <Player
    src={loadingAnimation}
    autoplay
    loop
    style={{ height: "300px", width: "300px" }}
  />
);
