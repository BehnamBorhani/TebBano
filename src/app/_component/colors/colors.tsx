import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? "#ddd" : "#333";

export const Colors: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center" lang="en" dir="ltr">
      {Object.entries(tailwindColors).map(([name, color]) => {
        if (typeof color === "string") {
          return <ColorBox key={name} name={name} color={color} />;
        } else {
          return Object.entries(color).map(([key, value]) => (
            <ColorBox
              key={name + `-${key}`}
              name={name + `-${key}`}
              color={value}
            />
          ));
        }
      })}
    </div>
  );
};

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <div
      className="flex h-60 w-96 flex-col items-center justify-center text-center uppercase"
      style={{ backgroundColor: color, color: getTextColor(color) }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
};
