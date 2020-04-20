import React from "react";

import { StatisticsContainer, StatisticsList } from "./style";
import StatisticElement from "./statisticElement";

export default class Index extends React.Component<
  {
    okWords: number;
    wrongWords: number;
    okLetters: number;
    wrongLetters: number;
  },
  {
    startTime?: Date;
  }
> {
  constructor(props: {
    okWords: number;
    wrongWords: number;
    okLetters: number;
    wrongLetters: number;
  }) {
    super(props);

    this.state = {};
  }
  componentDidUpdate() {
    const { startTime } = this.state;

    if (!startTime) this.setState({ startTime: new Date() });
  }
  render() {
    const { okWords, wrongWords, okLetters, wrongLetters } = this.props;
    const { startTime } = this.state;
    const totalLetters =
      okLetters + wrongLetters === 0 ? 1 : okLetters + wrongLetters;
    const accuracy = Math.floor((okLetters / totalLetters) * 10000) / 100;
    const spentTime = startTime && new Date().getTime() - startTime.getTime();
    const spentTimeInMinute = spentTime && spentTime / 60000;
    const wordsPerMinute =
      spentTimeInMinute &&
      (okWords || wrongWords) &&
      (okWords + wrongWords) / spentTimeInMinute;

    return (
      <StatisticsContainer>
        <StatisticsList>
          <StatisticElement
            name="Mots justes"
            value={okWords}
          ></StatisticElement>
          <StatisticElement
            name="Mots faux"
            value={wrongWords}
          ></StatisticElement>
          <StatisticElement
            name="Précision"
            value={accuracy}
          ></StatisticElement>

          <StatisticElement
            name="Mots par minutes"
            value={Math.floor((wordsPerMinute || 0) * 100) / 100}
          ></StatisticElement>
        </StatisticsList>
      </StatisticsContainer>
    );
  }
}
