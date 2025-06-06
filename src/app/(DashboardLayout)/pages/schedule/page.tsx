"use client";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import FullCalendar from "@/app/(DashboardLayout)/components/shared/FullCalendar";

const Schedule = () => {
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
    <PageContainer title="Agenda" description="this is Agenda">
      <DashboardCard title="Agenda">
        <Typography>This is a Agenda</Typography>
        <FullCalendar />
      </DashboardCard>
    </PageContainer>
  );
};

export default Schedule;
