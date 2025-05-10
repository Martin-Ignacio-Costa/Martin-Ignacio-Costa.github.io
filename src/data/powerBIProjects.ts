export interface PowerBIProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  projectLink?: string;
}

export const powerBIProjects: PowerBIProject[] = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description: "A comprehensive sales analytics dashboard with real-time KPIs, regional comparisons, and time-series analysis. This dashboard helps sales teams identify trends, monitor performance, and make data-driven decisions to increase revenue.",
    image: "https://images.pexels.com/photos/7947401/pexels-photo-7947401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Sales", "Analytics", "Forecasting"],
    liveLink: "https://app.powerbi.com/view?r=example1",
    projectLink: "https://github.com/yourname/sales-dashboard"
  },
  {
    id: 2,
    title: "Financial Performance Metrics",
    description: "An executive-level financial dashboard providing insights into profit margins, revenue growth, expense analysis, and cash flow projections. Features interactive filters and drill-down capabilities for detailed analysis.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Finance", "Executive", "Profit Analysis"],
    liveLink: "https://app.powerbi.com/view?r=example2",
    projectLink: "https://github.com/yourname/finance-dashboard"
  },
  {
    id: 3,
    title: "Customer Segmentation Analysis",
    description: "A dynamic customer segmentation dashboard using RFM analysis, lifetime value metrics, and behavioral clustering to identify high-value customer segments and personalization opportunities.",
    image: "https://images.pexels.com/photos/7208626/pexels-photo-7208626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Customer Analytics", "Segmentation", "RFM"],
    liveLink: "https://app.powerbi.com/view?r=example3"
  },
  {
    id: 4,
    title: "Supply Chain Monitoring",
    description: "Real-time supply chain monitoring dashboard with inventory levels, supplier performance metrics, logistics tracking, and demand forecasting to optimize operations and reduce costs.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Supply Chain", "Logistics", "Forecasting"],
    liveLink: "https://app.powerbi.com/view?r=example4",
    projectLink: "https://github.com/yourname/supply-chain-dashboard"
  }
];