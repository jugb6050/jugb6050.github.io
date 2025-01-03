import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <a className="text-2xl items-center justify-center font-[family-name:var(--font-geist-mono)]">
          Here are some of the tech stacks that I use!
        </a>
        <div className="flex gap-20 flex-wrap items-center justify-center pt-20 pb-10">
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/html.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/tailwind.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/javascript.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/ts.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover p-6"
            src="/react.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="flex gap-20 flex-wrap items-center justify-center pb-14">
          <Image
            className="rounded-full h-auto max-w-full object-cover invert"
            src="/slownext.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/docker.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/kubernetes.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/swift.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
          <Image
            className="rounded-full h-auto max-w-full object-cover"
            src="/mongodb.gif"
            alt="picture of raiyan"
            width={200}
            height={200}
            priority
          />
        </div>
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
