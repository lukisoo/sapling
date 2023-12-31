import React from 'react';
import Node from "./Node.jsx";
import styled from "styled-components";

const RoadmapContainer = styled.div`
    display: flex;
    gap: 60px;
    overflow-x: auto;
    padding: 40px;
    height: 400px;
    overflow-y: scroll;
`;

const NodeWrapper = styled.div`
    transform: ${props => `translateY(${props.move}px)`};
    transition: transform 0.3s ease-out;
`;

const Roadmap = (props) => {
    const {items, open} = props;
    const amplitude = 100;
    const period = items.length / (4 * Math.PI);
    const phaseOffset = Math.PI / 4;

  return (
      <RoadmapContainer>
          {items.map((item, index) => {
              const verticalPosition = amplitude * (Math.sin(index / period) + phaseOffset);
              return (
                  <NodeWrapper key={index} move={verticalPosition}>
                      <Node type={item.type} task={item.task} coins={item.coins} open={open}/>
                  </NodeWrapper>
              );
          })}
      </RoadmapContainer>
  );
};

export default Roadmap;
