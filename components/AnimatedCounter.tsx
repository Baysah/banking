'use client'

import CountUp from "react-countup";

type AnimatedCounterProps = {
  value: number;
}

const AnimatedCounter = ({value}: AnimatedCounterProps) => {
  return (
    <div className="w-fill">
      <CountUp
        start={0}
        end={value}
        duration={2.75}
        decimal="."
        decimals={2}
        prefix="$"
      />
    </div>
  );
}

export default AnimatedCounter