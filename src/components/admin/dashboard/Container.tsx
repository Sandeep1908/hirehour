import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";

import { Card } from "./Card";

// const style = {
//   width: 400,
//   display: "flex",
//   gap: "20px",
// };

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "Team 1",
      },
      {
        id: 2,
        text: "Team 2",
      },
      {
        id: 3,
        text: "Team 3",
      }
     
    ]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        );
      },
      []
    );

    return (
      <>
        <div className="flex ">{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
