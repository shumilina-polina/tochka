import { Skeleton } from "@mui/material";

export const SkeletText = ({ sx }) => (
  <Skeleton
    sx={{ ...sx, borderRadius: "10%", height: "18px", width: "100%" }}
    animation="wave"
    variant="rectangular"
  />
);
