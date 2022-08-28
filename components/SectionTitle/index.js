import { Title, Number } from "./style";

const SectionPart = ({ number = "", title = "" }) => {
  return (
    <Title>
      <Number>{number}</Number>
      {title}
    </Title>
  );
};

export default SectionPart;
