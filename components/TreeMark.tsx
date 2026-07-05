export default function TreeMark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: color,
        maskImage: 'url(/commune-logo.png)',
        WebkitMaskImage: 'url(/commune-logo.png)',
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}
