import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading2 } from "../ui/typography/heading2";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";
import { TextLarge } from "../ui/typography/textLarge";

export function PainSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading2>
              Stop losing time seeking the ideal design partner
            </Heading2>
            <TextLarge>
              You want to build great products, but hiring in-house,
              freelancers, or agencies can be taxing...
            </TextLarge>
          </ContentGrid>
        </div>
        <ImageBlock>
          <Image
            src="/pain-image.png"
            alt="Next.js logo"
            width={480}
            height={50}
          />
        </ImageBlock>
      </Container>
    </Section>
  );
}
