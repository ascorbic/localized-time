# react-localized-time

This is a component to display time translated to the user's timezone.

At its simplest, you can use it like this:

```jsx
import { LocalizedTime } from "react-localized-time";

//...

<p>
  Gatsby Days starts at{" "}
  <LocalizedTime dateTime="1 June 2020 09:00 PST">9am PST</LocalizedTime>
</p>;
```

Or a more complicated version:

```jsx
<p>
  Gatsby Days começa às{" "}
  <LocalizedTime
    dateTime="2020-06-01T18:00:00.000Z"
    append={false}
    options={{ timeZoneName: "long" }}
  />
</p>
```

[Try it out](https://codesandbox.io/s/react-localized-time-id0rz)

The `dateTime` prop accepts any text that can be parsed by [the `Date` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#Syntax). (These formats are RFC 2822 and ISO8601).

The component renders the `dateTime` value, translated into the user's timezone and locale. By default the value is appended to the existing content of the tag, separated by " / ", so the example above would render as "Gatsby Days starts at 9am PST / 18:00 BST" in the UK.

## Props

The component renders a [`<time>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time), and accepts and passes-through any valid `<time>` props.

### `dateTime`: `boolean`

A date/time string in RFC 2822 or ISO8601 format. It must include a date as well as time so that it can calculate daylight saving time.

### `append`?: `boolean`

Whether the value should be appended to the existing content of the tag. Default: `true`

### `options?:`Intl.DateTimeFormatOptions`

Options that are passed to the formatter. For valid options see [DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format#Syntax).

Default:

```js
{
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
}
```

### `locale`?: `string`

You may specify a locale for the display, or leave as undefined which will use the user's locale. This does not affect the timezone, just the format. e.g. `"en-US"`

### `separator`?: `string`

If you are using the `append` option, this is the string that will be used to separate the two times. Default: `" / "`
