interface ThridGridProps {
  children: React.ReactNode;
}

export const ThirdGrid: React.FC<ThridGridProps> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{children}</div>;
};
