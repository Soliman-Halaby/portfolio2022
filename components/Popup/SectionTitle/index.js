import { Title, Number } from "./style";

const SectionPart = ({ number, title, className, top = "25", left = "20" }) => {
  return (
    <Title top={top} left={left}>
      <Number dangerouslySetInnerHTML={{ __html: number }} />
      {title}
    </Title>
  );
};

export default SectionPart;
