import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading2 } from "../ui/typography/heading2";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";
import { TextLarge } from "../ui/typography/textLarge";

export function CommunicationSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading2>Streamline the communication</Heading2>
            <TextLarge>
              Manage your design requests in your board or invite us to your
              preferred tool, like Slack.
            </TextLarge>
          </ContentGrid>
        </div>
        <ImageBlock>
          <Image
            src="/coom-image.png"
            alt="Next.js logo"
            width={480}
            height={50}
          />
        </ImageBlock>
      </Container>
    </Section>
  );
}
