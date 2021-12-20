const [visited, setVisited] = useState(false);
useEffect(() => {
  localStorage.setItem("visited", "true");
  // console.log("set true");
});

//runs once at the first render
useEffect(() => {
  const visited = JSON.parse(localStorage.getItem("visited"));
  if (visited) {
    setVisited(true);
    console.log(visited);
  }
}, []);

// window.addEventListener("beforeunload", function (event) {
//   localStorage.clear();
// });

window.onbeforeunload = function () {
  localStorage.clear();
};
