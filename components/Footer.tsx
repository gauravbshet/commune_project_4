import TreeMark from "./TreeMark";

const links = ["Home", "Our villas", "About Us", "Contact", "Meet Istria"];

export default function Footer() {
  return (
    <footer id="footer" className="bg-white relative overflow-hidden">
      {/* torn paper edge */}
      <svg
        aria-hidden
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 text-sage-deep block"
      >
        <path
          d="M0,20 C120,45 240,0 360,25 C480,50 600,10 720,30 C840,50 960,5 1080,25 C1200,45 1320,10 1440,25 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="grid md:grid-cols-2">
        <div className="px-6 sm:px-12 py-16">
          <TreeMark className="w-12 h-14 text-sage-deep mb-10" />
          <nav className="flex flex-col gap-2 mb-10">
            {links.map((l) => (
              <a
                key={l}
                href="#hero"
                className="font-display text-3xl sm:text-4xl text-ink hover:text-sage-dark transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <a href="#" className="text-sm text-ink/60 hover:text-sage-dark underline underline-offset-4">
            Privacy Policy
          </a>
          <div className="mt-8 text-sm text-sage-dark space-y-1">
            <p>
              <a href="mailto:info@greentree.hr" className="hover:underline">
                info@greentree.hr
              </a>
            </p>
            <p>
              <a href="tel:+385989440540" className="hover:underline">
                +385 989440540
              </a>
            </p>
          </div>
        </div>

        <div className="bg-bark text-linen px-6 sm:px-12 py-16 flex flex-col justify-between">
          <div>
            <span className="font-script text-3xl sm:text-4xl block">
              Sign in to our
            </span>
            <h3 className="font-display font-medium text-5xl sm:text-6xl -mt-1 mb-10">
              Newsletter
            </h3>

            <form className="flex items-stretch border-b border-linen/40 max-w-md">
              <input
                type="email"
                placeholder="Enter you e-mail"
                className="flex-1 bg-transparent py-4 text-sm placeholder:text-linen/50 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-linen text-bark w-14 flex items-center justify-center shrink-0"
              >
                &#8594;
              </button>
            </form>
          </div>

          <p className="text-linen/70 text-sm mt-16">
            &copy; {new Date().getFullYear()} Green Tree Villas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
