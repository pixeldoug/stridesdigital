import { Container } from "../ui/layout/container";
import { Heading1 } from "../ui/typography/heading1";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";

export function TeamSection() {
  return (
    <Section>
      <Container>
        <ImageBlock>
          <Image
            src="/team-image.png"
            alt="Next.js logo"
            width={480}
            height={50}
          />
        </ImageBlock>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <div className="flex flex-col items-start">
            <Heading1>Work with Top 1% Seniors Designers</Heading1>
            <p>
              Get designers who've worked with Fortune 500 companies and
              startups at a lower cost than direct hiring.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-primary">Try it for free</button>
            <div className="flex items-center gap-1">
              <Image src="/icon.svg" alt="Icon" width={16} height={16} />
              <span>Tag text</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
