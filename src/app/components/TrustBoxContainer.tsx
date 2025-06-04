import { useEffect } from "react";

const TrustpilotWidget = () => {
  useEffect(() => {
    const scriptId = "trustbox-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-10">
      <div
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id="53aa8807dec7e10d38f59f36"
        data-businessunit-id="YOUR_BUSINESS_UNIT_ID"
        data-style-height="150px"
        data-style-width="100%"
        data-theme="light"
      >
        <a href="https://uk.trustpilot.com/review/infinetsolutions.co.uk" target="_blank" rel="noopener noreferrer">
          Trustpilot
        </a>
      </div>
    </div>
  );
};

export default TrustpilotWidget;