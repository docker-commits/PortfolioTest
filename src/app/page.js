import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <main>
      <Header/>
      <section id="hero" className="snap-start">
        <Hero/>
      </section>

      <section id="about" className="snap-center">
        <About/>
      </section>

      <section id="wexp" className="snap-center">
        <WorkExperience/>
      </section>

      <section id="skills" className="snap-start">
        <Skills/>
      </section>

      <section id="pro" className="snap-start">
        <Projects/>
      </section>

      <section id="contact" className="snap-start">
        <ContactMe/>
      </section>
      <script
          className="animate-ping"
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="saikumar"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you , Amigo."
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
    </main>
  )
}
