interface IChildrenProps {
  children: React.ReactNode;
}

const Container: React.FC<IChildrenProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
