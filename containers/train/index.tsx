import React from "react";
import {
  DactyloContainer,
  DactyloTitle,
  DactyloLine,
  DactyloTextContainer,
  DactyloInput,
  DactyloWord,
  DactyloLetter,
  DactyloHint,
} from "./style";

import Statistics from "../../components/statistics";

import words from "../../constants/words";
import { keysMap } from "../../constants/keys";

const numberOfLines = 3;
const SPACE = " ";

interface wordDetails {
  word: string;
  status: string;
  wordInfo: { letter: string; status: string }[];
}

interface dactyloState {
  displayedWords: wordDetails[][];
  currentWordId: number;
  wordValue: string;
  hint: string | undefined;
  summary: {
    okWords: number;
    wrongWords: number;
    okLetters: number;
    wrongLetters: number;
  };
}

export default class Dactylo extends React.Component<any, dactyloState> {
  constructor(props: any) {
    super(props);

    const displayedWords: wordDetails[][] = [];

    for (let i = 0; i < numberOfLines; i++) {
      displayedWords.push(fillLine());
    }

    this.state = {
      displayedWords,
      currentWordId: 0,
      wordValue: "",
      hint: "",
      summary: {
        okWords: 0,
        wrongWords: 0,
        okLetters: 0,
        wrongLetters: 0,
      },
    };
  }

  componentDidMount() {
    this.updateHint();
  }

  updateLettersStatus = (newValue: string) => {
    const { displayedWords } = this.state;
    const [[targetWord]] = displayedWords;
    const newValueLetters = newValue.split("");

    const updatedWordInfo = targetWord.wordInfo.map((letter, letterIndex) => {
      if (!newValueLetters[letterIndex]) return { ...letter, status: "NONE" };
      else if (newValueLetters[letterIndex] === letter.letter)
        return { ...letter, status: "OK" };
      else if (newValueLetters[letterIndex] !== letter.letter)
        return { ...letter, status: "WRONG" };
      else return { ...letter, status: "NONE" };
    });

    displayedWords[0][0] = {
      ...targetWord,
      wordInfo: updatedWordInfo,
    };

    this.setState({ displayedWords, wordValue: newValue });
    this.updateHint();
  };

  goNextWord = () => {
    const { displayedWords } = this.state;
    const [firstLine] = displayedWords;
    const [firstWordOfFirstLine] = firstLine;

    this.updateSummary(firstWordOfFirstLine);

    const updateFirstLine: wordDetails[] = firstLine.slice(1, firstLine.length);

    let updatedDisplayedWords: wordDetails[][] = [
      updateFirstLine,
      ...displayedWords.slice(1, 3),
    ];

    if (!updateFirstLine.length) {
      updatedDisplayedWords = displayedWords.slice(1, 3);
      updatedDisplayedWords.push(fillLine());
    }

    this.setState({
      displayedWords: updatedDisplayedWords,
      wordValue: "",
    });

    this.updateHint(true);
  };

  updateSummary = (doneWord: wordDetails) => {
    const isWordOk = doneWord.wordInfo.every(({ status }) => status === "OK");
    const wrongLetterCount = doneWord.wordInfo.reduce(
      (prevCount, { status }) => (status === "OK" ? prevCount : prevCount + 1),
      0
    );
    const okLetterCount = doneWord.wordInfo.length - wrongLetterCount;

    this.setState(({ summary }) => ({
      summary: {
        okWords: isWordOk ? summary.okWords + 1 : summary.okWords,
        wrongWords: isWordOk ? summary.wrongWords : summary.wrongWords + 1,
        okLetters: summary.okLetters + okLetterCount,
        wrongLetters: summary.wrongLetters + wrongLetterCount,
      },
    }));
  };

  updateHint = (isNextWord?: boolean) => {
    const { displayedWords } = this.state;
    const [[targetWord]] = displayedWords;
    const nextLetter = targetWord.wordInfo.find(
      ({ status }) => status === "NONE"
    );

    if (isNextWord) {
      const nextTargetWord = displayedWords[0][1] || displayedWords[1][0];
      const nextWordFirstLetter = nextTargetWord.wordInfo[0];

      this.setState({ hint: findInMap(nextWordFirstLetter?.letter) });
    } else {
      if (nextLetter) {
        this.setState({ hint: findInMap(nextLetter?.letter) });
      } else {
        this.setState({ hint: findInMap(SPACE) });
      }
    }
  };

  handleChange = (e: any) => {
    const newValue = e.target.value;
    const newValueLetters = newValue.split("");
    const newLetter = newValueLetters[newValueLetters.length - 1];

    if (newLetter === SPACE) {
      this.goNextWord();
    } else {
      this.updateLettersStatus(newValue);
    }
  };

  render() {
    const { displayedWords, wordValue, hint, summary } = this.state;

    return (
      <DactyloContainer>
        <Statistics
          okWords={summary.okWords}
          wrongWords={summary.wrongWords}
          okLetters={summary.okLetters}
          wrongLetters={summary.wrongLetters}
        ></Statistics>
        <DactyloTitle>Let's Train !</DactyloTitle>
        <DactyloTextContainer>
          {displayedWords.map((line, index) => (
            <DactyloLine key={index}>
              {line.map(({ wordInfo }, wordIndex) => (
                <DactyloWord key={wordIndex}>
                  {wordInfo.map(({ letter, status }, letterIndex) => (
                    <DactyloLetter key={letterIndex} status={status}>
                      {letter}
                    </DactyloLetter>
                  ))}
                </DactyloWord>
              ))}
            </DactyloLine>
          ))}
        </DactyloTextContainer>
        <DactyloInput
          id="input"
          placeholder="Train Here"
          value={wordValue}
          onChange={this.handleChange}
        ></DactyloInput>
        <DactyloHint>{hint}</DactyloHint>
      </DactyloContainer>
    );
  }
}

const fillLine = () => {
  const numberOfWords = 10;
  const line: wordDetails[] = [];
  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex: number = Math.ceil(Math.random() * words.length);

    const chosenWord = words[randomIndex].toLowerCase();

    const wordInfo = chosenWord
      .split("")
      .map((letter) => ({ letter, status: "NONE" }));

    line.push({ wordInfo, word: chosenWord, status: "NONE" });
  }

  return line;
};

const findInMap = (letter: string) => {
  for (let [key, value] of keysMap) {
    if (key.includes(letter)) return value;
  }
};
