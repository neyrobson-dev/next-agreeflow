"use client";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Pessoas = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !user) {
      router.push("/authentication/login");
    }
  }, [isLoaded, user]);

  if (!isLoaded) {
    return <div>Carregando...</div>;
  }
  return (
    <PageContainer title="Pessoas" description="this is Pessoas">
      <DashboardCard title="Pessoas">
        <Typography>This is a Pessoas</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Pessoas;
