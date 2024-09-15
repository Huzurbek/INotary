import "./style.sass";
type props = {
  id: number;
  icon: string;
  title: string;
  text: string;
};
const ProcessStep = ({ step }: { step: props }) => {
  const { title, text, icon } = step;
  return (
    <div className="process-step">
      <div
        className="process-step__icon-wrapper"
        style={{
          backgroundImage: `url(../assets/${icon})`,
        }}
      />
      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__text">{text}</p>
    </div>
  );
};

export default ProcessStep;
