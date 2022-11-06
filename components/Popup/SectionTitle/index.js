import { Title, Number } from "./style";

const SectionPart = ({
  number,
  title,
  className,
  lol,
  top = "25",
  left = "20",
}) => {
  return (
    <Title top={top} left={left} className={lol}>
      <Number dangerouslySetInnerHTML={{ __html: number }} />
      {title}
    </Title>
  );
};

export default SectionPart;
