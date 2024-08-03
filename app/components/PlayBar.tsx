import MotionWrapper from "../Motions/FadingMotions";

export default function PlayBar() {
  return (
    <MotionWrapper
      classNames={
        "absolute inset-x-0 bottom-0 h-[10%] bg-zinc-950 shadow-lg shadow-white text-white w-full "
      }
      type={"FadeUp"}
    >
      player
    </MotionWrapper>
  );
}
