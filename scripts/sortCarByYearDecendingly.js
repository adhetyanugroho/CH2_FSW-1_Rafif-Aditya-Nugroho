function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  let swapped = true;
  let currentIndex = 0;

  while (swapped) {
    swapped = false;
    currentIndex++;
    for (let i = 0; i < result.length - currentIndex; i++) {
      if (result[i].year < result[i + 1].year) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}