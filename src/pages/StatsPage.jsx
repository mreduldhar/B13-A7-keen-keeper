import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useTimeline } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useTimeline();

  const counts = timeline.reduce((count, curr) => {
    count[curr.type] = (count[curr.type] || 0) + 1;
    return count;
  }, {});

  const data = [
    { name: "Text", value: counts.text, fill: "#244D3F" },
    { name: "Call", value: counts.call, fill: "#7E35E1" },
    { name: "Video", value: counts.video, fill: "#37A163" },
  ].filter((d) => d.value > 0);

  const hasData = data.some((item) => item.value > 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mb-6">
          Friendship Analytics
        </h1>

        {hasData ? (
          <div className="bg-white drop-shadow-md rounded-xl p-6">
            <h2 className="text-base font-medium text-gray-600 mb-4">
              By Interaction Type
            </h2>
            <PieChart
              style={{
                width: "100%",
                maxWidth: "400px",
                maxHeight: "50vh",
                margin: "auto",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#244D3F"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend
                iconType="circle"
                iconSize={10}
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
              <Tooltip />
            </PieChart>
          </div>
        ) : (
          <div className="max-w-5xl h-52 flex justify-center items-center">
            <p className="text-gray-400 text-2xl">No data available</p>
          </div>
        )}
      </main>
    </div>
  );
}
