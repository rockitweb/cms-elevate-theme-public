import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card.js";

export function SemanticCard({
  as: Component = "article",
  title,
  description,
  children,
  footer,
}: {
  as?: "article" | "section";
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <Card>
      <Component aria-labelledby="card-title">
        <CardHeader>
          <header>
            <CardTitle>
              <h2 id="card-title">{title}</h2>
            </CardTitle>
            {description && (
              <CardDescription>
                <p>{description}</p>
              </CardDescription>
            )}
          </header>
        </CardHeader>

        <CardContent>{children}</CardContent>

        {footer && (
          <CardFooter>
            <footer>{footer}</footer>
          </CardFooter>
        )}
      </Component>
    </Card>
  );
}
