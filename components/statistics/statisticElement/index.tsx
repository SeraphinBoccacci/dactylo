import { StatisticElement } from "./style";

export default function Index({
  name,
  value,
}: {
  name: string;
  value: number;
}) {
  return <StatisticElement>{`${name} : ${value}`}</StatisticElement>;
}
