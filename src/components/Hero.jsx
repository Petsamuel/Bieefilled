import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <section className="relative pt-20">
        <div>
          <span className="text-white">
            <Typewriter
              options={{ loop: true }}
              onInit={(writter) => {
                writter.typeString("Developer");
                writter.pauseFor(1000);
                writter.deleteChars(10);
                writter.typeString("Technical Writer").start();
              }}
            />
          </span>
        </div>
      </section>
    </>
  );
}

export default Hero;
