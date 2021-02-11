interface ISpacerProps {
  height: number;
}

const Spacer = (props: ISpacerProps) => (
  <div style={{ height: `${props.height}px` }}></div>
);

export default Spacer;
