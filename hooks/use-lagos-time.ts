import { useEffect, useState } from "react";

const lagosTimeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "Africa/Lagos",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function getLagosTimeParts(date: Date) {
  const parts = lagosTimeFormat.formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    hours: get("hour"),
    minutes: get("minute"),
    seconds: get("second"),
    period: get("dayPeriod").toUpperCase(),
  };
}

// Current time in Lagos, ticking every second. Server and client render a
// moment apart, so elements showing it need suppressHydrationWarning.
export function useLagosTime() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setTime(new Date());
    let interval: ReturnType<typeof setInterval> | undefined;

    // Wait for the next full second so ticks line up with the real clock
    const timeout = setTimeout(
      () => {
        tick();
        interval = setInterval(tick, 1000);
      },
      1000 - (Date.now() % 1000),
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return getLagosTimeParts(time);
}
