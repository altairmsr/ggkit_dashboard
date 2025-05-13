import React from 'react';
import CarouselItem from './CarouselItem';
import { items } from './carousel-config'

function App() {
  return (
    <div className="cont_top">
		<div className="group_cont">
            <h2>Список студентов с дисциплинарными взысканиями</h2>
            <CarouselItem items={items} duration={40} />
        </div>
    </div>
  );
}

export default App;
