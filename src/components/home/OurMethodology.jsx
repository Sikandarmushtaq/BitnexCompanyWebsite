
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurMethodology.css";

gsap.registerPlugin(ScrollTrigger);

const methodologySteps = [
  {
    number: "01",
    title: "Decode",
    description:
      "We uncover the real challenge, understand the business behind it and identify what actually needs to change.",
    detail: "Understand before building.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We connect the requirements, technology and user experience into a clear system designed around the end goal.",
    detail: "Give every idea a structure.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Our team turns the architecture into functional digital products, software and experiences.",
    detail: "Make the vision work.",
  },
  {
    number: "04",
    title: "Stress-Test",
    description:
      "We challenge the solution through testing, refinement and real-world scenarios before it reaches users.",
    detail: "Challenge every detail.",
  },
  {
    number: "05",
    title: "Release",
    description:
      "We prepare, deploy and deliver the solution with the care needed for a reliable launch.",
    detail: "Move from build to reality.",
  },
  {
    number: "06",
    title: "Evolve",
    description:
      "We learn from performance, improve what matters and help the solution grow with the business.",
    detail: "Keep moving forward.",
  },
];

export default function OurMethodology() {
  const sectionRef = useRef(null);
  const progressCircleRef = useRef(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Updates the active methodology stage without unnecessary state updates.
  const changeActiveStep = (index) => {
    if (activeIndexRef.current === index) return;

    activeIndexRef.current = index;
    setActiveIndex(index);
  };

  // Creates the desktop scroll-driven cycle and mobile reveal animations.
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const progressCircle = progressCircleRef.current;

    if (!section || !progressCircle) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 901px)", () => {
      const circumference = 1539.4;

      gsap.set(progressCircle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });

      const progressAnimation = gsap.to(progressCircle, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const nextIndex = Math.min(
              methodologySteps.length - 1,
              Math.floor(self.progress * methodologySteps.length)
            );

            changeActiveStep(nextIndex);
          },
        },
      });

      gsap.fromTo(
        section.querySelectorAll(".method-stage"),
        { opacity: 0.35, scale: 0.94 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=3000",
            scrub: 1,
          },
        }
      );

      return () => {
        progressAnimation.scrollTrigger?.kill();
        progressAnimation.kill();
      };
    });

    media.add("(max-width: 900px)", () => {
      gsap.set(progressCircle, { strokeDashoffset: 1539.4 });

      const mobileSteps = section.querySelectorAll(".method-mobile-step");

      mobileSteps.forEach((step, index) => {
        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse",
              onEnter: () => changeActiveStep(index),
              onEnterBack: () => changeActiveStep(index),
            },
          }
        );
      });
    });

    return () => media.revert();
  }, []);

  const activeStep = methodologySteps[activeIndex];

  return (
    <section
      className="our-methodology"
      ref={sectionRef}
      id="our-methodology"
    >
      <div className="methodology-container">
        <div className="methodology-heading">
          <span className="methodology-eyebrow">
            THE BITNEX DEVELOPMENT CYCLE
          </span>

          <h2>
            OUR <span>METHOD.</span>
          </h2>

          <p>
            Every great solution follows a process.
            Ours is built to turn complexity into capability.
          </p>
        </div>

        <div className="methodology-desktop">
          <div className="methodology-orbit">
            <svg
              className="methodology-circle"
              viewBox="0 0 600 600"
              aria-hidden="true"
            >
              <circle
                className="method-circle-track"
                cx="300"
                cy="300"
                r="245"
              />

              <circle
                ref={progressCircleRef}
                className="method-circle-progress"
                cx="300"
                cy="300"
                r="245"
              />
            </svg>

            <div className="methodology-center">
              <span className="center-counter">
                STAGE {activeStep.number} / 06
              </span>

              <h3 key={activeStep.number}>
                {activeStep.title}
              </h3>

              <p key={`${activeStep.number}-description`}>
                {activeStep.description}
              </p>

              <span className="center-detail">
                {activeStep.detail}
              </span>
            </div>

            {methodologySteps.map((step, index) => (
              <div
                className={`method-stage method-stage-${index + 1} ${
                  activeIndex === index ? "is-active" : ""
                }`}
                key={step.number}
              >
                <span className="method-stage-number">
                  {step.number}
                </span>

                <span className="method-stage-title">
                  {step.title}
                </span>
              </div>
            ))}

            <div className="methodology-scroll-note">
              <span className="scroll-note-line" />
              SCROLL TO EXPLORE
            </div>
          </div>
        </div>

        <div className="methodology-mobile">
          <div className="mobile-method-list">
            {methodologySteps.map((step, index) => (
              <article
                className={`method-mobile-step ${
                  activeIndex === index ? "is-active" : ""
                }`}
                key={step.number}
              >
                <div className="mobile-step-marker">
                  <span>{step.number}</span>
                </div>

                <div className="mobile-step-content">
                  <span className="mobile-step-detail">
                    {step.detail}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
