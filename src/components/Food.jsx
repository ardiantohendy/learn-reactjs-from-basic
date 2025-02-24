function Food() {
  const foodList = ["Banana", "Apple", "Watermelon", "Pizza"];

  return (
    <>
      <ul>
        {foodList.map((food, i) => {
          return <li key={i}>{food}</li>;
        })}
      </ul>
    </>
  );
}

export default Food;
