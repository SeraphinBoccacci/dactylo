import React from "react";

import { StatisticsContainer, StatisticsTitle, StatisticsItem } from "./style";

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
      <StatisticsContainer
        title={<StatisticsTitle>Your Stats</StatisticsTitle>}
        size="small"
        bordered
        column={1}
        layout="horizontal"
      >
        <StatisticsItem label="Mots justes">{okWords}</StatisticsItem>
        <StatisticsItem label="Mots faux">{wrongWords}</StatisticsItem>
        <StatisticsItem label="Précision">{accuracy}</StatisticsItem>
        <StatisticsItem label="Mots par minutes">
          {Math.floor((wordsPerMinute || 0) * 100) / 100}
        </StatisticsItem>
      </StatisticsContainer>
    );
  }
}
