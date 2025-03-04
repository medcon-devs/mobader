import React from "react";
import { Typography } from "@mui/material";

export default function EventDate({ startDate }: { startDate: string }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Typography variant="subtitle2" color="textSecondary">
      {formatDate(startDate)}
    </Typography>
  );
}
