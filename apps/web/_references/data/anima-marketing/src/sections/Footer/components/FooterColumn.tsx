export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div data-uid="2moLTTr2T0veBak4" className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4">
      <p data-uid="O1cswcdgz1EperCr" className="text-sm box-border caret-transparent leading-5 min-h-[auto] min-w-[auto] ml-1 mb-2">
        {props.title}
      </p>
      <ul data-uid="2U7QVuejNooHLvAO" className="box-border caret-transparent gap-x-4 flex flex-col list-none min-h-[auto] min-w-[auto] gap-y-4 pl-0">
        {props.links.map((link, index) => (
          <li data-uid="mxl9cyUJuDCKkNsi"
            key={index}
            className="box-border caret-transparent min-h-[auto] min-w-[auto]"
          >
            <a data-uid="htjR3npF3bRqowPK"
              href={link.href}
              className="text-sky-50/70 text-sm box-border caret-transparent leading-5 px-1 py-0.5 rounded-md"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
