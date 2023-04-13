import React, { useState } from "react";

import { CategoriesContainer } from "./containers";
import { Categories } from "../entities";

const MainPage: React.FC = () => {
  const [categories, setCategories] = useState<Categories>({});

  return (
    <main>
      <section>
        <CategoriesContainer
          categories={categories}
          setCategories={setCategories}
        />
      </section>
    </main>
  );
};

export default MainPage;
