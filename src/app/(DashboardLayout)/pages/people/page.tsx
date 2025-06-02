"use client";
import { useEffect, useState } from "react";
import {
  LinearProgress,
  Pagination,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const People = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [pagina, setPagina] = useState(0);

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
        <TableContainer
          component={Paper}
          variant="outlined"
          elevation={0}
          sx={{ m: 1, width: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <caption>Nenhum registro encontrado.</caption>
            <TableFooter>
              {isLoaded && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <LinearProgress variant="indeterminate" />
                  </TableCell>
                </TableRow>
              )}
              {totalCount > 0 && totalCount > 10 && (
                <TableRow>
                  <TableCell colSpan={3}>
                    <Pagination
                      page={pagina}
                      count={Math.ceil(totalCount / 10)}
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </DashboardCard>
    </PageContainer>
  );
};

export default People;
