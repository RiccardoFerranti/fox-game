import { FC, SyntheticEvent } from "react";

import { FaClipboardList } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { StyledCommandsWrapper } from "./Commands.style";

const Commands: FC = () => {
  const navigate = useNavigate();

  const goTo = (e: SyntheticEvent, url: string) => {
    navigate(`/${url}`);
  }

  return (
    <StyledCommandsWrapper>
      <IoSettingsSharp title="Settings" onClick={(e) => goTo(e, 'settings')} />
      <FaClipboardList title="Scoreboard" onClick={(e) => goTo(e, 'score')} />
    </StyledCommandsWrapper>
  )
}

export default Commands;