import React, { useRef } from "react";
import { createRoot } from "react-dom/client";

import { Canvas, useFrame } from "@react-three/fiber";

import {
  Float,
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";

import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Database,
  BarChart3,
  BrainCircuit,
  Code2,
} from "lucide-react";

import { motion } from "framer-motion";

import YashAI from "./YashAI";

import "./styles.css";


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = [
  {
    number: "01",
    title: "AI Fraud Detection",
    category: "MACHINE LEARNING",
    description:
      "An AI-powered fraud detection system designed to identify suspicious transactions using machine learning classification models.",
    result:
      "Fraud detection workflow using Logistic Regression and Random Forest with an interactive Streamlit interface.",
    tools: [
      "Python",
      "Scikit-learn",
      "Machine Learning",
      "Streamlit",
    ],
    link:
      "https://github.com/Katariayash28/AI-Fraud-Detection-System",
  },

  {
    number: "02",
    title: "Customer Churn Analysis",
    category: "CUSTOMER ANALYTICS",
    description:
      "A customer analytics project focused on identifying churn patterns, customer behaviour and potential retention opportunities.",
    result:
      "Analysed customer behaviour to identify factors associated with customer churn.",
    tools: [
      "Python",
      "Pandas",
      "NumPy",
      "Analytics",
    ],
    link:
      "https://github.com/Katariayash28/Customer-Churn-Analysis",
  },

  {
    number: "03",
    title: "Weekly Intelligence Agent",
    category: "GENERATIVE AI",
    description:
      "An intelligent automation project designed to transform repetitive information workflows into an AI-powered agent system.",
    result:
      "Generative AI workflow using an agent-based architecture for automated intelligence.",
    tools: [
      "Python",
      "Gemini API",
      "AI Agents",
      "Automation",
    ],
    link:
      "https://github.com/Katariayash28/Weekly-Intelligence-Agent",
  },

  {
    number: "04",
    title: "House Price Prediction",
    category: "PREDICTIVE ANALYTICS",
    description:
      "A machine learning project that predicts house prices using structured housing data and predictive modelling techniques.",
    result:
      "End-to-end machine learning workflow covering preprocessing, modelling and prediction.",
    tools: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
    ],
    link:
      "https://github.com/Katariayash28/House-Price-Prediction",
  },
];


/* =========================================================
   3D DATA CORE
   ========================================================= */

function DataCore() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.x += delta * 0.08;
    group.current.rotation.y += delta * 0.14;

    const scale =
      1 +
      Math.sin(state.clock.elapsedTime * 1.5) * 0.025;

    group.current.scale.set(
      scale,
      scale,
      scale
    );
  });

  return (
    <group ref={group}>

      <Float
        speed={1.3}
        rotationIntensity={0.35}
        floatIntensity={0.7}
      >

        <Sphere args={[1.35, 64, 64]}>

          <MeshDistortMaterial
            color="#8b5cf6"
            roughness={0.16}
            metalness={0.82}
            distort={0.24}
            speed={1.2}
          />

        </Sphere>

      </Float>


      <mesh scale={1.8}>

        <sphereGeometry
          args={[1, 32, 32]}
        />

        <meshBasicMaterial
          color="#a78bfa"
          wireframe
          transparent
          opacity={0.12}
        />

      </mesh>


      <mesh scale={2.35}>

        <sphereGeometry
          args={[1, 32, 32]}
        />

        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.06}
        />

      </mesh>

    </group>
  );
}


/* =========================================================
   HERO 3D SCENE
   ========================================================= */

function HeroScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5.5],
        fov: 42,
      }}
    >

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 5, 6]}
        intensity={3}
      />

      <pointLight
        position={[-4, -2, 3]}
        intensity={4}
        color="#7c3aed"
      />

      <Stars
        radius={80}
        depth={45}
        count={1600}
        factor={2}
        saturation={0}
        fade
        speed={0.3}
      />

      <DataCore />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.35}
      />

    </Canvas>
  );
}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function Reveal({
  children,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
    >
      {children}
    </motion.div>
  );
}


