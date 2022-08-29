import { Title, Number } from "./style";

const SectionPart = ({ number, title, className}) => {
  return (
    <Title className={className}>
      <Number>{number}</Number>
      {title}
    </Title>
  );
};

export default SectionPart;
