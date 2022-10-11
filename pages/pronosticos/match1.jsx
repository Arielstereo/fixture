import { useAuth } from "../../utils/Store";
import { Card, Grid, Radio } from "@nextui-org/react";
import Image from "next/image";
import data from "../../utils/data";
import Layout from "../../components/Layout";

export default function Match1() {
  const { name, surname, kids } = useAuth();

  return (
    <Layout>
      <div className="flex flex-col text-center pt-32 pb-4 gap-4">
        <h1 className="text-white text-6xl font-bold">
          Resultados de <span className="uppercase text-yellow-500">{name}  {surname} </span>
        </h1>
        <h2 className="text-6xl font-bold uppercase text-yellow-500">{kids}</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-200 font-semibold font-mono text-4xl">
            Fecha 1
          </h3>
          <span className="text-yellow-500 text-lg font-semibold">
            * Completa todos los resultados antes del 20/11/22. En esta fase cada
            acierto vale 1 punto! Al terminar realiza una captura de pantalla y
            enviala al chat de asistencia de Tredi Argentina.
            
          </span>
        </div>
      </div>
      <div className="py-8 mx-4 md:mx-36 lg:mx-32">
        <Grid.Container gap={2}>
          {data.match1.map((item, index) => (
            <Grid xs={6} md={4} lg={3} key={index}>
              <div className="w-60">
                <Card
                  variant="bordered"
                  className="shadow-lg shadow-gray-800 bg-slate-100"
                >
                  <Card.Body>
                    <div className="py-2 px-6">
                      <Radio.Group>
                        <Radio value={item.teamA} size="md">
                          <div className="flex gap-8">
                            <span className="text-base">{item.teamA}</span>
                            <Image
                              src={item.flagA}
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                        <Radio value="empate" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value={item.teamB} size="md">
                          <div className="flex gap-8">
                            <span className="text-base">{item.teamB}</span>
                            <Image
                              src={item.flagB}
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                      </Radio.Group>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </Layout>
  );
}
