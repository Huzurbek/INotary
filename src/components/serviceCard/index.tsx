import "./style.sass";

interface ICourseProps {
  id: number;
  img: string;
  title: string;
  body: string;
}
export const ServiceCard = ({ service }: { service: ICourseProps }) => {
  return (
    <div className="service-card">
      <div
        className="service-card__header"
        style={{
          backgroundImage: `url('../assets/${service.img}')`,
        }}
      ></div>
      <div className="service-card__content service-content">
        <div className="service-content__wrapper">
          <h5 className="service-content__title">{service.title}</h5>
          <div className="service-label">
            <div className="service-label__green-cicle" /> Online{" "}
            <span className="service-label__sign">&</span> In person
          </div>
        </div>
        <p className="service-content__text">{service.body}</p>
      </div>
    </div>
  );
};
