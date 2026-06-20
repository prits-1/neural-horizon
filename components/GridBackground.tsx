export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden opacity-[0.05]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}