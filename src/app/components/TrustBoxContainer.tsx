import { useEffect } from "react";

const TrustpilotWidget = () => {
  useEffect(() => {
    const scriptId = "trustbox-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="w-full px-4 py-12 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
          Trustpilot Reviews
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          We’re rated excellent by our customers
        </p>

        <div className="bg-white dark:bg-slate-800 border border-[#00B67A] shadow-md rounded-xl p-6">
          <div
            className="trustpilot-widget"
            data-locale="en-GB"
            data-template-id="53aa8807dec7e10d38f59f36"
            data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
            data-style-height="150px"
            data-style-width="100%"
            data-theme="light"
          >
            <a
              href="https://uk.trustpilot.com/review/infinetsolutions.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B67A] font-medium hover:underline"
            >
              View our Trustpilot reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
