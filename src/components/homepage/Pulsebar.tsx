export default function Pulsebar() {
  return (
    <div className="h-44 w-0.5 bg-primary rounded-full mr-4 lg:mr-8">
      <div className="pulsing-animation h-1/4 w-full bg-foreground shadow-glow-black dark:shadow-glow-green rounded-full"></div>
    </div>
  );
}
