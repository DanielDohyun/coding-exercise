import { useIntersection } from "./useIntersection";
import handleViewport from "react-in-viewport";

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? "#217ac0" : "#ff9800";
  const text = inViewport ? "In viewport" : "Not in viewport";
  return (
    <div className="viewport-block" ref={forwardedRef}>
      {/* <h3>{ text }</h3>
      <div style={{ width: '400px', height: '300px', background: color }} /> */}
      <Second inViewport={inViewport} />
    </div>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

// const inViewport = useIntersection(ref, "-200px");
// console.log(ref);
const third = document.querySelector(".app__third");
const inViewport = useIntersection(third, "0px");
if (inViewport) {
  console.log("in viewport:", third);
}

<ViewportBlock
  onEnterViewport={() => console.log("enter")}
  onLeaveViewport={() => console.log("leave")}
/>;
