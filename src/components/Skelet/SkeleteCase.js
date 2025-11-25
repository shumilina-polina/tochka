import { Skeleton } from "@mui/material";
import { SkeletText } from "./SkeletText";

export const SkeletCase = ({ sx }) => (
  <div>
    <Skeleton
      sx={{ ...sx, height: 70, width: 70, mb: 1 }}
      animation="wave"
      variant="circular"
    />
    <SkeletText sx={{ mb: 1 }} />
    <SkeletText sx={{ mb: 1 }} />
    <SkeletText sx={{ mb: 1 }} />
  </div>
);
