import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading1 } from "../ui/typography/heading1";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading1>Build better products with senior design help</Heading1>
            <p>
              Easily access a dedicated ux/ui product designer with our monthly
              subscription.
            </p>
            <div className="flex items-center gap-2">
              <button className="btn-primary">Try it for free</button>
              <div className="flex items-center gap-1">
                <Image src="/icon.svg" alt="Icon" width={16} height={16} />
                <span>Tag text</span>
              </div>
            </div>
          </ContentGrid>
        </div>
        <ImageBlock>
          <Image src="/hero.svg" alt="Next.js logo" width={480} height={50} />
        </ImageBlock>
      </Container>
    </Section>
  );
}
