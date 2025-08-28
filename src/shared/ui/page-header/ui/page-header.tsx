import "./page-header.scss";

export const PageHeaderLayout = ({
  slider,
  characteristics,
  scrollDown,
}: {
  slider: React.ReactNode;
  characteristics: React.ReactNode;
  scrollDown: React.ReactNode;
}) => {
  return (
    <div className="page-header">
      {slider}
      {characteristics}
      {scrollDown}
    </div>
  );
};
