import React, { TimeHTMLAttributes, useEffect, useState } from "react";

export interface Props extends TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: string;
  append?: boolean;
  options?: Intl.DateTimeFormatOptions;
  locale?: string;
  separator?: string;
}

const defaultOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
};

export const LocalizedTime: React.FC<Props> = ({
  dateTime,
  children,
  append = true,
  options = {},
  separator = " / ",
  locale,
  ...props
}) => {
  const [dateString, setDateString] = useState<string>("");
  const [isoString, setIsoString] = useState<string>("");
  useEffect(() => {
    if (!dateTime || !("Intl" in window)) {
      return;
    }

    try {
      const formatter = new Intl.DateTimeFormat(locale, {
        ...defaultOptions,
        ...options,
      });
      const date = new Date(dateTime);
      if (!date) {
        setDateString("");
        return;
      }
      setDateString(formatter.format(date));
      setIsoString(date.toISOString());
    } catch (e) {
      console.warn(e);
    }
  }, [locale, options, dateTime]);

  return (
    <time {...props} dateTime={isoString || dateTime}>
      {[append && dateString && [children, separator], dateString || children]}
    </time>
  );
};
