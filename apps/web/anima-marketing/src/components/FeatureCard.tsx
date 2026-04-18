export type FeatureCardProps = {
  variant: string;
  iconSrc: string;
  title: string;
  description: string;
  previewImageSrc?: string;
  previewImageAlt?: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div data-uid="6BZJzua9p9Hd3Mtj"
      className={`relative bg-[radial-gradient(29.48%_34.97%_at_0%_58.67%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_50%,rgba(255,255,255,0)_100%),linear-gradient(rgb(17,17,17)_0%,rgba(0,0,0,0.5)_100%)] bg-size-[auto,auto] box-border caret-transparent col-end-auto col-start-auto min-h-[auto] min-w-[auto] border border-blue-100/10 bg-[position:0%,0%_0%,0%] p-8 rounded-3xl border-solid ${props.variant}`}
    >
      <div data-uid="ELZDw9R8BBragZXb"
        className={
          props.variant ===
          "overflow-hidden md:col-end-[span_1] md:col-start-[span_1]"
            ? "relative items-center aspect-video box-border caret-transparent flex h-auto w-[calc(100%_+_64px)] -ml-8 -mt-8 md:aspect-auto md:h-80 min-h-[344px] overflow-hidden"
            : props.variant === "md:col-end-[span_1] md:col-start-[span_1]"
              ? "relative items-center aspect-video box-border caret-transparent flex h-auto w-[calc(100%_+_64px)] -ml-8 -mt-8 md:aspect-auto md:h-80"
              : "relative items-center aspect-video box-border caret-transparent flex h-auto w-[calc(100%_+_64px)] -ml-8 -mt-8 md:aspect-auto md:h-80 min-h-[272px] overflow-hidden"
        }
      >
        {props.variant ===
          "overflow-hidden md:col-end-[span_1] md:col-start-[span_1]" && (
          <>
            {props.title === "Personalize with variables" && (
              <div data-uid="ZlFSF2K2P4Forf4b" className="absolute items-center box-border caret-transparent flex justify-center inset-0">
                <img data-uid="dI00IZ0peLsg9TiW"
                  src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-10.svg"
                  alt="Icon"
                  className="absolute box-border caret-transparent h-60 w-[421px] z-[1] inset-0"
                />
                <div data-uid="SIe5jp9wdhJxz2X8" className="absolute box-border caret-transparent translate-x-7 translate-y-[-22px] w-[calc(100%_-_24px)] z-[1] overflow-hidden p-[0.75px] rounded-lg top-[8%] md:top-[24%]">
                  <div data-uid="IfVn9ksnp3YCWrVC" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.15)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                  <div data-uid="4VBpaVAXU00h98UY" className="relative bg-black box-border caret-transparent flex h-full w-full overflow-hidden pl-3 pr-6 py-2 rounded-lg md:pl-4 md:pr-8 md:py-3">
                    <div data-uid="MDKaDncTi3MapoAX" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.1)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                    <div data-uid="bqFIM8HNjhuyRcGX" className="absolute bg-[linear-gradient(to_left_bottom,lab(90.3855_-56.0912_23.6465_/_0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent mix-blend-soft-light opacity-20 inset-0"></div>
                    <div data-uid="foB1zPUwxQiX5H1a" className="relative text-sky-50/70 text-xs items-center box-border caret-transparent gap-x-6 flex justify-start leading-4 min-h-[auto] min-w-[auto] gap-y-6 p-2 font-commitmono md:text-sm md:leading-5">
                      <div data-uid="vIIBbKRPhqhx9Zpn" className="text-xs bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] border p-1.5 rounded-lg border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] md:text-sm md:leading-5 md:p-2.5 md:rounded-xl">
                        <img data-uid="NrAgfyzX8BMWutAB"
                          src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-11.svg"
                          alt="Icon"
                          className="text-xs box-border caret-transparent h-4 leading-4 w-4 md:text-sm md:h-5 md:leading-5 md:w-5"
                        />
                      </div>
                      <span data-uid="OTjZ9X33KIpBuTgr" className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                        <span data-uid="Ae5tEXOPD3jhl5Ej" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"{{{"}
                        </span>
                        <span data-uid="NeCz8MAikQD6kg2Z" className="text-white/90 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          LAST_NAME
                        </span>
                        <span data-uid="zVyA3maMubVlHEPC" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"}}}"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div data-uid="TxbAAvv6Z0HcYMRU" className="absolute box-border caret-transparent translate-x-14 translate-y-6 w-[calc(100%_-_24px)] z-[2] overflow-hidden p-[0.75px] rounded-lg top-[8%] md:top-[24%]">
                  <div data-uid="hrG21FbrduyZgp3I" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.15)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                  <div data-uid="Ah0spLnNmxJLCt1e" className="relative bg-black box-border caret-transparent flex h-full w-full overflow-hidden pl-3 pr-6 py-2 rounded-lg md:pl-4 md:pr-8 md:py-3">
                    <div data-uid="BBBLcEQEYfnXsCHT" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.1)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                    <div data-uid="kD1xTE40vdfZcGCc" className="absolute bg-[linear-gradient(to_left_bottom,lab(90.3855_-56.0912_23.6465_/_0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent mix-blend-soft-light opacity-20 inset-0"></div>
                    <div data-uid="Fnkc4pkaJVmUTcs6" className="relative text-sky-50/70 text-xs items-center box-border caret-transparent gap-x-6 flex justify-start leading-4 min-h-[auto] min-w-[auto] gap-y-6 p-2 font-commitmono md:text-sm md:leading-5">
                      <div data-uid="nl5i3aH2jqW7S7dM" className="text-xs bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] border p-1.5 rounded-lg border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] md:text-sm md:leading-5 md:p-2.5 md:rounded-xl">
                        <img data-uid="BeKhjJlp9jURMWld"
                          src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-11.svg"
                          alt="Icon"
                          className="text-xs box-border caret-transparent h-4 leading-4 w-4 md:text-sm md:h-5 md:leading-5 md:w-5"
                        />
                      </div>
                      <span data-uid="uXO6iIAjmrZlGlUU" className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                        <span data-uid="uTlGqIVmghdSl57d" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"{{{"}
                        </span>
                        <span data-uid="VN1W6mOaSKljdKMJ" className="text-white/90 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          EMAIL
                        </span>
                        <span data-uid="g4kSVwBSBhaNkRCy" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"}}}"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div data-uid="M6kwg8A7zsJefYeo" className="absolute box-border caret-transparent translate-x-[84px] translate-y-[70px] w-[calc(100%_-_24px)] z-[3] overflow-hidden p-[0.75px] rounded-lg top-[8%] md:top-[24%]">
                  <div data-uid="30s5MtJEiCOh0hRW" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.15)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                  <div data-uid="DDgCRlpyLhBenciO" className="relative bg-black box-border caret-transparent flex h-full w-full overflow-hidden pl-3 pr-6 py-2 rounded-lg md:pl-4 md:pr-8 md:py-3">
                    <div data-uid="bK9jNBZoyXDjZA9y" className="absolute bg-[linear-gradient(to_right_bottom,oklab(0.999994_0.0000455678_0.0000200868_/_0.1)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent inset-0"></div>
                    <div data-uid="KFv9VlYjNJMC4WET" className="absolute bg-[linear-gradient(to_left_bottom,lab(90.3855_-56.0912_23.6465_/_0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent mix-blend-soft-light opacity-20 inset-0"></div>
                    <div data-uid="p24vJkBQBSxR4UMR" className="relative text-sky-50/70 text-xs items-center box-border caret-transparent gap-x-6 flex justify-start leading-4 min-h-[auto] min-w-[auto] gap-y-6 p-2 font-commitmono md:text-sm md:leading-5">
                      <div data-uid="F3IpwK38vtXBbe2W" className="text-xs bg-[oklab(0_0_0_/_0.1)] box-border caret-transparent leading-4 min-h-[auto] min-w-[auto] border p-1.5 rounded-lg border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.3)] md:text-sm md:leading-5 md:p-2.5 md:rounded-xl">
                        <img data-uid="4stx0zySJko3Q6rX"
                          src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-11.svg"
                          alt="Icon"
                          className="text-xs box-border caret-transparent h-4 leading-4 w-4 md:text-sm md:h-5 md:leading-5 md:w-5"
                        />
                      </div>
                      <span data-uid="iabYJ6euranmdKes" className="text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] md:text-sm md:leading-5">
                        <span data-uid="gH68ceoIHwVq2XMZ" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"{{{"}
                        </span>
                        <span data-uid="DzwRwkbZfX8ZHMxF" className="text-white/90 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          FIRST_NAME
                        </span>
                        <span data-uid="hSiZ0gkMynnNjMhj" className="text-sky-100/50 text-xs box-border caret-transparent leading-4 md:text-sm md:leading-5">
                          {"}}}"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {props.title === "Markdown support" && (
              <div data-uid="E8ismZt5LL6osrAJ" className="absolute box-border caret-transparent overflow-hidden pl-[18%] py-4 inset-0">
                <div data-uid="QDtx1ZXFNfPULrkn" className="box-border caret-transparent [mask-image:linear-gradient(rgb(0,0,0)_70%,rgba(0,0,0,0)_100%)] relative text-zinc-400/20 flex flex-col w-96 border overflow-hidden rounded-3xl border-solid border-[oklab(0.999994_0.0000455678_0.0000200868_/_0.05)]">
                  <div data-uid="uMWJ0T91Ey3L9MBL" className="absolute box-border caret-transparent overflow-hidden inset-0">
                    <img data-uid="G4MS2IQpEnGz6479"
                      src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-13.svg"
                      alt="Icon"
                      className="absolute box-border caret-transparent mb-[-24%] mr-[-54%] inset-0"
                    />
                    <div data-uid="R0isgyd6LABZJxwY" className="backdrop-blur-md bg-[lab(2.48421_0.103705_-0.380465_/_0.7)] box-border caret-transparent h-full w-full"></div>
                  </div>
                  <div data-uid="BmalnDcrtk4piC1a" className="relative items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] w-full border-zinc-900 px-6 py-5 border-b border-solid">
                    <div data-uid="CEACHnwMAGBNAFvN" className="items-center box-border caret-transparent gap-x-2.5 flex min-h-[auto] min-w-[auto] gap-y-2.5">
                      <div data-uid="acjrN8UInmNGmINu" className="box-border caret-transparent h-3 min-h-[auto] min-w-[auto] w-3 border border-zinc-900 rounded-[3.35544e+07px] border-solid"></div>
                      <div data-uid="4OYeNrTc8cVa7X6Y" className="box-border caret-transparent h-3 min-h-[auto] min-w-[auto] w-3 border border-zinc-900 rounded-[3.35544e+07px] border-solid"></div>
                      <div data-uid="B2rcSbl5fK7Wn1Nb" className="box-border caret-transparent h-3 min-h-[auto] min-w-[auto] w-3 border border-zinc-900 rounded-[3.35544e+07px] border-solid"></div>
                    </div>
                    <div data-uid="zC7bz0dO1w80tk1i" className="text-xs box-border caret-transparent min-h-[auto] min-w-[auto] ml-24">
                      Weekly Acme News
                    </div>
                  </div>
                  <div data-uid="zwWI1A7vaJpqjoq7" className="relative text-lg font-bold box-border caret-transparent gap-x-4 flex flex-col leading-7 min-h-[auto] min-w-[auto] gap-y-4 w-full pt-5 pb-7 px-6">
                    <div data-uid="fbOHzpAVjq3DWnNA" className="text-2xl items-center box-border caret-transparent gap-x-5 flex leading-8 min-h-[auto] min-w-[auto] gap-y-5 w-full">
                      <span data-uid="50USst8HUl1ruCkZ" className="text-sky-50/70 box-border caret-transparent block min-h-[auto] min-w-[auto] w-5">
                        #
                      </span>
                      <div data-uid="u1EeC0ttFPSRefBB" className="bg-[linear-gradient(to_right_in_oklab,rgba(182,182,182,0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent basis-[0%] grow h-2.5 max-w-48 min-h-[auto] min-w-[auto] origin-[0px_50%]"></div>
                    </div>
                    <div data-uid="qlykpbPUgNzOBE2l" className="text-xl items-center box-border caret-transparent gap-x-5 flex min-h-[auto] min-w-[auto] gap-y-5 w-full">
                      <span data-uid="Z4xFS5K8HTdtYPHC" className="text-sky-50/70 box-border caret-transparent block min-h-[auto] min-w-[auto] w-5">
                        ##
                      </span>
                      <div data-uid="Ceajv4b1u21y7GPT" className="bg-[linear-gradient(to_right_in_oklab,rgba(182,182,182,0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent basis-[0%] grow h-2.5 max-w-48 min-h-[auto] min-w-[auto] origin-[0px_50%]"></div>
                    </div>
                    <div data-uid="LFOQeOWN8DOG9MUV" className="text-xl items-center box-border caret-transparent gap-x-5 flex min-h-[auto] min-w-[auto] gap-y-5 w-full">
                      <span data-uid="eG7U2dFKUsGwLPSl" className="text-sky-50/70 box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] w-2">
                        *
                      </span>
                      <div data-uid="0UnA6lDBIVWzc5gr" className="items-center bg-[linear-gradient(to_right_in_oklab,rgba(182,182,182,0.2)_0%,rgba(0,0,0,0)_100%)] box-border caret-transparent flex basis-[0%] grow h-2.5 max-w-28 min-h-[auto] min-w-[auto] origin-[0px_50%]">
                        <span data-uid="KmKgVZiNkgV7riTE" className="text-sky-50/70 box-border caret-transparent block min-h-[auto] min-w-[auto] ml-32">
                          *
                        </span>
                      </div>
                    </div>
                    <div data-uid="a5XmFKCgB4Vzsera" className="bg-zinc-400/20 box-border caret-transparent h-5 min-h-[auto] min-w-[auto] w-2"></div>
                    <div data-uid="YdtLI3TRuzgHMDrd" className="text-xl items-center box-border caret-transparent gap-x-5 flex min-h-[auto] min-w-[auto] gap-y-5 w-full">
                      <div data-uid="dFYMwnnIY5IJTVuE" className="items-center box-border caret-transparent flex basis-[0%] grow h-2.5 max-w-20 min-h-[auto] min-w-[auto] origin-[0px_50%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {props.title === "Schedule to send later" && (
              <>
                <img data-uid="pDR3FOuzRzj2a12d"
                  alt={props.previewImageAlt}
                  src={props.previewImageSrc}
                  className="[mask-image:linear-gradient(rgb(0,0,0)_75%,rgba(0,0,0,0)_100%)] absolute text-transparent aspect-[auto_768_/_672] box-border [mask-size:100%_100%] max-w-full object-cover w-[768px] inset-0"
                />
                <div data-uid="hseMk9zCaeeX37Su" className="absolute box-border caret-transparent gap-x-2 flex flex-col shrink-0 justify-center gap-y-2 text-left w-full px-10">
                  <div data-uid="YD09JJM7CFtHu7n7" className="box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] w-full">
                    <input data-uid="MSJgGWC6Gp2DD5Kn"
                      placeholder="Enter a date or time..."
                      role="combobox"
                      value=""
                      className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.04)_0px_0px_4px_0px,rgba(255,255,255,0.05)_0px_19px_46px_0px,rgba(255,255,255,0.05)_0px_8px_16px_0px] box-border caret-transparent block min-h-[auto] min-w-[auto] outline-blue-100/10 text-start border border-blue-100/10 pl-4 pr-10 py-2 rounded-md border-solid"
                    />
                  </div>
                  <img data-uid="pEls5FBMNmvzjhgF"
                    src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-15.svg"
                    alt="Icon"
                    className="absolute box-border caret-transparent text-sky-100/50 h-[18px] w-[18px] right-14"
                  />
                </div>
              </>
            )}
          </>
        )}
        {props.variant === "md:col-end-[span_1] md:col-start-[span_1]" && (
          <div data-uid="eubqYNkmCxbZGD4t" className="absolute box-border caret-transparent items-end flex pt-6 px-3 rounded-xl inset-0">
            <img data-uid="vXJQ5OJSRNEIZ6u8"
              src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-19.svg"
              alt="Icon"
              className="absolute box-border caret-transparent h-60 w-[421px] z-[1] inset-0"
            />
            <img data-uid="V69hfoIXcCYmNm9z"
              src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-20.svg"
              alt="Icon"
              className="relative box-border caret-transparent w-full z-[2]"
            />
          </div>
        )}
        {props.variant ===
          "overflow-hidden md:col-end-[span_2] md:col-start-[span_2]" && (
          <div data-uid="t8VNyPSDJYagyFpT" className="absolute box-border caret-transparent text-sky-50/70 text-sm items-center flex flex-col justify-start leading-5 px-3 py-4 inset-0 md:text-base md:justify-center md:leading-6 md:p-10">
            <div data-uid="X9Sul8JGepAI8ohr" className="box-border caret-transparent absolute text-sm leading-5 inset-0 md:text-base md:leading-6">
              <img data-uid="7ycwEoHlX21fvDsf"
                src="https://c.animaapp.com/mmeplaffjoEoT4/assets/icon-22.svg"
                alt="Icon"
                className="text-sm box-border caret-transparent h-full leading-5 w-full md:text-base md:leading-6"
              />
            </div>
          </div>
        )}
      </div>
      <div data-uid="hPrXCnGkTFxr7IZT" className="relative text-lg items-center bg-clip-padding bg-[radial-gradient(141.42%_141.42%_at_100%_0%,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_66.84%)] box-border caret-transparent flex h-10 justify-center leading-7 w-10 border border-blue-100/10 overflow-hidden mt-1.5 mb-6 rounded-lg border-solid md:mt-0">
        <img data-uid="bBP79D8bmZrjdxEa"
          src={props.iconSrc}
          alt="Icon"
          className="box-border caret-transparent h-6 w-5"
        />
      </div>
      <h3 data-uid="aaFmeFlyS7Zds4tt" className="text-xl box-border caret-transparent leading-7 mb-4">
        {props.title}
      </h3>
      <p data-uid="8N4rBqFPz6SQpqVX" className="text-sky-50/70 text-sm box-border caret-transparent leading-5 max-w-sm">
        {props.description}
      </p>
    </div>
  );
};
