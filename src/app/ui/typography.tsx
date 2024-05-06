import clsx from "clsx";

export type TextClassPrefix<T extends string> = T extends string ? `text-${T}` : T;

type TextProps = {
  children: React.ReactNode;

  color?: string;
}

export const Heading1 = ({children, color}: TextProps) => (
  <h1 className={clsx("font-serif text-4xl lg:text-6xl", color ? color : "text-primary")}>{children}</h1>
)

export const Heading2 = ({children, color}: TextProps) => (
  <h2 className={clsx("font-serif text-2xl lg:text-3xl", color ? color : "text-primary")}>{children}</h2>
)

export const Paragraph = ({children, color}: TextProps) => (
  <p className={clsx("font-sans font-normal text-base leading-loose pb-[1em] last:pb-0", color ? color : "text-gray-800")}>{children}</p>
)

export const typography = {
  heading1: ({ node, children }) => (<Heading1>{children}</Heading1>),
  heading2: ({ node, children }) => (<Heading2>{children}</Heading2>),
  paragraph: ({ node, children }) => (<Paragraph>{children}</Paragraph>)
}