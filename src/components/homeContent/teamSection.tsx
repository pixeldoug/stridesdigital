import Button from "../ui/buttons";
import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading2 } from "../ui/typography/heading2";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";
import { TextLarge } from "../ui/typography/textLarge";

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
          <ContentGrid>
            <Heading2>Work with Top 1% Seniors Designers</Heading2>
            <TextLarge>
              Get designers who've worked with Fortune 500 companies and
              startups at a lower cost than direct hiring.
            </TextLarge>

            <Button variant="outline" label="Try 7 days for free" />
          </ContentGrid>
        </div>
      </Container>
    </Section>
  );
}
