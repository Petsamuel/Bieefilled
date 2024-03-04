import Header from "../components/Header";
import Hero from "../components/Hero";


function Home() {
  return (
    <section className="bg-black h-screen">
      <Header />
      <div className="py-14 lg:py-4 "> <Hero /></div>
    </section>
  );
}

export default Home;
