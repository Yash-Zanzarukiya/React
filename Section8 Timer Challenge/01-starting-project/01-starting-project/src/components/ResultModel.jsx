import { forwardRef } from "react";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModel = forwardRef(function ResultModel({ remainTime, targetTime, resetTimer }, ref) {
  const dialog = useRef();

  const isWon = remainTime > 0;
  const formattedRemainTime = (remainTime / 1000).toFixed(2);
  const score = Math.round((1 - remainTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
      {isWon ? <h2>You Scored : {score}</h2> : <h2>You Lost</h2>}
      <p>
        The target Time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You Stopped the Timer With <strong>{formattedRemainTime} Seconds Left.</strong>
      </p>
      <form method="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>,
    document.querySelector("#modal")
  );
});

export default ResultModel;
