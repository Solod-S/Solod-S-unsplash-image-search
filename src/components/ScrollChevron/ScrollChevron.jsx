import React from 'react';
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs';
import { ChevronUp, ChevronDown, Chevron } from './ScrollChevron.styled';

export const ScrollChevron = () => {
  return (
    <Chevron>
      <ChevronUp href="#up">
        <BsChevronDoubleUp size={34} fill="#fff" />
      </ChevronUp>
      <ChevronDown href="#down">
        <BsChevronDoubleDown size={34} fill="#fff" />
      </ChevronDown>
    </Chevron>
  );
};
