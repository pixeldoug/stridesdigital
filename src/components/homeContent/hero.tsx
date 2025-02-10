"use client";

import Button from "../ui/buttons";
import { Container } from "../ui/layout/container";
import { ContentGrid } from "../ui/layout/contentGrid";
import { Heading1 } from "../ui/typography/heading1";
import Image from "next/image";
import { ImageBlock } from "../ui/layout/imageBlock";
import React from "react";
import { Section } from "../ui/layout/sections";
import { Star } from "phosphor-react";
import Tag from "../ui/tag";
import { TextLarge } from "../ui/typography/textLarge";

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col justify-center items-start gap-6 flex-1">
          <ContentGrid>
            <Heading1>Build better products with senior design help</Heading1>
            <TextLarge>
              Easily access a dedicated ux/ui product designer with our monthly
              subscription.
            </TextLarge>

            <div className="flex items-center gap-2">
              <Button variant="primary" label="Try it for free" />
              <Tag
                label={"Test"}
                variant={"default"}
                icon={
                  <Star size={16} weight="fill" className="text-[#64bc8c]" />
                }
              />
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
