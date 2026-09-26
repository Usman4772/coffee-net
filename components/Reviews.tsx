import { site } from "@/lib/site";

const stats = [
  { value: 88, suffix: "%", label: "Recommend" },
  { value: 499, suffix: "", label: "Facebook reviews" },
  { value: 28, suffix: "K", label: "Followers" },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <div data-stagger>
          <p className="text-[0.72rem] tracking-[0.32em] uppercase text-gold">Reviews</p>
          <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">What Facebook already says.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft/80">
            On their public Facebook page, {site.facebookRecommend} Koffee Net, from{" "}
            {site.facebookReviewCount} reviews and about {site.facebookFollowers} followers.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} data-batch className="rounded-sm bg-paper px-6 py-8">
              <p
                className="font-display text-5xl text-ink tabular-nums"
                data-count={stat.value}
                data-suffix={stat.suffix}
              >
                {stat.value}
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <a
          href={site.facebook}
          data-reveal
          className="mt-8 inline-flex text-sm tracking-[0.16em] uppercase text-ink underline decoration-gold underline-offset-4"
          target="_blank"
          rel="noreferrer"
        >
          Read reviews on Facebook
        </a>
      </div>
    </section>
  );
}
