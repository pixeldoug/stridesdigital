import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading1 } from "../ui/typography/heading1";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";

export function PainSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading1>
              Stop losing time seeking the ideal design partner
            </Heading1>
            <p>
              You want to build great products, but hiring in-house,
              freelancers, or agencies can be taxing...
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
