import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Box, Typography } from "@mui/material";

export const data = [
  { product: "Organic Cotton T-Shirt", type: "Organic", rating: "⭐ 4.8", sold: 12500, growth: "12%" },
  { product: "Recycled Cotton Hoodie", type: "Recycled", rating: "⭐ 4.5", sold: 8700, growth: "9%" },
  { product: "Cotton Denim Jacket", type: "Conventional", rating: "⭐ 4.3", sold: 5400, growth: "-3%" },
  { product: "Fair Trade Bedsheets", type: "Organic", rating: "⭐ 4.7", sold: 7800, growth: "7%" },
  { product: "Recycled Cotton Hoodie", type: "Recycled", rating: "⭐ 4.5", sold: 8700, growth: "9%" },
  { product: "Organic Cotton T-Shirt", type: "Organic", rating: "⭐ 4.8", sold: 12500, growth: "12%" },
  { product: "Cotton Denim Jacket", type: "Conventional", rating: "⭐ 4.3", sold: 5400, growth: "-3%" },
];

export const columns = [
  { id: "product", label: "Product Name" },
  { id: "type", label: "Cotton Type" },
  { id: "rating", label: "Avg. Rating" },
  { id: "sold", label: "Units Sold" },
  {
    id: "growth",
    label: "Growth",
    renderCell: (row) => {
      const isPositive = parseFloat(row.growth) > 0;
      return (
        <Box display="flex" alignItems="center" justifyContent="center">
          {isPositive ? (
            <TrendingUpIcon sx={{ color: "green", fontSize: 18, marginRight: "4px" }} />
          ) : (
            <TrendingDownIcon sx={{ color: "red", fontSize: 18, marginRight: "4px" }} />
          )}
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {row.growth}
          </Typography>
        </Box>
      );
    },
  },
];
