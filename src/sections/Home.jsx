import About from "./About";
import FirstPartHomePage from "./FirstPartHomePage";
import SecondPartHomePage from "./SecondPartHomePage";
import ThirdPartHomePage from "./ThirdPartHomePage";

function Home() {
  return (
    <section id="home">
      <FirstPartHomePage />
      <SecondPartHomePage />
      <ThirdPartHomePage />
    </section>
  );
}

export default Home;
