"use client";

const icons = [
  { icon: "python/python-original", x: "10%", y: "20%", size: 40, delay: 0 },
  { icon: "react/react-original", x: "85%", y: "15%", size: 35, delay: 1 },
  { icon: "nodejs/nodejs-original", x: "75%", y: "70%", size: 38, delay: 2 },
  { icon: "docker/docker-original", x: "15%", y: "75%", size: 36, delay: 0.5 },
  { icon: "postgresql/postgresql-original", x: "90%", y: "45%", size: 32, delay: 1.5 },
  { icon: "typescript/typescript-original", x: "5%", y: "50%", size: 34, delay: 2.5 },
  { icon: "fastapi/fastapi-original", x: "80%", y: "85%", size: 30, delay: 3 },
  { icon: "git/git-original", x: "20%", y: "90%", size: 28, delay: 1.8 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((item, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-[0.07]"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: `${item.delay}s`,
            animationDuration: `${6 + item.delay}s`,
          }}
        >
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.icon}.svg`}
            alt=""
            width={item.size}
            height={item.size}
            className="opacity-80"
          />
        </div>
      ))}
    </div>
  );
}
