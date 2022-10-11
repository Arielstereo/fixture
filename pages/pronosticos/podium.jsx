import { Input, Grid } from "@nextui-org/react";
import { useAuth } from "../../utils/Store";
import Layout from "../../components/Layout";

export default function Podium() {
  const {
    name,
    surname,
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
    kids,
  } = useAuth();

  return (
    <Layout>
      <div className="flex flex-col gap-16 text-center my-32">
        <h1 className=" text-yellow-500 text-6xl font-bold">
          Podio de{" "}
          <span className="uppercase">
            {" "}
            {name} {surname}{" "}
          </span>
          <span className="uppercase">{kids}</span>
        </h1>{" "}
        <div className="text-center">
          <span className="text-yellow-500 font-semibold text-xl">
            * Completa tu podio antes del 20/11/22, realiza una captura de pantalla y enviala al chat de asistencia de Tredi Argentina.
          </span>
        </div>
        <div className="flex gap-8 mx-auto font-semibold uppercase text-3xl">
          <h3 className="text-gray-50">
            1° Puesto:{" "}
            {!first ? "?" : <span className="text-yellow-500"> {first}</span>}
          </h3>
          <h3 className="text-gray-50">
            2° Puesto:{" "}
            {!second ? "?" : <span className="text-yellow-500"> {second}</span>}
          </h3>
          <h3 className="text-gray-50">
            3° Puesto:{" "}
            {!third ? "?" : <span className="text-yellow-500"> {third}</span>}
          </h3>
        </div>
        <Grid.Container gap={6}>
          <div className="flex flex-col mx-auto">
            <Grid>
              <Input
                onChange={(e) => setFirst(e.target.value)}
                labelPlaceholder="Campeon"
                status="warning"
                size="xl"
              />
            </Grid>
            <Grid>
              <Input
                onChange={(e) => setSecond(e.target.value)}
                labelPlaceholder="Subcampeon"
                status="warning"
                size="xl"
              />
            </Grid>
            <Grid>
              <Input
                onChange={(e) => setThird(e.target.value)}
                labelPlaceholder="Tercer puesto"
                status="warning"
                size="xl"
              />
            </Grid>
          </div>
        </Grid.Container>
      </div>
    </Layout>
  );
}
