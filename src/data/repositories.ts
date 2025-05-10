export interface Repository {
  id: number;
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  watchers: number;
  topics: string[];
}

export const repositories: Repository[] = [
  {
    id: 1,
    name: "data-visualization-toolkit",
    description: "A comprehensive Python toolkit for data visualization using Matplotlib, Seaborn, and Plotly. Includes pre-built templates and custom functions for financial, scientific, and business analytics.",
    url: "https://github.com/username/data-visualization-toolkit",
    stars: 127,
    forks: 42,
    watchers: 15,
    topics: ["python", "data-visualization", "matplotlib", "plotly", "seaborn"]
  },
  {
    id: 2,
    name: "sales-forecasting-model",
    description: "Machine learning models for accurate sales forecasting using time series analysis. Implements ARIMA, Prophet, and custom neural network models with automated parameter tuning.",
    url: "https://github.com/username/sales-forecasting-model",
    stars: 89,
    forks: 23,
    watchers: 11,
    topics: ["python", "machine-learning", "forecasting", "time-series", "neural-networks"]
  },
  {
    id: 3,
    name: "finance-data-analysis",
    description: "Financial data analysis toolkit with modules for risk assessment, portfolio optimization, and financial statement analysis using Python and pandas.",
    url: "https://github.com/username/finance-data-analysis",
    stars: 156,
    forks: 37,
    watchers: 19,
    topics: ["python", "finance", "pandas", "data-analysis", "portfolio-optimization"]
  },
  {
    id: 4,
    name: "data-cleaning-pipeline",
    description: "Automated ETL pipeline for data cleaning and preparation. Features handling of missing values, outlier detection, data normalization, and integration with various data sources.",
    url: "https://github.com/username/data-cleaning-pipeline",
    stars: 112,
    forks: 29,
    watchers: 14,
    topics: ["python", "etl", "data-cleaning", "pandas", "data-engineering"]
  },
  {
    id: 5,
    name: "customer-segmentation",
    description: "Customer segmentation algorithms using clustering techniques. Implements K-means, hierarchical clustering, and DBSCAN with interactive visualization tools.",
    url: "https://github.com/username/customer-segmentation",
    stars: 74,
    forks: 18,
    watchers: 8,
    topics: ["python", "clustering", "customer-analytics", "machine-learning", "scikit-learn"]
  },
  {
    id: 6,
    name: "nlp-sentiment-analysis",
    description: "Natural language processing tools for sentiment analysis and text classification. Built with NLTK, spaCy, and transformers for analyzing customer reviews and feedback.",
    url: "https://github.com/username/nlp-sentiment-analysis",
    stars: 93,
    forks: 26,
    watchers: 12,
    topics: ["python", "nlp", "sentiment-analysis", "machine-learning", "transformers"]
  }
];