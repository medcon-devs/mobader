// generateStaticParams.ts
export const series = [
    {
      id: 1,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/1.png",
      isactive: true,
    },
    {
      id: 2,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/2.png",
      isactive: false,
    },
    {
      id: 3,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/3.png",
      isactive: false,
    },
    {
      id: 4,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/4.png",
      isactive: false,
    },
    {
      id: 5,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/5.png",
      isactive: false,
    },
    {
      id: 6,
      date: "Month 00, 2025",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: "/static/images/6.png",
      isactive: false,
    },
  ];
  
  export function generateStaticParams() {
    return series.map((card) => ({
      id: card.id.toString(),
    }));
  }
  