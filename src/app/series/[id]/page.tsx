// src/app/series/[id]/page.tsx
import Footer from "@/app/layout/footer";
import ClinicalDetailsClient from "./ClinicalDetailsClient"; // Client-side component
import { series } from "./generateStaticParams"; // Centralize your series data if possible

export function generateStaticParams() {
  return series.map((card) => ({
    id: card.id.toString(),
  }));
}

export default async function  ClinicalDetails({ params }: { params: { id: string } }) {
  const _params = await params;
  const selectedCard = series.find((e) => e.id === parseInt(_params.id));

  if (!selectedCard) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>No details available for the selected card.</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Pass the selected card to the client-side component */}
      <ClinicalDetailsClient selectedCard={selectedCard} />
      <Footer />
    </div>
  );
}
