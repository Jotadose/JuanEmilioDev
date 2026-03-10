interface ProjectPlaceholderProps {
  title: string;
  brandColor: string;
}

/**
 * Visual placeholder shown when no screenshot is available.
 * Replace `image` in src/data/projects.ts with the real path to swap it out.
 */
const ProjectPlaceholder = ({ title, brandColor }: ProjectPlaceholderProps) => {
  return (
    <div
      className="w-full aspect-video flex items-center justify-center relative overflow-hidden"
      style={{ background: "#0F172A" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at center, ${brandColor} 0%, transparent 70%)`,
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(to right, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Label */}
      <div className="relative z-10 text-center px-4">
        <div
          className="inline-block w-10 h-0.5 mb-3 rounded-full"
          style={{ background: brandColor }}
        />
        <p
          className="text-sm font-semibold tracking-widest uppercase opacity-70"
          style={{ color: brandColor }}
        >
          {title}
        </p>
        <p className="text-xs text-slate-600 mt-2">screenshot coming soon</p>
      </div>
    </div>
  );
};

export default ProjectPlaceholder;
