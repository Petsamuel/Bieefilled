import Header from "../components/Header";
import Hero from "../components/Hero";


function Home() {
  return (
    <section className="bg-black h-screen">
      <Header />
      <div className="flex items-center m-auto py-[6em] "> <Hero /></div>
    </section>
  );
}

export default Home;
