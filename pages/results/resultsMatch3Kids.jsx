import dbConnection from "../../utils/database";
import Match3Kids from "../../models/Match3Kids";
import Layout from "../../components/Layout";
import { Collapse, Grid, Table } from "@nextui-org/react";

const ResultMatch3Kids = ({ results }) => {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-sky-400 text-3xl md:text-6xl text-center font-bold mt-32 mb-8">
          Pronósticos Fecha 3 <span className="text-yellow-400">Kids</span>
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
                            <span className="text-xs md:text-lg">sen-ecu</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">hol-qat</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked2}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ing-gal</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked3}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ira-usa</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked4}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">arg-pol</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked5}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">sau-mex</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked6}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">din-aus</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked7}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">tun-fra</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked8}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">ale-cos</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked9}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">jap-esp</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked10}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">mar-can </span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked11}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cro-bel</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked12}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">sui-ser</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked13}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cam-bra</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked14}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">uru-gha</span>
                          </Table.Cell>
                          <Table.Cell>
                            <span className="text-green-700 text-xs md:text-lg">
                              {item.checked15}
                            </span>
                          </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>
                            <span className="text-xs md:text-lg">cor-por</span>
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
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Match3Kids.find({});
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

export default ResultMatch3Kids;
