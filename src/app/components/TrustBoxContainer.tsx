const TrustpilotWidget = () => {
  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-600 mb-6 flex justify-center items-center gap-2">
          We are rated <span className="font-semibold text-slate-800">4.7 out of 5</span> on
          <a
            href="https://uk.trustpilot.com/review/infinetsolutions.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#00B67A] font-semibold hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00B67A"
              className="w-4 h-4"
            >
              <path d="M12 2l2.93 5.93 6.54.95-4.73 4.61 1.12 6.51L12 17.77l-5.86 3.08 1.12-6.51-4.73-4.61 6.54-.95L12 2z" />
            </svg>
            Trustpilot
          </a>
        </p>
      </div>
    </section>
  );
};

export default TrustpilotWidget;
