/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <span
        aria-hidden="true"
        className="size-8 md:size-10 p-1 rounded-full flex-none bg-background/30 dark:bg-background/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm ring-1 ring-white/10 inline-block"
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 rounded-full flex-none overflow-hidden object-contain bg-background/30 dark:bg-background/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm ring-1 ring-white/10 inline-block"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <span className="flex items-center gap-x-3 justify-between w-full text-left">
              <span className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <span className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <span className="font-semibold leading-none flex items-center gap-2 flex-wrap">
                    {work.company}
                    {work.badges && work.badges.length > 0 && (
                      <span className="inline-flex gap-1">
                        {work.badges.map((badge) => (
                          <span
                            key={badge}
                            className="inline-flex items-center rounded-md border border-transparent bg-secondary text-secondary-foreground text-[10px] px-1.5 py-0 h-4 font-normal"
                          >
                            {badge}
                          </span>
                        ))}
                      </span>
                    )}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                        aria-hidden="true"
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.end ? `${work.start} - ${work.end}` : work.start}
                </span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            <div className="prose dark:prose-invert max-w-full text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              <Markdown>{work.description}</Markdown>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

