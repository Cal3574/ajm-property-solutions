import { Counter } from "@/components/Counter";
import { siteConfig } from "@/lib/site-config";

const stats = [
  { label: "Years Experience", value: siteConfig.stats.yearsExperience, suffix: "" },
  {
    label: "Projects Completed",
    value: siteConfig.stats.projectsCompleted,
    suffix: "+",
  },
  {
    label: "Happy Customers",
    value: siteConfig.stats.happyCustomers,
    suffix: "+",
  },
];

export function Stats() {
  return (
    <section className="border-y border-border-hairline bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-3 lg:px-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-heading text-5xl font-bold text-accent sm:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-3 text-sm tracking-wide text-foreground-muted uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
