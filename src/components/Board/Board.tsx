import { FC, memo, SyntheticEvent } from "react";

import { StyledBoard, StyledBoardTile, StyledBoardWrapper } from "./Board.style";

import { IRecordImage } from "../../Layout/types";

export interface IBoardProps {
  images: Array<IRecordImage>,
  handleClickImage: (e: SyntheticEvent, name: string) => void
}

const Board: FC<IBoardProps> = ({ images, handleClickImage }) => (
  <StyledBoardWrapper>
    <StyledBoard>
      {Object.values(images).map(({ name, url }: IRecordImage, index: number) => (
        <StyledBoardTile 
        key={`${name}-${index}`}
        onClick={(e) => handleClickImage(e, name)}
        >
          <img src={url} alt={name} data-testid={name}/>
        </StyledBoardTile>
      ))}
    </StyledBoard>
  </StyledBoardWrapper>
)

export default memo(Board);
