"use client";
import Image from "next/image";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useRouter } from "next/navigation";

export default function Home() {
  const [init, SetInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      SetInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bio-container text-center">
        <Image
          className="rounded-full mx-auto"
          src="/images/erickson.jpg"
          alt={"Brendan Erickson headshot"}
          height={400}
          width={300}
        />
        <div className="my-5 montserrat">
          <p className="white">Hi, my name is</p>
          <p className="gold">Brendan Erickson</p>
          <p className="white">and I am a developer who values</p>
          <p className="gold">getting the details right on every project</p>
        </div>
        <div className="flex justify-evenly">
          <button className="rounded-full bg-transparent border border-blue-500 text-white py-2 px-4" onClick={() => handleClick('/portfolio')}>Portfolio</button>
          <button className="rounded-full bg-transparent border border-blue-500 text-white py-2 px-4" onClick={() => handleClick('/contact')}>Contact</button>
        </div>
      </div>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#0d47a1",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </main>
  );
}
