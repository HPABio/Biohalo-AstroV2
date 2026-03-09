import { FeatureCard } from "@/components/FeatureCard";

export const UnsubscribeSection = () => {
  return (
    <section data-uid="uxHYG0TDk2iHmx6Q" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] w-full mt-0 mx-auto pb-12 md:mt-[100px] md:pb-24">
      <div data-uid="7NTsnQbgX7jALAWZ" className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] mb-8 pl-0 md:mb-16 md:pl-24">
        <span data-uid="OYov4wXRWg9R1SSc" className="text-transparent items-center self-start bg-clip-text bg-[linear-gradient(to_right_in_oklab,rgba(252,253,255,0.937)_0%,rgba(217,237,255,0.365)_100%)] box-border gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 mb-6">
          <img data-uid="KCGL8wiEUOzAJuBB"
            src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-18.svg"
            alt="Icon"
            className="text-sky-50/70 box-border caret-transparent h-6 w-[18px]"
          />
          Unsubscribe Handling
        </span>
        <h2 data-uid="QmuH3S5wabduJ4Ow" className="relative text-5xl bg-clip-text bg-[linear-gradient(to_right_bottom,rgb(255,255,255)_30%,rgba(255,255,255,0.5))] box-border caret-transparent tracking-[-2.4px] leading-[57.6px] min-h-[auto] min-w-[auto] mb-2 font-abcfavorit md:text-[56px] md:tracking-[-2.8px] md:leading-[67.2px]">
          View and control{" "}
          <br data-uid="hc9boj0I4ZUTTHf3" className="text-5xl box-border caret-transparent hidden tracking-[-2.4px] leading-[57.6px] md:text-[56px] md:block md:tracking-[-2.8px] md:leading-[67.2px]" />
          unsubscribe status
        </h2>
        <p data-uid="GkBHLSY9NSE0KXrY" className="text-neutral-400 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          It is important to give your contacts the ability to unsubscribe from
          emails.{" "}
          <br data-uid="ilfbZmL3yH4xvh1s" className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:block md:leading-[27px]" />
          Resend gives you the ability to include unsubscribe links and manages
          that flow for you.
        </p>
      </div>
      <div data-uid="e4x1p6d5dvWXXqcW" className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] min-h-[auto] min-w-[auto] gap-y-8 w-full overflow-hidden md:grid-cols-[repeat(3,minmax(0px,1fr))]">
        <FeatureCard data-uid="PGPwu8nMHwAjVeub"
          variant="md:col-end-[span_1] md:col-start-[span_1]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-21.svg"
          title="Audience metrics"
          description="Visualize the growth of your contacts and track unsubscribes over time. Use these insights to improve your email strategy."
        />
        <FeatureCard data-uid="xqbK5YIwkAXL5qV1"
          variant="overflow-hidden md:col-end-[span_2] md:col-start-[span_2]"
          iconSrc="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-24.svg"
          title="Automatic Unsubscribes"
          description="When a contact unsubscribes, Resend will automatically handle the unsubscribe flow for you, and they will be skipped when sending the next Broadcast."
        />
      </div>
    </section>
  );
};
