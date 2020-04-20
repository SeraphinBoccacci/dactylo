import React from "react";
import Link from "next/link";

import {
  HomeContainer,
  HomeTitle,
  HomeList,
  HomeListElement,
  HomeLink,
} from "./style";

const Index = () => (
  <HomeContainer>
    <HomeTitle>Welcome On Board !</HomeTitle>
    <HomeList>
      <HomeListElement>
        <Link href="/dactylo">
          <HomeLink>Dactylo</HomeLink>
        </Link>
      </HomeListElement>
    </HomeList>
  </HomeContainer>
);

export default Index;
