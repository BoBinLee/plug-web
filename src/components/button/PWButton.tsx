import React, { Component } from "react";
import styled, { css } from "styled-components";

type ButtonType = "primary" | "secondary" | "list" | "listtab";

interface IProps {
  active?: boolean;
  className?: string;
  label: string;
  type: ButtonType;
  onClick?: () => void;
}

const PrimaryButton = styled.button`
  background: #3867d6;
  font-family: SpoqaHanSans-Bold;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  padding: 16px 32px;
  border-radius: 4px;
  height: 50px;
  margin: 0;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 20px 2px rgba(107, 107, 107, 0.5);
    transform: scale(1.05, 1.05);
  }
`;

const SecondaryButton = styled.button`
  background: #ffffff;
  border: 1px solid #3867d6;
  font-family: SpoqaHanSans-Bold;
  font-size: 16px;
  color: #3867d6;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  padding: 16px 32px;
  border-radius: 4px;
  height: 50px;
  margin: 0;
  &:hover {
    box-shadow: 0 3px 20px 2px rgba(107, 107, 107, 0.5);
    transform: scale(1.05, 1.05);
  }
`;

const ActiveCSS = css`
  font-weight: 600;
`;

const ListButton = styled.li.attrs<{ active: boolean }>({})`
  all: unset;
  font-size: 16px;
  color: #3867d6;
  cursor: pointer;
  margin-left: 40px;
  ${({ active }) => (active ? ActiveCSS : ``)}
  &:hover {
    transform: scale(1.05, 1.05);
  }
  &:active {
    ${ActiveCSS}
  }
`;

const ListTabButton = styled(ListButton)`
  color: #4a4a4a;
  padding: 10px 0;
  ${({ active }) => (active ? ActiveCSS : ``)}
`;

const BUTTON_TYPE_COMPONENT_MAP = new Map<ButtonType, React.ReactNode>()
  .set("primary", PrimaryButton)
  .set("secondary", SecondaryButton)
  .set("list", ListButton)
  .set("listtab", ListTabButton);

export class PWButton extends Component<IProps> {
  public render() {
    const { active, className, type, label, onClick } = this.props;
    const TargetComponent: any = BUTTON_TYPE_COMPONENT_MAP.get(type);
    return (
      <TargetComponent className={className} active={active} onClick={onClick}>
        {label}
      </TargetComponent>
    );
  }
}
