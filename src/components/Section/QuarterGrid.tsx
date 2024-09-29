interface QuarterGridProps {
  children: React.ReactNode;
}

export const QuarterGrid: React.FC<QuarterGridProps> = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8">{children}</div>;
};
