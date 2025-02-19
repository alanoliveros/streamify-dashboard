# Streamify - Music Streaming Analytics Dashboard

## Overview
Streamify is a music streaming analytics dashboard designed to provide insightful data visualizations and key metrics for a fictional music streaming service. This dashboard helps management track user activity, revenue, and content performance through an intuitive and responsive user interface.

## Features
### Dashboard Overview
- **Key Metrics:**
    - Total Users: Total number of registered users.
    - Active Users: Number of users who streamed at least one song in the last 30 days.
    - Total Streams: Total number of songs streamed.
    - Revenue: Revenue generated from subscriptions and advertisements.
    - Top Artist: The artist with the most streams in the last 30 days.

### Data Visualization
- **User Growth Chart:** Line chart displaying user growth over the past 12 months.
- **Revenue Distribution:** Pie chart showing revenue breakdown from different sources (e.g., Subscriptions, Ads).
- **Top 5 Streamed Songs:** Bar chart displaying the most streamed songs in the past 30 days.

### Data Table
- Displays recent streams with the following columns:
    - Song Name
    - Artist
    - Date Streamed
    - Stream Count
    - User ID

### User Interaction
- **Sorting & Filtering:** Users can sort and filter the data table by date, stream count, artist, or song name.
- **Chart Interactions:** Users can hover over chart elements to see exact values and filter data tables by clicking on pie chart segments.

## Tech Stack
- **Framework:** Vite + React + TypeScript + SWC
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **UI Components:** Radix UI, ShadCN
- **Charts & Data Visualization:** Recharts
- **Routing:** React Router DOM

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/streamify-dashboard.git
   cd streamify-dashboard
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Start the development server:
   ```sh
   pnpm dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment
The application can be deployed using services like:
- **Vercel**: Deploy instantly using `vercel` CLI.
- **Netlify**: Drag and drop the build folder.
- **GitHub Pages**: Deploy via GitHub Actions or manual build upload.

## Performance Optimization
- Lazy loading and code splitting for faster loading.
- Memoization to reduce unnecessary re-renders.
- Optimized rendering for large datasets.

## Future Enhancements
- Real-time data updates.
- More interactive filtering and drill-down analytics.
- User authentication and role-based access.

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit your changes and push.
4. Open a pull request.