interface StrategyOutputProps {
  strategy: string | null;
}

export const StrategyOutput = ({ strategy }: StrategyOutputProps) => {
  if (!strategy) return null;

  return (
    <div className="mt-8 p-6 bg-black/50 rounded-lg border border-indigo-800 animate-fade-in">
      <h3 className="text-xl font-semibold text-indigo-300 mb-4">Generated Strategy</h3>
      <pre className="whitespace-pre-wrap text-gray-300 font-mono text-sm">
        {strategy}
      </pre>
    </div>
  );
};