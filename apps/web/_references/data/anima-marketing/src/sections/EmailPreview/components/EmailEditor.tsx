import { EmailEditorHeader } from "@/sections/EmailPreview/components/EmailEditorHeader";

export const EmailEditor = () => {
  return (
    <div data-uid="Bqw7m4Ldf0uGR8LN" className="[mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] relative bg-[radial-gradient(41.07%_8.33%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%),linear-gradient(rgb(16,16,16)_0%,rgba(0,0,0,0.8)_100%)] bg-size-[auto,auto] box-border caret-transparent h-[600px] [mask-size:100%_100%] border border-blue-100/20 bg-[position:0%,0%_0%,0%] mt-16 rounded-2xl border-solid">
      <div data-uid="IMZUW1uEHlYckHw8" className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_50%,rgba(255,255,255,0)_100%)] box-border caret-transparent blur-[3px] h-px pointer-events-none w-[300px] left-2/4 top-0 md:w-[600px]"></div>
      <div data-uid="60jMYIy9IkkdVzzo" className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_50%,rgba(255,255,255,0)_100%)] box-border caret-transparent blur-[10px] h-px pointer-events-none w-[300px] left-2/4 top-0 md:w-[600px]"></div>
      <div data-uid="30vGUsteTZ1yh1sE" className="absolute bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgb(155,124,255)_50%,rgba(255,255,255,0)_100%)] box-border caret-transparent h-px pointer-events-none w-[300px] left-2/4 top-0"></div>
      <EmailEditorHeader data-uid="Vx08AnhDJFUCjl5R" />
      <div data-uid="GpXRSlV3NPd5tEz7" className="bg-black box-border caret-transparent w-full border-zinc-100 mt-0 mx-auto rounded-t-2xl border-0 border-solid md:w-3/5 md:border md:border-zinc-800 md:mt-10">
        <div data-uid="Q7miCD2IvCwkkmq4" className="text-sm box-border caret-transparent leading-5 pt-2 px-8">
          <div data-uid="NhpeW1xhjNtaXNki" className="items-center box-border caret-transparent flex border-blue-100/20 py-3 border-b border-solid">
            <span data-uid="MQWqNkM9s7AJn8HK" className="text-sky-100/50 box-border caret-transparent block min-h-[auto] min-w-[auto] w-24">
              From
            </span>
            <span data-uid="AP1fVr6r5srawZ5x" className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
              your.name@acme.com
            </span>
          </div>
          <div data-uid="QUXxLtL7nXPXvZgy" className="items-center box-border caret-transparent flex border-blue-100/20 py-3 border-b border-solid">
            <span data-uid="qKGunZJIrFg28CW4" className="text-sky-100/50 box-border caret-transparent block min-h-[auto] min-w-[auto] w-24">
              To
            </span>
            <span data-uid="OyEeUFYcmL2EH5Ap" className="items-center bg-blue-100/10 box-border caret-transparent gap-x-1.5 flex min-h-[auto] min-w-[auto] gap-y-1.5 -ml-1 pl-2 pr-3 py-1 rounded-[3.35544e+07px]">
              <img data-uid="XMVy9vF2veaxkrWS"
                src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-8.svg"
                alt="Icon"
                className="box-border caret-transparent h-[18px] w-[18px]"
              />
              Newsletter{" "}
              <span data-uid="1oUycREOkLcigR3C" className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                Subscribers
              </span>
            </span>
          </div>
          <div data-uid="QcWyu1fvf5PV4qJB" className="items-center box-border caret-transparent flex py-3">
            <span data-uid="Q8gCLmvQfayKvnYk" className="text-sky-100/50 box-border caret-transparent block min-h-[auto] min-w-[auto] w-24">
              Subject
            </span>
            <span data-uid="KcI0RZoZ4oa4yV3h" className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
              Weekly Newsletter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
