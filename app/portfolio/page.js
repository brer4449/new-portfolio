"use client"
import useHandleClick from "../lib/navigation";
import Image from "next/image";

export default function Portfolio() {
  const handleClick = useHandleClick();

  return (
    <div className="background-container">
      <h1 className="text-center white montserrat py-5">Projects</h1>
      <div className="col-container flex justify-evenly mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mb-5">
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              San Antonio Board of Real Estate
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/sabor.png"
                alt={"San Antonio Board of Real Estate homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://sabor.com/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, C#, Sitecore, CSS</p>
          </div>
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Pri-Med Bootcamp
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/primed.png"
                alt={"Pri-med Bootcamp homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://bootcamp.pri-med.com/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, React, C#, Sitecore, CSS</p>
          </div>
        </div>
      </div>
      <div className="col-container flex justify-evenly mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mb-5">
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Federal Reserve Bank of New York
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/frbny.png"
                alt={"Federal Reserve Bank of New York homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://www.newyorkfed.org/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, C#, Sitecore, CSS</p>
          </div>
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              American Society of Civil Engineers
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/asce.png"
                alt={"American Society of Civil Engineers homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://futureworldvision.org/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, Next.js, React, HTML, CSS</p>
          </div>
        </div>
      </div>
      <div className="col-container flex justify-evenly mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mb-5">
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Department of Energy
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/doe.png"
                alt={"Department of Energy homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://science.osti.gov/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, C#, Sitecore, CSS</p>
          </div>
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Office of Minority Health
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/omh.png"
                alt={"Office of Minority Health homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://www.cms.gov/priorities/health-equity/minority-health" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: HTML, CSS, Drupal</p>
          </div>
        </div>
      </div>
      <div className="col-container flex justify-evenly mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mb-5">
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Sheet Metal and Air Conditioning Contractors&apos; National Association
              </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/smacna.png"
                alt={"Sheet Metal and Air Conditioning Contractors&apos; National Association homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://www.smacna.org/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, CSS, Kentico</p>
          </div>
          <div className="bg-gray-200 p-4 project-container rounded">
            <p className="text-center">
              Nothrop Grumman
            </p>
              <Image
                className="rounded-full mx-auto"
                src="/images/ngc.png"
                alt={"Nothrop Grumman homepage"}
                height={200}
                width={200}
              />
              <p>Demo <a href="https://www.northropgrumman.com/" className="underline" target="_blank" rel="noopener noreferrer">here</a></p>
              <p>Technologies used: Javascript, Next.js, C#, Sitecore, CSS</p>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-5 pb-5">
          <button className="rounded-full bg-transparent border border-blue-500 text-white py-2 px-4" onClick={() => handleClick("/")}>Home</button>
          <button className="rounded-full bg-transparent border border-blue-500 text-white py-2 px-4" onClick={() => handleClick("/contact")}>Contact</button>
        </div>
    </div>
  );
}
