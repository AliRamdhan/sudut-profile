/* eslint-disable @next/next/no-img-element */
import TransitionLink from "@/components/shared/transition-link";
import React from "react";

const TalentsCard = () => {
  return (
    <div className="relative w-full max-w-md mx-auto bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl overflow-hidden shadow-2xl">
      {/* Profile Image */}
      <div className="relative h-[550px] group">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <TransitionLink href={"talents/talents-1"}>
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Name */}
            <h1 className="text-3xl font-bold mb-4 leading-tight">
              Jerome Polin Sijabat
            </h1>

            {/* Bio */}
            <div className="group">
              <p
                className="text-sm leading-relaxed mb-6 text-gray-100 
               overflow-hidden transition-all duration-500 ease-in-out
               max-h-[52px] group-hover:max-h-[130px]"
              >
                Jerome is widely known as the creator behind Nihongo Mantappu
                YouTube channel, co-founder of Mantappu Corp, and Founder of
                Mantappu Academy who has established himself as a household name
                in Indonesia&apos;s YouTube community.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Instagram"
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
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Twitter"
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
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M23.5 6.2a4 4 0 0 0-2.8-2.8C18.8 3 12 3 12 3s-6.8 0-8.7.4A4 4 0 0 0 .5 6.2 41 41 0 0 0 0 12c0 1.9.1 3.8.5 5.8a4 4 0 0 0 2.8 2.8C5.2 21 12 21 12 21s6.8 0 8.7-.4a4 4 0 0 0 2.8-2.8c.4-2 .5-3.9.5-5.8s-.1-3.8-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </TransitionLink>
      </div>
    </div>
  );
};

export default TalentsCard;
