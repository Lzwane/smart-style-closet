import { useState } from "react";

const AuthSection = () => {
  const [mode, setMode] = useState<"signup" | "signin">("signup");

  return (
    <section id="auth" className="relative overflow-hidden border-b border-border bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-5">
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            §03 — Membership
          </div>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-6xl">
            Join the
            <br />
            <em className="italic text-muted-foreground">closet.</em>
          </h2>
          <p className="mt-6 max-w-md text-foreground/80">
            Members unlock the virtual fitting room, exclusive drops, and member-only pricing on rentals.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/80">
            <li className="flex items-baseline gap-3"><span className="font-display text-foreground">01</span> Try-on with body measurements</li>
            <li className="flex items-baseline gap-3"><span className="font-display text-foreground">02</span> Mix &amp; match outfits virtually</li>
            <li className="flex items-baseline gap-3"><span className="font-display text-foreground">03</span> Reorder favourites in one tap</li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="border border-foreground bg-card">
            <div className="grid grid-cols-2 border-b border-foreground">
              <button
                onClick={() => setMode("signup")}
                className={`px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                  mode === "signup" ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                Sign up
              </button>
              <button
                onClick={() => setMode("signin")}
                className={`px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-colors ${
                  mode === "signin" ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                Sign in
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  mode === "signup"
                    ? "Welcome! In the next version this opens your fitting room."
                    : "Signing in opens the virtual fitting room."
                );
              }}
              className="grid grid-cols-1 gap-6 p-6 md:p-10"
            >
              {mode === "signup" && (
                <>
                  <Field label="Full name" id="fullname" placeholder="Prudence Ngwana" />
                  <Field label="Contact number" id="contact" type="tel" placeholder="+27 76 152 5879" />
                </>
              )}
              <Field label="Email" id="email" type="email" placeholder="you@university.ac.za" />
              {mode === "signin" && (
                <Field label="Password" id="pwd" type="password" placeholder="••••••••" />
              )}

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-sm bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                {mode === "signup" ? "Create account" : "Enter the fitting room"}
              </button>

              <p className="text-xs text-muted-foreground">
                {mode === "signup"
                  ? "By signing up you agree to SmartFit Closet's rental terms."
                  : "After sign in you'll be redirected to your virtual fitting room."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label htmlFor={id} className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      maxLength={120}
      className="mt-2 w-full border-b border-foreground bg-transparent py-3 text-lg outline-none focus:border-accent"
    />
  </div>
);

export default AuthSection;