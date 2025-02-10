import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading2 } from "../ui/typography/heading2";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";
import { TextLarge } from "../ui/typography/textLarge";

export function AboutPricingSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading2>Transparent and Predictable Pricing</Heading2>
            <TextLarge>
              If you need to cancel your plan, it’s ok. No contracts or hidden
              taxes.
            </TextLarge>

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
          <Image
            src="/about-pricing-image.png"
            alt="Next.js logo"
            width={480}
            height={50}
          />
        </ImageBlock>
      </Container>
    </Section>
  );
}
