export default function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
