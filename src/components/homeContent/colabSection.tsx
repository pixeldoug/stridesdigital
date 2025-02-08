import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading1 } from "../ui/typography/heading1";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";

export function CollaborationSection() {
  return (
    <Section>
      <Container>
        <ImageBlock>
          <Image
            src="/collab-image.png"
            alt="Next.js logo"
            width={480}
            height={50}
          />
        </ImageBlock>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading1>Iterate Work that Allows Collaboration</Heading1>
            <p>
              Get daily updates summaries to give you a quick overview of the
              progress made.
            </p>
          </ContentGrid>
        </div>
      </Container>
    </Section>
  );
}
