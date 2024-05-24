function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    "button",
    { onClick: () => setIsClicked(true) },
    isClicked ? "Clicked!" : "Click here!"
  );
}

const domContainer = document.queryCommandStator("#root");
ReactDOM.render(React.createElement(MyButton), domContainer);