/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <div className="site">

      {/* =================================================
          AI PORTFOLIO ASSISTANT
          ================================================= */}

      <YashAI />


      {/* =================================================
          NAVIGATION
          ================================================= */}

      <nav className="nav">

        <a
          href="#top"
          className="brand"
        >
          YK<span>.</span>
        </a>


        <div className="navlinks">

          <a href="#work">
            Work
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <a
          className="nav-cta"
          href="mailto:katariaayash28@gmail.com"
        >

          Let's talk

          <ArrowUpRight size={15} />

        </a>

      </nav>


      {/* =================================================
          HERO
          ================================================= */}

      <section
        id="top"
        className="hero"
      >

        <div className="hero-copy">

          <Reveal>

            <div className="status">

              <span className="status-dot"></span>

              AVAILABLE FOR DATA
              ANALYTICS OPPORTUNITIES

            </div>

          </Reveal>


          <Reveal delay={0.08}>

            <p className="eyebrow">
              DATA ANALYST · DELHI, INDIA
            </p>

          </Reveal>


          <Reveal delay={0.14}>

            <h1>

              Turning
              <br />

              <span>data</span> into
              <br />

              decisions.

            </h1>

          </Reveal>


          <Reveal delay={0.2}>

            <p className="hero-text">

              I build analytics systems,
              dashboards and intelligent
              automation using SQL, Python,
              Power BI and Generative AI.

            </p>

          </Reveal>


          <Reveal delay={0.26}>

            <div className="hero-actions">

              <a
                className="primary"
                href="#work"
              >

                Explore my work

                <ArrowUpRight size={17} />

              </a>


              <a
                className="secondary"
                href="https://github.com/Katariayash28"
                target="_blank"
                rel="noreferrer"
              >

                GitHub

                <Github size={17} />

              </a>

            </div>

          </Reveal>


          <Reveal delay={0.32}>

            <div className="metrics">

              <div className="metric">

                <strong>
                  50K+
                </strong>

                <span>
                  Records analysed
                </span>

              </div>


              <div className="metric">

                <strong>
                  10+
                </strong>

                <span>
                  KPIs tracked
                </span>

              </div>


              <div className="metric">

                <strong>
                  AI
                </strong>

                <span>
                  Analytics + Automation
                </span>

              </div>

            </div>

          </Reveal>

        </div>


        {/* 3D VISUAL */}

        <div className="hero-scene">

          <HeroScene />


          <div className="scene-ui scene-ui-top">

            <span>
              LIVE DATA CORE
            </span>

            <b>
              01
            </b>

          </div>


          <div className="scene-ui scene-ui-bottom">

            <span>
              SQL
            </span>

            <span>
              PYTHON
            </span>

            <span>
              POWER BI
            </span>

            <span>
              AI
            </span>

          </div>

        </div>


        <a
          className="scroll-indicator"
          href="#work"
        >

          <span>
            SCROLL TO EXPLORE
          </span>

          <ArrowDown size={15} />

        </a>

      </section>


      {/* =================================================
          INTRO
          ================================================= */}

      <section className="intro section">

        <Reveal>

          <p className="eyebrow">
            01 / WHAT I DO
          </p>

        </Reveal>


        <Reveal delay={0.08}>

          <h2>

            I don't just make
            <br />

            <em>
              dashboards.
            </em>

          </h2>

        </Reveal>


        <Reveal delay={0.14}>

          <p className="intro-text">

            I use data to answer business
            questions, uncover patterns
            and build systems that help
            people make better decisions.

          </p>

        </Reveal>

      </section>


      {/* =================================================
          PROJECTS
          ================================================= */}

      <section
        id="work"
        className="section projects-section"
      >

        <div className="section-head">

          <div>

            <p className="eyebrow">
              02 / SELECTED WORK
            </p>

            <h2>

              Problems solved
              <br />

              with <em>data.</em>

            </h2>

          </div>


          <p className="section-note">

            A selection of analytics,
            machine learning and
            Generative AI projects built
            around real-world problem solving.

          </p>

        </div>


        <div className="project-grid">

          {projects.map(
            (project, index) => (

              <Reveal
                key={project.number}
                delay={index * 0.06}
              >

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                >

                  <div className="card-top">

                    <span>
                      {project.number}
                    </span>

                    <ArrowUpRight
                      size={19}
                    />

                  </div>


                  <div className="project-content">

                    <p className="project-category">
                      {project.category}
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                    <p className="project-description">
                      {project.description}
                    </p>


                    <div className="project-result">

                      <span>
                        RESULT
                      </span>

                      <p>
                        {project.result}
                      </p>

                    </div>

                  </div>


                  <div className="tags">

                    {project.tools.map(
                      (tool) => (
                        <span key={tool}>
                          {tool}
                        </span>
                      )
                    )}

                  </div>

                </a>

              </Reveal>

            )
          )}

        </div>

      </section>


      {/* =================================================
          EXPERIENCE
          ================================================= */}

      <section
        id="about"
        className="section experience-section"
      >

        <Reveal>

          <p className="eyebrow">
            03 / EXPERIENCE
          </p>

        </Reveal>


        <Reveal delay={0.08}>

          <h2>

            From research
            <br />

            to <em>analytics.</em>

          </h2>

        </Reveal>


        <div className="timeline">

          <Reveal>

            <div className="timeline-row">

              <span className="timeline-date">
                JUL 2026 — PRESENT
              </span>


              <div>

                <h3>
                  Sayam International
                </h3>

                <p className="timeline-role">
                  Data Analyst
                </p>

                <p className="timeline-description">

                  Working with business data,
                  analytics and reporting to
                  support data-driven decision
                  making.

                </p>

              </div>

            </div>

          </Reveal>


          <Reveal delay={0.08}>

            <div className="timeline-row">

              <span className="timeline-date">
                APR 2025 — MAR 2026
              </span>


              <div>

                <h3>
                  Espranza Innovations Pvt Ltd
                </h3>

                <p className="timeline-role">
                  Data Analyst
                </p>

                <p className="timeline-description">

                  Analysed 50K+ records using
                  SQL and Python to identify
                  business trends and anomalies.
                  Built Power BI dashboards
                  tracking 10+ KPIs.

                </p>

              </div>

            </div>

          </Reveal>


          <Reveal delay={0.16}>

            <div className="timeline-row">

              <span className="timeline-date">
                EDUCATION
              </span>


              <div>

                <h3>
                  Amity University
                </h3>

                <p className="timeline-role">
                  B.Sc. (Hons.) Biotechnology
                </p>

                <p className="timeline-description">

                  Biotechnology background followed
                  by a transition into data analytics,
                  machine learning and Generative AI.

                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =================================================
          SKILLS
          ================================================= */}

      <section
        id="skills"
        className="section skills-section"
      >

        <div className="section-head">

          <div>

            <p className="eyebrow">
              04 / TOOLKIT
            </p>

            <h2>

              The stack behind
              <br />

              the <em>analysis.</em>

            </h2>

          </div>

        </div>


        <div className="skills-grid">

          <div className="skill-card">

            <Database />

            <span>
              01
            </span>

            <h3>
              SQL & Data
            </h3>

            <p>

              Data extraction, joins,
              aggregations, cleaning,
              validation and analytical
              datasets.

            </p>

          </div>


          <div className="skill-card">

            <BarChart3 />

            <span>
              02
            </span>

            <h3>
              Power BI
            </h3>

            <p>

              KPI dashboards, reporting
              systems, business intelligence
              and data storytelling.

            </p>

          </div>


          <div className="skill-card">

            <Code2 />

            <span>
              03
            </span>

            <h3>
              Python
            </h3>

            <p>

              Pandas, NumPy, exploratory
              analysis, automation and
              analytical workflows.

            </p>

          </div>


          <div className="skill-card">

            <BrainCircuit />

            <span>
              04
            </span>

            <h3>
              AI & ML
            </h3>

            <p>

              Scikit-learn, Gemini API,
              machine learning, fraud
              detection and intelligent
              automation.

            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          DATA STRIP
          ================================================= */}

      <section className="data-section">

        <div className="data-grid">

          <div>

            <span>
              DATASETS
            </span>

            <strong>
              50K+
            </strong>

            <small>
              records analysed
            </small>

          </div>


          <div>

            <span>
              KPIs
            </span>

            <strong>
              10+
            </strong>

            <small>
              business metrics tracked
            </small>

          </div>


          <div>

            <span>
              PROJECTS
            </span>

            <strong>
              04
            </strong>

            <small>
              analytics & AI projects
            </small>

          </div>


          <div>

            <span>
              STACK
            </span>

            <strong>
              AI
            </strong>

            <small>
              analytics + automation
            </small>

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT
          ================================================= */}

      <section
        id="contact"
        className="contact section"
      >

        <Reveal>

          <p className="eyebrow">
            05 / CONTACT
          </p>

        </Reveal>


        <Reveal delay={0.08}>

          <h2>

            Have a messy dataset?
            <br />

            Let's make it <em>useful.</em>

          </h2>

        </Reveal>


        <Reveal delay={0.16}>

          <a
            className="contact-email"
            href="mailto:katariaayash28@gmail.com"
          >

            katariaayash28@gmail.com

            <ArrowUpRight />

          </a>

        </Reveal>


        <div className="socials">

          <a
            href="https://github.com/Katariayash28"
            target="_blank"
            rel="noreferrer"
          >

            GitHub

            <Github size={15} />

          </a>


          <a
            href="https://www.linkedin.com/in/yash-kataria/"
            target="_blank"
            rel="noreferrer"
          >

            LinkedIn

            <Linkedin size={15} />

          </a>


          <a
            href="mailto:katariaayash28@gmail.com"
          >

            Email

            <Mail size={15} />

          </a>

        </div>

      </section>


      {/* =================================================
          FOOTER
          ================================================= */}

      <footer>

        <span>
          YASH KATARIA
        </span>

        <span>
          DATA · AI · DECISIONS
        </span>

        <span>
          © 2026
        </span>

      </footer>

    </div>
  );
}


/* =========================================================
   RENDER
   ========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <App />
);