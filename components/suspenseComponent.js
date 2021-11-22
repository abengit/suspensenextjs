let myData = {};
let promise = {};

const SuspenseComponent = ({ value }) => {
  const waitForData = () => {
    if (myData[value] !== undefined) return myData[value];

    if (!promise[value])
      promise[value] = fetch(
        "https://jsonplaceholder.typicode.com/todos/" + `${value}`
      )
        .then((res) => res.json())
        .then((d) => (myData[value] = d));
    throw promise[value];
  };

  const data = waitForData();

  return (
    <div className="w-full  flex justify-center items-center h-screen">
      {data.title || "Hello Ali"}
    </div>
  );
};

export default SuspenseComponent;
