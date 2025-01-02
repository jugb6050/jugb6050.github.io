import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          className=""
          src="/me.png"
          alt="picture of raiyan"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <a>
            Welcome to my portfolio. My name is Raiyan Jugbhery and I'm
            currently a junior developer aspiring to find a new work pathway and
            environment. I'm based out of Toronto, Ontario, Canada, but also
            have dual citizenship in the U.S.A and am willing to relocate
            anywhere that is required! I would say that I enjoy full-stack
            development, but I definitely have the most fun with front-end
            design! I love modern, minimalistic designs. I love diversifying my
            interests. It helps prevent burnout, and also gives you multiple
            perspectives of life. My hobbies include: archery, music production,
            robotics, gaming, and piloting. Here's some fun facts about me! I
            released a bunch of music officially on music platforms like apple
            music and spotify! My main genres are RnB and Hip-Hop! I also played
            video games professionally, mainly a game called Valorant, developed
            by Riot Games, whilst I finished my university studies. This helped
            pay a lot of my bills while I studied! I enjoy gaming with friends
            as leisure time because it also helps offload your daily stresses.
            Last fact, is that I'm currently finishing the next stages of my
            pilot's license, and have also worked as a flight instructor, at the
            same company that I worked as a software engineer for! I got lucky
            since it was a flight school & flight simulation company!
          </a>
        </ol>
        <a className="font-[family-name:var(--font-geist-mono)]">
          {" "}
          Click any of the buttons below to get to more specific information!
        </a>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
          >
            Back Home
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
        >
          <Image
            className="invert"
            aria-hidden
            src="/home.svg"
            alt="home icon"
            width={16}
            height={16}
          />
          Back to Home
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:rjugbhery@gmail.com"
          target="_blank"
        >
          <Image
            className="invert"
            aria-hidden
            src="/email.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          Email
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/raiyanj_/"
          target="_blank"
        >
          <Image
            className="invert"
            aria-hidden
            src="/instagram.png"
            alt="Instagram icon"
            width={23}
            height={23}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-1 hover:underline hover:underline-offset-4"
          href="https://github.com/jugb6050"
          target="_blank"
        >
          <Image
            className="invert"
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={20}
            height={20}
          />
          Github
        </a>
        <a
          className="flex items-center gap-0 hover:underline hover:underline-offset-4"
          href="https://open.spotify.com/artist/3T19bmRvGGRAV8u4QMeaP3?si=-Gi9PJ9XToirZ5iINxGgcQ"
          target="_blank"
        >
          <Image
            className="invert"
            aria-hidden
            src="/spotify.svg"
            alt="Spotify icon"
            width={32}
            height={32}
          />
          Spotify
        </a>
      </footer>
    </div>
  );
}
