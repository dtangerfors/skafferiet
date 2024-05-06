import clsx from "clsx";
import { Section, InnerSection } from "./containers";
import { Heading1, TextClassPrefix } from "../typography";

type HeroProps = {
  mode?: "dark" | "light";

  title: React.ReactNode;
}

export function Hero({mode = "dark", title}: HeroProps) {
  const textColor = clsx(mode === "dark" ? "text-primary-100" : "text-primary");
  return (
    <Section className={clsx("py-28", mode === "dark" ? "bg-primary" : "bg-primary-100")}>
      <InnerSection>
          <Heading1 color={textColor}>{title}</Heading1>
        </InnerSection>
    </Section>
  )
}