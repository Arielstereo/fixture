import dbConnection from "../../utils/database";
import Octavos from "../../models/Octavos";
import Layout from "../../components/Layout";
import { Collapse, Table, Grid } from "@nextui-org/react";
import Link from "next/link";

const ResultOctavos = ({ results }) => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-sky-400 text-3xl md:text-6xl text-center font-bold mt-32 mb-8">
          Pronósticos Octavos
        </h1>
        <div className="flex flex-wrap px-8">
          <Grid.Container gap={2} className="mb-16">
            {results.map((item) => (
              <Grid key={item._id}>
                <Collapse.Group splitted>
                  <Collapse
                    title={item.name + " " + item.surname}
                    className="uppercase text-xl font-bold w-64 md:w-96"
                  >
                    <Table className="w-full">
                      <Table.Header>
                        <Table.Column>
                          <span className="text-gray-800 text-xs md:text-lg">
                            Partido
                          </span>
                        </Table.Column>
                        <Table.Column>
                          <span className="text-gray-800 text-xs md:text-lg">
                            Resultado
                          </span>
                        </Table.Column>
                      </Table.Header>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">usa-hol</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">arg-aus</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked2}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">fra-pol </span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked3}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ing-sen</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked4}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">jap-cro</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked5}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">mar-esp</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked6}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">din-tun</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked7}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">fra-aus</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked8}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Collapse>
                </Collapse.Group>
              </Grid>
            ))}
          </Grid.Container>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Octavos.find({});
    const results = res.map((item) => {
      const result = item.toObject();
      result._id = item.id.toString();
      return result;
    });
    return { props: { results } };
  } catch (error) {
    console.log(error);
  }
}

export default ResultOctavos;
