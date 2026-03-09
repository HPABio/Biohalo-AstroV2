import { MetricCard } from "@/components/MetricCard";

export const MetricsSection = () => {
  return (
    <section data-uid="dCKnJ54chAYHECHf" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] w-full mt-[100px] mx-auto pt-0 pb-10 md:pt-10">
      <div data-uid="qy96KsOarWtcIoz7" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] mb-8 pl-0 md:mb-16 md:pl-24">
        <span data-uid="Z4rPUnkQ3Va4FVCS" className="text-transparent items-center self-start bg-clip-text bg-[linear-gradient(to_right_in_oklab,rgba(252,253,255,0.937)_0%,rgba(217,237,255,0.365)_100%)] box-border gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 mb-6">
          <img data-uid="4K0LYy2xrzochxgN"
            src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-33.svg"
            alt="Icon"
            className="text-sky-50/70 box-border caret-transparent h-6 w-[18px]"
          />
          Metrics
        </span>
        <h2 data-uid="4O1we7FAqJCpAxx3" className="relative text-5xl bg-clip-text bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_30%,rgba(255,255,255,0.5))] box-border caret-transparent tracking-[-2.4px] leading-[57.6px] min-h-[auto] min-w-[auto] mb-2 font-abcfavorit md:text-[56px] md:tracking-[-2.8px] md:leading-[67.2px]">
          Analyze and{" "}
          <br data-uid="VBUZgFFBTfNexTGw" className="text-5xl box-border caret-transparent hidden tracking-[-2.4px] leading-[57.6px] md:text-[56px] md:block md:tracking-[-2.8px] md:leading-[67.2px]" />
          track performance
        </h2>
        <p data-uid="vF367fpYB30bA5gb" className="text-neutral-400 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          Straightforward analytics and reporting tools that will help you send
          better emails.{" "}
          <br data-uid="1K0TPX032tQT5JR9" className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:block md:leading-[27px]" />
          Unlock powerful insights and understand exactly how your audience is
          interacting with you.
        </p>
      </div>
      <div data-uid="JkGwglCZ5cLY9Jf1" className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 w-full overflow-hidden md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <MetricCard data-uid="Ebmpg7UPWFd00Pxx"
          variant="md:col-end-[span_1] md:col-start-[span_1]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-34.svg"
          title="Visualize email results"
          description="See high-level trends for email sending over time. Get better results with lessons learned from your data."
          metrics={[
            {
              iconClasses:
                "absolute aspect-square bg-[linear-gradient(in_oklab,rgb(98,255,179)_0%,rgb(0,255,117)_100%)] box-border caret-transparent blur-2xl w-28 rounded-[3.35544e+07px] -right-3 -top-3",
              title: "Deliverability",
              percentage: "98%",
              items: [
                {
                  iconClasses:
                    "absolute bg-emerald-300 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Delivered",
                  value: "3,204",
                },
                {
                  iconClasses:
                    "absolute bg-rose-700 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Bounced",
                  value: "60",
                },
              ],
            },
            {
              iconClasses:
                "absolute aspect-square bg-[linear-gradient(in_oklab,rgb(43,242,255)_0%,rgb(0,238,255)_100%)] box-border caret-transparent blur-2xl w-28 rounded-[3.35544e+07px] -right-3 -top-3",
              title: "Engagement",
              percentage: "41%",
              items: [
                {
                  iconClasses:
                    "absolute bg-sky-400 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Opened",
                  value: "1,343",
                },
                {
                  iconClasses:
                    "absolute bg-fuchsia-500 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Clicked",
                  value: "343",
                },
              ],
            },
            {
              iconClasses:
                "absolute aspect-square bg-[linear-gradient(in_oklab,rgb(196,32,52)_0%,rgb(255,0,30)_100%)] box-border caret-transparent blur-2xl w-28 rounded-[3.35544e+07px] -right-3 -top-3",
              title: "Opt-out",
              percentage: "1%",
              items: [
                {
                  iconClasses:
                    "absolute bg-rose-700 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Unsubscribed",
                  value: "30",
                },
                {
                  iconClasses:
                    "absolute bg-yellow-400 box-border caret-transparent rounded-[3.35544e+07px] scale-[1.99784] inset-0",
                  label: "Complained",
                  value: "3",
                },
              ],
            },
          ]}
        />
        <MetricCard data-uid="bKi4sw65GHfnM4rs"
          variant="md:col-end-[span_2] md:col-start-[span_2]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-40.svg"
          title="Understand engagement on an individual level"
          description="Track engagement and gain insights into the performance of your emails with open/click tracking. See exactly who opened and what links each person clicked."
          topLinks={[
            {
              iconSrc:
                "https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-35.svg",
              domain: "fey.com/",
              path: "new-updates",
              count: "838",
            },
            {
              iconSrc:
                "https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-37.svg",
              domain: "apple.com/",
              path: "developers",
              count: "134",
            },
            {
              iconSrc:
                "https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-38.svg",
              domain: "acme.com/",
              path: "discord",
              count: "3",
            },
          ]}
          openedByUsers={[
            {
              avatarSrc:
                "https://resend.com/_next/image?url=%2Fstatic%2Fproduct-pages%2Funderstand-engagement-avatar-01.jpg&w=48&q=75&dpl=dpl_7HY7yTD9UaFxQ84hnFhtKeDC7ii6",
              emailPrefix: "tsmith@",
              emailDomain: "icloud.com",
              count: "10",
            },
            {
              avatarSrc:
                "https://resend.com/_next/image?url=%2Fstatic%2Fproduct-pages%2Funderstand-engagement-avatar-02.jpg&w=48&q=75&dpl=dpl_7HY7yTD9UaFxQ84hnFhtKeDC7ii6",
              emailPrefix: "frivera@",
              emailDomain: "gmail.com",
              count: "5",
            },
          ]}
        />
      </div>
    </section>
  );
};
