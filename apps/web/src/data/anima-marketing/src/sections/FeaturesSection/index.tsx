import { FeatureCard } from "@/components/FeatureCard";

export const FeaturesSection = () => {
  return (
    <section data-uid="siEjPThy4SAiEG59" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] w-full mt-0 mx-auto py-10 md:mt-[100px]">
      <div data-uid="Ot8ym4DI7ibCPfYY" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] mb-8 pl-0 md:mb-16 md:pl-24">
        <span data-uid="2nPjiHcWmqINowYR" className="text-transparent items-center self-start bg-clip-text bg-[linear-gradient(to_right_in_oklab,rgba(252,253,255,0.937)_0%,rgba(217,237,255,0.365)_100%)] box-border gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 mb-6">
          <img data-uid="0UWm8q7MA8K4Bkqg"
            src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-9.svg"
            alt="Icon"
            className="text-sky-50/70 box-border caret-transparent h-6 w-[18px]"
          />
          Configurable
        </span>
        <h2 data-uid="vrWoZXIRYMRbKcmS" className="relative text-5xl bg-clip-text bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_30%,rgba(255,255,255,0.5))] box-border caret-transparent tracking-[-2.4px] leading-[57.6px] min-h-[auto] min-w-[auto] mb-2 font-abcfavorit md:text-[56px] md:tracking-[-2.8px] md:leading-[67.2px]">
          Everything you{" "}
          <br data-uid="gwZyycuENYYB148z" className="text-5xl box-border caret-transparent hidden tracking-[-2.4px] leading-[57.6px] md:text-[56px] md:block md:tracking-[-2.8px] md:leading-[67.2px]" />
          need in one place
        </h2>
        <p data-uid="GVoYFnRnBP9HI3dY" className="text-neutral-400 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          Take advantage of many other features that{" "}
          <br data-uid="BpRUWs65K9kmzDFJ" className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:block md:leading-[27px]" />
          make email creation hyper-efficient.
        </p>
      </div>
      <div data-uid="t609QdL4rczmtUN6" className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 w-full overflow-hidden md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <FeatureCard data-uid="haCNs4ZUYPeExsng"
          variant="overflow-hidden md:col-end-[span_1] md:col-start-[span_1]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-12.svg"
          title="Personalize with variables"
          description="Add custom variables such as first name and last name. Configure a fallback in case these values are undefined."
        />
        <FeatureCard data-uid="REjxQ8Wlfj9YFLyh"
          variant="overflow-hidden md:col-end-[span_1] md:col-start-[span_1]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-14.svg"
          title="Markdown support"
          description="If you prefer to writing in Markdown, you can do that too. It works with headings, lists, italic, bold, links, and quotes."
        />
        <FeatureCard data-uid="GI9kq91QlsqCJTSl"
          variant="overflow-hidden md:col-end-[span_1] md:col-start-[span_1]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-16.svg"
          title="Schedule to send later"
          description="Plan the sending day and time of an email broadcast using natural language input such as ”in 1 hour”."
          previewImageSrc="https://resend.com/_next/image?url=%2Fstatic%2Fproduct-pages%2Fbroadcast-schedule.png&w=1920&q=100&dpl=dpl_7HY7yTD9UaFxQ84hnFhtKeDC7ii6"
          previewImageAlt="Schedule interface preview"
        />
      </div>
    </section>
  );
};
