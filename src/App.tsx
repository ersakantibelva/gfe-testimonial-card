import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import { TestimonialCardProps } from "./types";
import imgSrc from './assets/profile-thumbnail.png'

const cardInfo: TestimonialCardProps = {
  imgSrc,
  name: "Sarah Dole",
  username: "sarahdole",
  description:
    "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
};

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-linear-to-br from-[#F9FAFB] to-[#D2D6DB]">
      <TestimonialCard
        imgSrc={cardInfo.imgSrc}
        name={cardInfo.name}
        username={cardInfo.username}
        description={cardInfo.description}
      />
    </div>
  );
}

export default App;
