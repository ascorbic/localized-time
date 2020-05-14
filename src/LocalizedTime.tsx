import React, { TimeHTMLAttributes, useEffect, useState } from "react";

export interface Props extends TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: string;
  append?: boolean;
  options?: Intl.DateTimeFormatOptions;
  locales?: string | string[];
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
  locales,
  ...props
}) => {
  const [formatter, setFormatter] = useState<Intl.DateTimeFormat>();
  const [dateString, setDateString] = useState<string>("");
  useEffect(() => {
    setFormatter(
      new Intl.DateTimeFormat(locales, { ...defaultOptions, ...options })
    );
  }, [locales, options]);

  useEffect(() => {
    if (!dateTime || !formatter) {
      return;
    }
    const date = new Date(dateTime);
    if (!date) {
      setDateString("");
    }
    setDateString(formatter.format(date));
    console.log(date);
  }, [formatter, dateTime]);

  return (
    <time {...props} dateTime={dateTime}>
      {dateString && append ? [children, separator, dateString] : dateString}
    </time>
  );
};
