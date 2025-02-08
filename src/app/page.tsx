import { Heading1 } from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center self-stretch">
        <section className="flex w-[62rem] px-6 justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-start gap-6 flex-1">
            <div className="flex flex-col items-start">
              <Heading1>Build better products with senior design help</Heading1>
              <h1 className="text-h1">
                Build better products with senior design help
              </h1>
              <p>
                Easily access a dedicated ux/ui product designer with our
                monthly subscription.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-primary">Try it for free</button>
              <div className="flex items-center gap-1">
                <Image src="/icon.svg" alt="Icon" width={16} height={16} />
                <span>Tag text</span>
              </div>
            </div>
            <div className="flex gap-4">
              <span>Tag 1</span>
              <span>Tag 2</span>
              <span>Tag 3</span>
            </div>
          </div>
          <div>
            <Image src="/hero.svg" alt="Next.js logo" width={480} height={50} />
          </div>
        </section>
      </div>
    </>
  );
}
