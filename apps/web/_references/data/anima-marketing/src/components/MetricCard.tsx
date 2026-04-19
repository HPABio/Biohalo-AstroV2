import React, { Fragment } from 'react';

export type MetricCardProps = {
  variant: string;
  iconSrc: string;
  title: string;
  description: string;
  metrics?: Array<{
    iconClasses: string;
    title: string;
    percentage: string;
    items: Array<{
      iconClasses: string;
      label: string;
      value: string;
    }>;
  }>;
  topLinks?: Array<{
    iconSrc: string;
    domain: string;
    path: string;
    count: string;
  }>;
  openedByUsers?: Array<{
    avatarSrc: string;
    emailPrefix: string;
    emailDomain: string;
    count: string;
  }>;
};

export const MetricCard = (props: MetricCardProps) => {
  return (
    <div data-uid="PUUU50zZBhQC6NHX"
      className={`relative bg-[radial-gradient(29.48%_34.97%_at_0%_58.67%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0)_100%),linear-gradient(rgb(17,17,17)_0%,rgba(0,0,0,0.5)_100%)] bg-size-[auto,auto] box-border caret-transparent col-end-auto col-start-auto min-h-[auto] min-w-[auto] border border-blue-100/10 overflow-hidden bg-[position:0%,0%_0%,0%] p-8 rounded-3xl border-solid ${props.variant}`}
    >
      <div data-uid="iHLdIbdVTdDLrcbA" className="relative items-center aspect-video box-border caret-transparent flex h-auto min-h-56 w-[calc(100%_+_64px)] overflow-hidden -ml-8 -mt-8 md:aspect-auto md:h-80">
        <div data-uid="p3U0GnDNXeYXnCB7"
          className={`absolute box-border caret-transparent inset-0 ${props.variant === "md:col-end-[span_1] md:col-start-[span_1]" ? "overflow-hidden p-3" : "items-center gap-x-6 flex gap-y-6 ml-5 p-6"}`}
        >
          {props.variant === "md:col-end-[span_1] md:col-start-[span_1]" && (
            <div data-uid="lXCFgYP5GGPJIGOa" className="box-border caret-transparent flex gap-x-2 gap-y-2">
              <div data-uid="vNRZoRPdc3jWJFEL" className="box-border caret-transparent gap-x-6 flex min-h-[auto] min-w-[auto] gap-y-6">
                {props.metrics?.map((metric, metricIndex) => (
                  <ul data-uid="F7kvQ5xhvKKzQZqr"
                    className="items-start box-border caret-transparent gap-x-6 flex shrink-0 list-none min-h-[auto] min-w-[auto] gap-y-6 pl-0 py-0 md:py-10"
                    key={metricIndex}
                  >
                    <div data-uid="3QOktIrzspCWKcgq" className="relative text-xs bg-zinc-950 box-border caret-transparent gap-x-3 flex flex-col leading-4 min-h-[auto] min-w-64 gap-y-3 border border-blue-100/10 overflow-hidden px-5 py-3 rounded-3xl border-solid md:gap-x-6 md:min-w-[304px] md:gap-y-6 md:px-7 md:py-5">
                      <div data-uid="t41CsJDT4AB7f6pP" className="absolute box-border caret-transparent pointer-events-none inset-0">
                        <div data-uid="fU8RKPXmM0KBHeQR" className={metric.iconClasses}></div>
                        <div data-uid="wQlBycKhbrwMBViD" className="absolute bg-[linear-gradient(to_left_top,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                        <div data-uid="IXDsPwJ4tA0jnUl4" className="absolute bg-[linear-gradient(oklab(0_0_0_/_0.6)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                      </div>
                      <div data-uid="7PnsSKHPl8pa4pZO" className="relative text-transparent items-start bg-clip-text bg-[linear-gradient(to_right,rgb(255,255,255)_0%,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_100%)] box-border gap-x-5 flex flex-col justify-start min-h-[auto] min-w-[auto] gap-y-5 w-full">
                        <h3 data-uid="IUfthzJb92SJChxg" className="font-medium box-border tracking-[0.3px] leading-6 min-h-[auto] min-w-[auto] uppercase">
                          {metric.title}
                        </h3>
                        <p data-uid="i2bUams9IPpMaFry" className="text-3xl font-medium box-border leading-6 min-h-[auto] min-w-[auto] md:text-[32px]">
                          {metric.percentage}
                        </p>
                      </div>
                      <div data-uid="mQ4hwBKz2FvS6ReK" className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] w-full">
                        {metric.items.map((item, itemIndex) => (
                          <Fragment data-uid="JSaKxNqhzZi6GcEc" key={itemIndex}>
                            {itemIndex > 0 && (
                              <div data-uid="SBsKjkz4pqyuLEWs" className="bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent h-[0.5008px] min-h-[auto] min-w-[auto] w-full rounded-bl rounded-br rounded-tl rounded-tr"></div>
                            )}
                            <div data-uid="IYBGRcNSjPfq0QuN" className="text-white/90 items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full py-3">
                              <div data-uid="8OLTijqUR6cJByTu" className="items-center box-border caret-transparent gap-x-3 flex min-h-[auto] min-w-[auto] gap-y-3">
                                <div data-uid="Wi5aCPAmpktn5SGe" className="relative box-border caret-transparent h-2 min-h-[auto] min-w-[auto] w-2">
                                  <div data-uid="xlKNe0tTUWehN6I2" className={item.iconClasses}></div>
                                </div>
                                <span data-uid="dU49SILKEQOaiFap" className="box-border caret-transparent block min-h-[auto] min-w-[auto]">
                                  {item.label}
                                </span>
                              </div>
                              <span data-uid="IjDVmlxz8HGiWFpt" className="box-border caret-transparent block min-h-[auto] min-w-[auto] opacity-80">
                                {item.value}
                              </span>
                            </div>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          )}
          {props.variant === "md:col-end-[span_2] md:col-start-[span_2]" && (
            <>
              <div data-uid="25BCNZgb4Uy58AJs" className="relative text-xs bg-zinc-950 box-border caret-transparent gap-x-4 flex flex-col leading-4 min-h-[auto] min-w-80 gap-y-4 border border-blue-100/10 overflow-hidden px-5 py-3 rounded-3xl border-solid md:min-w-96 md:px-7 md:py-5">
                <div data-uid="9vZANiwtPrmboEQD" className="absolute box-border caret-transparent pointer-events-none inset-0">
                  <div data-uid="R1z5kG3IMsDIwht3" className="absolute aspect-square bg-[linear-gradient(in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent blur-2xl w-36 rounded-[3.35544e+07px] -right-3 -top-4"></div>
                  <div data-uid="uWHK6oGNJiZvlJja" className="absolute bg-[linear-gradient(to_left_top,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                  <div data-uid="3FI6SkeeGocgOt4g" className="absolute bg-[linear-gradient(oklab(0_0_0_/_0.6)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                </div>
                <h2 data-uid="yb3JDsdeHncjuTqe" className="relative text-transparent text-xs font-medium items-start bg-clip-text bg-[linear-gradient(to_right,rgb(255,255,255)_0%,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_100%)] box-border gap-x-5 flex flex-col justify-start leading-6 min-h-[auto] min-w-[auto] gap-y-5 w-full md:text-sm">
                  Top Clicked Links
                </h2>
                <div data-uid="foxN7LydZhCyT1Lj" className="box-border caret-transparent gap-x-1.5 flex flex-col min-h-[auto] min-w-[auto] gap-y-1.5 w-full">
                  {props.topLinks?.map((link, linkIndex) => (
                    <Fragment data-uid="0MLGbmYpDYBm8OPw" key={linkIndex}>
                      {linkIndex > 0 && (
                        <div data-uid="toO30zloZHrfvcM6" className="bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent h-[0.5008px] min-h-[auto] min-w-[auto] w-full rounded-bl rounded-br rounded-tl rounded-tr"></div>
                      )}
                      <div data-uid="uN9YukCSVEhtpIxl" className="text-xs items-center box-border caret-transparent flex justify-between leading-4 min-h-[auto] min-w-[auto] w-full py-1 md:text-sm md:leading-5 md:py-2">
                        <div data-uid="hVRR17bzTdwpZ4hx" className="text-xs items-center box-border caret-transparent gap-x-3 flex basis-[0%] grow leading-4 min-h-[auto] gap-y-3 md:text-sm md:leading-5">
                          <div data-uid="Rqcx31mDIamuChAP" className="relative text-xs items-center aspect-square box-border caret-transparent flex h-6 justify-center leading-4 min-h-[auto] min-w-[auto] w-7 border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.15)] md:text-sm md:leading-5">
                            <div data-uid="VNCcCS1rZuChVev6" className="absolute text-xs bg-[linear-gradient(to_right_top,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent leading-4 pointer-events-none inset-0 md:text-sm md:leading-5"></div>
                            <img data-uid="Ofph24g5mkDz0YYT"
                              src={link.iconSrc}
                              alt="Icon"
                              className={`tw-cls-${88 + linkIndex * 8}`}
                            />
                          </div>
                          <div data-uid="abmU6QgPcvG8p0Jl" className="text-xs items-center box-border caret-transparent flex h-6 justify-center leading-4 min-h-[auto] min-w-[auto] w-6 rounded-md md:text-sm md:leading-5">
                            <img data-uid="MIj80aXNSrOHNfVx"
                              src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-36.svg"
                              alt="Icon"
                              className="text-xs box-border caret-transparent h-3 leading-4 w-3 md:text-sm md:leading-5"
                            />
                          </div>
                          <div data-uid="PkgZJRcxbghqSx8H" className="relative text-transparent text-xs items-start bg-clip-text bg-[linear-gradient(to_right,oklab(0.999994_0.0000455678_0.0000200868_/_0.3)_0%,oklab(0.999994_0.0000455678_0.0000200868_/_0.9)_100%)] box-border flex justify-start leading-4 min-h-[auto] min-w-[auto] w-full md:text-sm md:leading-5">
                            <span data-uid="CmRtq6wXJLlFH8C0" className="text-xs box-border block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                              {link.domain}
                            </span>
                            <span data-uid="wG3naVetAJ6zvCrE" className="text-sky-50/70 text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                              {link.path}
                            </span>
                          </div>
                        </div>
                        <span data-uid="SEIp9afQgNdEg5pz" className="text-white/90 text-xs font-medium box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                          <span data-uid="1jmzeX0RrKsC9vdu" className="text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                            {link.count}
                          </span>
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div data-uid="rAZN1qmmKuYpq6a7" className="relative text-xs bg-zinc-950 box-border caret-transparent gap-x-4 flex flex-col leading-4 min-h-[auto] min-w-80 gap-y-4 border border-blue-100/10 overflow-hidden px-5 py-3 rounded-3xl border-solid md:min-w-96 md:px-7 md:py-5">
                <div data-uid="6iccI57Yiwpn33zH" className="absolute box-border caret-transparent pointer-events-none inset-0">
                  <div data-uid="pzYLJgyUC1pjPMJ1" className="absolute aspect-square bg-[linear-gradient(in_oklab,rgb(255,255,255)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent blur-2xl w-36 rounded-[3.35544e+07px] -right-3 -top-4"></div>
                  <div data-uid="3Df6tqArrfEAJ8p3" className="absolute bg-[linear-gradient(to_left_top,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                  <div data-uid="FqYUZ7kCW3MiIXS1" className="absolute bg-[linear-gradient(oklab(0_0_0_/_0.6)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                </div>
                <h2 data-uid="XvApfqGC9gwBDXfr" className="relative text-transparent text-xs font-medium items-start bg-clip-text bg-[linear-gradient(to_right,rgb(255,255,255)_0%,oklab(0.999994_0.0000455678_0.0000200868_/_0.05)_100%)] box-border gap-x-5 flex flex-col justify-start leading-6 min-h-[auto] min-w-[auto] gap-y-5 w-full md:text-sm">
                  Opened By
                </h2>
                <div data-uid="uGgOKB1my61uuTx6" className="relative box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
                  <div data-uid="W9BwAeZk74kqG5zw" className="absolute items-center box-border caret-transparent flex pointer-events-none pl-3 left-0 inset-y-0">
                    <img data-uid="gp0JmIp7YUqqUtzo"
                      src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-39.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-3.5 w-3.5"
                    />
                  </div>
                  <input data-uid="9Xz95hhKdw2xcuFW"
                    placeholder="Search..."
                    type="text"
                    className="text-sky-50/70 text-sm bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent block leading-5 w-full border border-blue-100/10 pl-10 pr-4 py-1 rounded-md border-solid"
                  />
                </div>
                <div data-uid="ZFYgbyibyXWzZRvN" className="box-border caret-transparent gap-x-1 flex flex-col min-h-[auto] min-w-[auto] gap-y-1 w-full">
                  {props.openedByUsers?.map((user, userIndex) => (
                    <Fragment data-uid="LB6hHTb0vc8OFvOE" key={userIndex}>
                      {userIndex > 0 && (
                        <div data-uid="Btaolehatdfz0YOz" className="bg-[oklab(0.999994_0.0000455678_0.0000200868_/_0.1)] box-border caret-transparent h-[0.5008px] min-h-[auto] min-w-[auto] w-full rounded-bl rounded-br rounded-tl rounded-tr"></div>
                      )}
                      <div data-uid="U0R9DYHcJclxqSuB" className="items-center box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full py-2 md:py-3">
                        <div data-uid="6AaSgNiHmEFfKzhW" className="items-center box-border caret-transparent gap-x-3 flex grow shrink-0 min-h-[auto] min-w-[auto] gap-y-3">
                          <div data-uid="AY7ZeVHzVIHeCkif" className="items-center bg-[linear-gradient(to_right_bottom,lab(70.0429_42.5156_75.8207)_0%,lab(56.9303_76.8162_-8.07021)_100%)] box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 overflow-hidden rounded-[3.35544e+07px]">
                            <img data-uid="GKNNVCexRrrz1yS5"
                              alt="Avatar"
                              src={user.avatarSrc}
                              className="text-transparent aspect-[auto_24_/_24] box-border h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full"
                            />
                          </div>
                          <div data-uid="3KS6wq2Z60vcqCsz" className="relative text-transparent text-sm items-start bg-clip-text bg-[linear-gradient(to_right,oklab(0.999994_0.0000455677_0.0000200868_/_0.7)_0%,oklab(0.999994_0.0000455678_0.0000200868_/_0.4)_100%)] box-border flex justify-start leading-5 min-h-[auto] min-w-[auto]">
                            <span data-uid="xTfKTUTKMSG46tgX" className="box-border block min-h-[auto] min-w-[auto]">
                              {user.emailPrefix}
                            </span>
                            <span data-uid="ZMcgdyZsweS3TT7b" className="text-white/90 box-border caret-transparent block min-h-[auto] min-w-[auto]">
                              {user.emailDomain}
                            </span>
                          </div>
                        </div>
                        <span data-uid="7CeOaPpf4bZE5RBn" className="text-white/90 text-sm font-medium box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto]">
                          {user.count}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div data-uid="wtjZmUy4NA6agP8b" className="relative text-lg items-center bg-clip-padding bg-[radial-gradient(141.42%_141.42%_at_100%_0%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_66.84%)] box-border caret-transparent flex h-10 justify-center leading-7 w-10 border border-blue-100/10 overflow-hidden mt-1.5 mb-6 rounded-lg border-solid md:mt-0">
        <img data-uid="f4mJ84NaVvEVBMLY"
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 w-5"
        />
      </div>
      <h3 data-uid="GqATuMKlCyPRBJej" className="text-xl box-border caret-transparent leading-7 mb-4">
        {props.title}
      </h3>
      <p data-uid="OaS9bW3c2GzRvf8t" className="text-sky-50/70 text-sm box-border caret-transparent leading-5 max-w-sm">
        {props.description}
      </p>
    </div>
  );
};
