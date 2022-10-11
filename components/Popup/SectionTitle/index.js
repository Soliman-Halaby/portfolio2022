import { Title, Number } from "./style";

const SectionPart = ({ number, title, className}) => {
  return (
    <Title className={className}>
      <Number dangerouslySetInnerHTML={{__html: number}}/>
      {title}
    </Title>
  );
};

export default SectionPart;
