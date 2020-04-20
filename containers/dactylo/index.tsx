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

interface lines {
  word: string;
  status: string;
  wordInfo: { letter: string; status: string }[];
}

const letters: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const ex = new Map([
  [["&", "a", "q", "w", "<", "ctrl", "maj", "fn"], "auriculaire gauche"],
  [["z", "é", "s", "x"], "annulaire gauche"],
  [["e", "d", "c"], "majeur gauche"],
  [["(", "-", "r", "t", "f", "g", "c", "v"], "index gauche"],
  [[" ", "alt"], "pouce gauche"],
  [
    ["Enter", "Backspace", "=", "$", "*", "^", "ù", "!", ")", "p", "m"],
    "auriculaire droit",
  ],
  [["à", "o", "l"], "annulaire droit"],
  [["ç", "i", "k", ","], "majeur droit"],
  [["è", "_", "u", "y", "h", "j", "b", "n"], "index droit"],
  [[" "], "pouce droit"],
]);

export default class Dactylo extends React.Component<
  any,
  {
    displayedWords: lines[][];
    currentWordId: number;
    wordValue: string;
    hint: string;
    summary: {
      okWords: number;
      wrongWords: number;
      okLetters: number;
      wrongLetters: number;
    };
  }
> {
  constructor(props: any) {
    super(props);

    const numberOfLines = 3;

    const displayedWords: lines[][] = [];

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

  handleKeyDown = (e: any) => {
    if (!letters.includes(e.key) && e.key !== " " && e.key !== "Backspace") {
      return;
    }

    const { displayedWords } = this.state;

    if (e.key === " ") {
      const updateChosenLine: lines[] = displayedWords[0].slice(
        1,
        displayedWords[0].length
      );

      let updatedChosenLines: lines[][] = [updateChosenLine].concat(
        displayedWords.slice(1, 3)
      );
      if (!updateChosenLine.length) {
        updatedChosenLines = displayedWords.slice(1, 3);

        updatedChosenLines.push(fillLine());
      }

      this.setState({
        displayedWords: updatedChosenLines,
      });
    } else if (e.key === "Backspace") {
      const currentWord = displayedWords[0][0];

      const previousLetterIndex: number =
        currentWord.wordInfo.findIndex((letter) => letter.status === "NONE") -
        1;

      if (previousLetterIndex >= 0) {
        displayedWords[0][0].wordInfo[previousLetterIndex].status = "NONE";
      } else {
        displayedWords[0][0].wordInfo[currentWord.wordInfo.length - 1].status =
          "NONE";
      }

      this.setState({ displayedWords });
    } else {
      const currentWord = displayedWords[0][0];

      const currentLetterIndex: number = currentWord.wordInfo.findIndex(
        (letter) => letter.status === "NONE"
      );

      const updatedStatus: string =
        currentWord.wordInfo[currentLetterIndex].letter === e.key
          ? "OK"
          : "WRONG";

      displayedWords[0][0].wordInfo[currentLetterIndex].status = updatedStatus;

      this.setState({ displayedWords });
    }
  };

  handleChange = (e: any) => {
    const nextValue = e.target.value;
    const newValueLetters = nextValue.split("");
    const newLetter = newValueLetters[newValueLetters.length - 1];

    if (newLetter === " ") {
      this.goNextWord();
    } else {
      this.updateLettersStatus(nextValue);
    }
  };

  updateLettersStatus = (newValue: string) => {
    const { displayedWords } = this.state;
    const targetWord = displayedWords[0][0];
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

    this.updateSummary(displayedWords[0][0]);

    const updateChosenLine: lines[] = displayedWords[0].slice(
      1,
      displayedWords[0].length
    );

    let updatedDisplayedWords: lines[][] = [
      updateChosenLine,
      ...displayedWords.slice(1, 3),
    ];

    if (!updateChosenLine.length) {
      updatedDisplayedWords = displayedWords.slice(1, 3);

      updatedDisplayedWords.push(fillLine());
    }

    this.setState({
      displayedWords: updatedDisplayedWords,
      wordValue: "",
    });

    this.updateHint(true);
  };

  updateSummary = (doneWord: lines) => {
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
    const targetWord = displayedWords[0][0];
    const nextLetter = targetWord.wordInfo.find(
      ({ status }) => status === "NONE"
    );

    if (isNextWord) {
      const nextTargetWord = displayedWords[0][1] || displayedWords[1][0];
      const nextWordFirstLetter = nextTargetWord.wordInfo[0];

      for (let [key, value] of ex) {
        if (nextWordFirstLetter && key.includes(nextWordFirstLetter.letter)) {
          this.setState({ hint: value });
        }
      }
    } else {
      if (nextLetter) {
        for (let [key, value] of ex) {
          if (nextLetter && key.includes(nextLetter.letter))
            this.setState({ hint: value });
        }
      } else {
        for (let [key, value] of ex) {
          if (key.includes(" ")) this.setState({ hint: value });
        }
      }
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
        <DactyloTitle>Let's write !</DactyloTitle>
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
  const line: lines[] = [];
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
