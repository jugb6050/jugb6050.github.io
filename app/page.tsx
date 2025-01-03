import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-items-center items-center sm:items-center">
        <div className="flex flex-wrap justify-items-center items-center text-wrap">
          <a className="font-[family-name:var(--font-geist-mono)] text-center">
            Raiyan Jugbhery &ndash; Junior Developer&nbsp;|&nbsp;
          </a>

          <a
            className="font-[family-name:var(--font-geist-mono)] no-underline hover:underline text-center"
            href="https://github.com/jugb6050"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a>
          <a
            className="font-[family-name:var(--font-geist-mono)] no-underline hover:underline text-center"
            href="mailto:rjugbhery@gmail.com"
          >
            rjugbhery@gmail.com
          </a>
          <a className="font-[family-name:var(--font-geist-mono)]">
            &nbsp;| Toronto&sbquo; Ontario &sbquo; Canada | Can relocate
            anywhere
          </a>
        </div>

        <Image
          className=""
          src="/me.png"
          alt="picture of raiyan"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <a className="text-pretty">
            Welcome to my portfolio and about me. My name is Raiyan Jugbhery and
            I&apos;m 24. I am currently a junior developer aspiring to find a
            new work pathway and environment. I've graduated through Wilfrid
            Laurier University with a BSc in Computer Science with a minor in
            business. I have maintained a 3.0 GPA throughout my studies.
            I&apos;m based out of Toronto&sbquo; Ontario&sbquo; Canada&sbquo;
            but also have dual citizenship in the U.S.A and am willing to
            relocate anywhere that is required! I would say that I enjoy
            full-stack development&sbquo; but I definitely have the most fun
            with front-end design! I love modern&sbquo; minimalistic designs. I
            love diversifying my interests. It helps prevent burnout&sbquo; and
            also gives you multiple perspectives of life. My hobbies include:
            archery&sbquo; music production&sbquo; robotics&sbquo; gaming&sbquo;
            and piloting. Here&apos;s some fun facts about me! I released a
            bunch of music officially on music platforms like apple music and
            spotify! My main genres are RnB and Hip&ndash;Hop! I also played
            video games professionally&sbquo; mainly a game called
            Valorant&sbquo; developed by riot games&sbquo; whilst I finished my
            university studies. This helped pay a lot of my bills while I
            studied! I enjoy gaming with friends as leisure time because it also
            helps offload your daily stresses. Last fact is that I&apos;m
            currently finishing the next stages of my pilot&apos;s
            license&sbquo; and have also worked as a flight instructor&sbquo; at
            the same company that I worked as a software engineer for! I got
            lucky since it was a flight school & flight simulation company!
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
            <Image
              className=""
              src="/home.svg"
              alt="home logo"
              width={20}
              height={20}
            />
            Home
          </Link>

          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/pages/techstacks"
          >
            Tech Stacks
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/pages/projects"
          >
            Projects
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/pages/workexp"
          >
            Work Experiences
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/pages/hobbies"
          >
            Hobbies
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
          Email Me
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
          My Instagram
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
          My Github
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
          My Spotify
        </a>
      </footer>
    </div>
  );
}
