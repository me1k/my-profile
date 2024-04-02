import React, { useEffect, useState } from "react";
import styles from "./worldCloud.module.css"; // Assuming you have some CSS for styling

type Props = {
  words: string[];
};
/**
 * Renders a word cloud component
 * @param {string[]} words - The array of words to be displayed
 * @returns {JSX.Element} The rendered word cloud
 */
const WordCloud = ({ words }: Props) => {
  const [wordPositions, setWordPositions] = useState<
    Array<{ left: number; top: number }>
  >([]);

  useEffect(() => {
    const generateWordPositions = (): Array<{ left: number; top: number }> => {
      const cloudContainer = document.querySelector(".word-cloud-container");
      const cloudRect = cloudContainer?.getBoundingClientRect();
      const minFontSize = 10;
      const maxFontSize = 30;
      const positions: Array<{ left: number; top: number, width: number, height: number }> = [];

      const generateRandomPosition = (): { left: number; top: number } => {
        if (!cloudRect) return { left: 0, top: 0 };
        return {
          left: Math.floor(Math.random() * (cloudRect.width - maxFontSize)),
          top: Math.floor(Math.random() * (cloudRect.height - maxFontSize)),
        };
      };

      const generateRandomSize = (): number =>
        Math.floor(Math.random() * (maxFontSize - minFontSize)) + minFontSize;

      const intersects = (
        rect1: { left: number; top: number; width: number; height: number },
        rect2: { left: number; top: number; width: number; height: number }
      ) =>
        rect1.left < rect2.left + rect2.width &&
        rect1.left + rect1.width > rect2.left &&
        rect1.top < rect2.top + rect2.height &&
        rect1.top + rect1.height > rect2.top;

      const rect1 = { width: 0, height: 0 };

      words.forEach((word) => {
        let position = generateRandomPosition();
        let fontSize = generateRandomSize();

        const wordRect = {
          left: position.left,
          top: position.top,
          width: fontSize * 0.6 * word.length,
          height: fontSize * 1.2,
        };

        while (positions.some((rect) => intersects(wordRect, rect))) {
          position = generateRandomPosition();
          wordRect.left = position.left;
          wordRect.top = position.top;
        }

        positions.push(wordRect);
      });

      return positions;
    };

    setWordPositions(generateWordPositions());
  }, [words]);

  return (
    <div className={styles["word-cloud-container"]}>
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            position: "absolute",
            top: `${wordPositions[index]?.top}px`,
            left: `${wordPositions[index]?.left}px`,
            fontSize: `${Math.floor(Math.random() * 20 + 10)}px`, // Random font size between 10 and 30
          }}
          className={styles["word-cloud__word"]}>
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
