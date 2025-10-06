  const scrollWithOffset = (e, targetId) => {
    e.preventDefault();

    // prefer exact form card for "waitlist", otherwise normal target
    const target =
      (targetId === "waitlist" &&
        (document.getElementById("waitlist") ||
          document.getElementById("waitlist-form") ||
          document.getElementById("footer-form") ||
          document.getElementById("join-waitlist") ||
          document.getElementById("cta-form") ||
          document.getElementById("footer"))) ||
      document.getElementById(targetId);

    const nav = document.querySelector("nav.sticky, .sticky.top-0, nav[role='navigation']");
    const offset = (nav?.offsetHeight ?? 72) + 12;

    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });

      if (targetId === "waitlist") {
        // focus first field after scroll
        setTimeout(() => {
          const firstField =
            target.querySelector('input[name="fullName"]') ||
            target.querySelector("input[type='text']") ||
            target.querySelector("input, select, textarea");
          firstField?.focus?.();
        }, 350);

        // keep URL hash consistent
        try { history.replaceState("#waitlist"); } catch { }
      }
    } else {
      // fallback to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };


  export default scrollWithOffset