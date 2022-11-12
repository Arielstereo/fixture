import dbConnection from "../../utils/database";
import Kid from "../../models/Kids";
import Layout from "../../components/Layout";
import { Table } from "@nextui-org/react";
import Link from "next/link";

const PodiumKids = ({ kids }) => {
  return (
    <Layout>
      <div>
        <h1 className="text-sky-400 text-4xl md:text-6xl text-center font-bold py-32">
          Pronósticos Podio <span className="text-yellow-400">Kids</span>
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row mx-auto md:mx-8 gap-6 w-64 md:w-full mb-32">
          {kids.map((kid) => (
            <Table aria-label="table" key={kid._id} className="z-0 md:p-8">
              <Table.Header>
                <Table.Column>
                  <span className="text-gray-800 text-sm md:text-lg uppercase font-bold">
                    {kid.name + " " + "/" + " " + kid.family}
                  </span>{" "}
                </Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <div className="flex flex-col">
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        1° {kid.first}
                      </span>
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        2° {kid.second}
                      </span>
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        3° {kid.third}
                      </span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>
        <div className="text-center pb-8">
          <Link href="/pronosticos/match1Kids">
            <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">
              Completa la Fecha 1
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
    const res = await Kid.find({});
    const kids = res.map((item) => {
      const user = item.toObject();
      user._id = item.id.toString();
      return user;
    });
    return { props: { kids } };
  } catch (error) {
    console.log(error);
  }
}
export default PodiumKids;
