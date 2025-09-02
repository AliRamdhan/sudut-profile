import TransitionLink from "@/components/shared/transition-link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";

const Cta = () => {
  return (
    <section className="w-full py-20 px-5 relative flex flex-col justify-center items-center overflow-visible">
      <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-4xl mx-auto">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-[68px] font-bold tracking-tighter max-w-3xl">
            SUDUT CORP
          </h2>
          <p className="max-w-xs md:max-w-2xl text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words">
            Build trust with potential customers, partners, and investors by
            showcasing a modern, fast, and mobile-friendly company profile
            website that reflects your professionalism.
          </p>
        </div>
        <div className="max-w-xs md:max-w-2xl  space-y-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8">
            <TransitionLink
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="px-[30px] py-2 bg-secondary text-secondary-foreground text-base font-medium leading-6 rounded-[99px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:bg-secondary/90 transition-all duration-200"
                size="lg"
              >
                <Mail /> sudutcorp@gmail.com
              </Button>
            </TransitionLink>
            <TransitionLink
              href="https://vercel.com/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="px-[30px] py-2 bg-secondary text-secondary-foreground text-base font-medium leading-6 rounded-[99px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.13)] hover:bg-secondary/90 transition-all duration-200"
                size="lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    d="M16 .5C7.44.5.5 7.44.5 
          16c0 2.82.74 5.56 2.15 
          7.96L.5 31.5l7.76-2.11A15.4 
          15.4 0 0 0 16 31.5C24.56 
          31.5 31.5 24.56 31.5 16S24.56.5 
          16 .5zm0 28a12.4 12.4 0 0 
          1-6.32-1.74l-.45-.26-4.6 
          1.25 1.23-4.48-.29-.46A12.46 
          12.46 0 0 1 3.5 16c0-6.9 
          5.6-12.5 12.5-12.5S28.5 9.1 
          28.5 16 22.9 28.5 16 
          28.5zm6.87-9.15c-.38-.19-2.24-1.1-2.58-1.23-.35-.13-.61-.19-.87.19s-1 
          1.23-1.23 1.49c-.23.26-.45.29-.83.1-.38-.19-1.6-.59-3.05-1.88a11.42 
          11.42 0 0 1-2.11-2.61c-.22-.38-.02-.59.17-.78.18-.18.39-.46.58-.69.2-.23.26-.39.39-.65.13-.26.06-.49-.03-.69-.1-.19-.87-2.1-1.2-2.89-.32-.77-.65-.66-.87-.67h-.74c-.26 
          0-.69.1-1.06.49-.36.39-1.39 1.35-1.39 3.3s1.43 3.82 1.63 4.09c.19.26 2.81 4.3 6.82 
          6.02.95.41 1.7.66 2.28.85.96.3 1.83.26 2.52.16.77-.12 
          2.24-.92 2.56-1.8.32-.89.32-1.65.23-1.81-.1-.16-.36-.26-.74-.45z"
                  />
                </svg>{" "}
                (+62) 81231313
              </Button>
            </TransitionLink>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              <svg
                role="img"
                aria-label="Facebook"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <title>Facebook</title>
                <path d="M22 12.073C22 6.484 17.523 2 12 2S2 6.484 2 12.073C2 17.09 5.657 21.254 10.438 21.98v-6.99H7.898v-2.92h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.444 2.92h-2.329v6.99C18.343 21.254 22 17.09 22 12.073z" />
              </svg>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              <svg
                role="img"
                aria-label="Instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.405a4.92 4.92 0 011.675 1.09c.48.48.81 1.05 1.09 1.675.165.46.352 1.26.405 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.43a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.46.165-1.26.352-2.43.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.405a4.902 4.902 0 01-1.675-1.09 4.902 4.902 0 01-1.09-1.675c-.165-.46-.352-1.26-.405-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.43a4.902 4.902 0 011.09-1.675 4.902 4.902 0 011.675-1.09c.46-.165 1.26-.352 2.43-.405C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.069-1.02.045-1.574.215-1.944.357-.495.18-.848.396-1.22.768-.372.372-.588.725-.768 1.22-.142.37-.312.924-.357 1.944-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.045 1.02.215 1.574.357 1.944.18.495.396.848.768 1.22.372.372.725.588 1.22.768.37.142.924.312 1.944.357 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.02-.045 1.574-.215 1.944-.357.495-.18.848-.396 1.22-.768.372-.372.588-.725.768-1.22.142-.37.312-.924.357-1.944.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.045-1.02-.215-1.574-.357-1.944-.18-.495-.396-.848-.768-1.22-.372-.372-.725-.588-1.22-.768-.37-.142-.924-.312-1.944-.357C15.548 4.013 15.17 4.001 12 4.001zM12 7.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 1.838a2.324 2.324 0 110 4.648 2.324 2.324 0 010-4.648zM17.844 6.162a1.02 1.02 0 11-2.04 0 1.02 1.02 0 012.04 0z" />
              </svg>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <title>Youtube</title>
                <path
                  d="M23.498 6.186a2.974 2.974 0 0 
        0-2.095-2.107C19.5 3.5 12 
        3.5 12 3.5s-7.5 0-9.403.579a2.974 
        2.974 0 0 0-2.095 2.107A31.38 
        31.38 0 0 0 .5 12a31.38 31.38 0 0 
        0 .002 5.814 2.974 2.974 0 0 0 
        2.095 2.107C4.5 20.5 12 
        20.5 12 20.5s7.5 0 9.403-.579a2.974 
        2.974 0 0 0 2.095-2.107A31.38 
        31.38 0 0 0 23.5 12a31.38 31.38 
        0 0 0-.002-5.814zM9.75 15.02V8.98L15.5 
        12l-5.75 3.02z"
                />
              </svg>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full bg-transparent"
            >
              <svg
                role="img"
                aria-label="Instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <title>Twitter</title>
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69a4.23 
        4.23 0 0 0 1.85-2.34 8.48 
        8.48 0 0 1-2.68 1.03 4.22 
        4.22 0 0 0-7.2 3.85A11.95 
        11.95 0 0 1 3.15 4.6a4.22 
        4.22 0 0 0 1.3 5.63 4.2 
        4.2 0 0 1-1.91-.53v.05a4.22 
        4.22 0 0 0 3.39 4.14 4.23 
        4.23 0 0 1-1.9.07 4.22 4.22 
        0 0 0 3.94 2.93A8.47 8.47 
        0 0 1 2 19.54a11.93 11.93 
        0 0 0 6.46 1.89c7.75 0 
        11.99-6.42 11.99-11.99 0-.18 
        0-.35-.01-.53A8.58 8.58 
        0 0 0 22.46 6z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
