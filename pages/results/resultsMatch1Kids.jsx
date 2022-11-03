import dbConnection from "../../utils/database";
import Match1Kids from "../../models/Match1Kids";
import Layout from "../../components/Layout";
import { Collapse, Grid, Table } from "@nextui-org/react";
import Link from "next/link";

const ResultMatch1Kids = ({ results }) => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-sky-400 text-3xl md:text-6xl text-center font-bold mt-32 mb-8">
          Pronósticos Fecha 1 <span className="text-yellow-400">Kids</span>
        </h1>
        <div className="flex flex-wrap mb-32">
          <Grid.Container gap={2} className="mb-64">
            {results.map((item) => (
              <Grid key={item._id}>
                <Collapse.Group splitted>
                  <Collapse
                    title={item.name + " " + "/" + " " + item.family}
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
                            <span className="text-xs md:text-lg">sen-hol</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">qat-ecu</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked2}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ing-ira </span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked3}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">usa-gal</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked4}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">arg-sau</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked5}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">mex-pol</span>
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
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ale-jap</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked9}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">esp-cos</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked10}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">mar-cro </span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked11}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">bel-can</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked12}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">sui-cam</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked13}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">bra-ser</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked14}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">uru-cor</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked15}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">por-gha</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked16}
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
        <div className="text-center pb-8">
          <Link href="/pronosticos/match2Kids">
            <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">
              Completa la Fecha 2
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Match1Kids.find({});
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

export default ResultMatch1Kids;
