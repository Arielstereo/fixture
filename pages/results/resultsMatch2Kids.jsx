import dbConnection from "../../utils/database";
import Match2Kids from "../../models/Match2Kids";
import Layout from "../../components/Layout";
import { Collapse, Grid, Table } from "@nextui-org/react";
import Link from "next/link";

const ResultMatch2Kids = ({ results }) => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-sky-400 text-3xl md:text-6xl text-center font-bold mt-32 mb-8">
          Pronósticos Fecha 2 <span className="text-yellow-400">Kids</span>
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
                            <span className="text-xs md:text-lg">sen-qat</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">hol-ecu</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked2}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ing-usa</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked3}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ira-gal</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked4}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">arg-mex</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked5}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">sau-pol</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked6}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">din-fra</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked7}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">tun-aus</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked8}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ale-esp</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked9}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">jap-cos</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked10}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">mar-bel </span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked11}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cro-can</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked12}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">sui-bra</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked13}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cam-ser</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked14}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">uru-por</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked15}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cor-gha</span>
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
          <Link href="/pronosticos/match3Kids">
            <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">
              Completa la Fecha 3
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
    const res = await Match2Kids.find({});
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

export default ResultMatch2Kids;
