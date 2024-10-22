// src/chartjs-plugin-datalabels.d.ts
declare module 'chart.js' {
    interface PluginOptionsByType {
      datalabels?: {
        display?: boolean;
        color?: string;
        font?: {
          weight?: string | number;
        };
        formatter?: (value, context) => string;
      };
    }
  }
  