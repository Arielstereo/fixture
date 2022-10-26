import dbConnection from "../../utils/database";
import User from "../../models/Users";
import Layout from "../../components/Layout";
import { Table } from "@nextui-org/react";
import Link from "next/link";

const Podium = ({ users }) => {
  return (
    <Layout>
      <div>
        <h1 className="text-sky-400 text-4xl md:text-6xl text-center font-bold p-32">
          Pronósticos  Podio
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row mx-auto md:mx-32 gap-6 w-64 md:w-full mb-32">
          {users.map((user) => (
            <Table aria-label="table" key={user._id} className="z-0 md:p-8">
              <Table.Header>
                <Table.Column>
                  <span className="text-gray-800 text-sm md:text-lg uppercase font-bold">
                    {user.name + " " + user.surname}
                  </span>{" "}
                </Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <div className="flex flex-col">
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        1° {user.first}
                      </span>
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        2° {user.second}
                      </span>
                      <span className="text-yellow-400 uppercase md:text-2xl font-semibold">
                        3° {user.third}
                      </span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          ))}
        </div>
      <div className="flex gap-4 justify-center pb-8">
      <Link href="/pronosticos/match1">
        <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">Completa la Fecha 1</a>
        </Link>
        <span className="text-white text-xl font-bold">|</span>
        <Link href="/pronosticos/match2">
        <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">Completa la Fecha 2</a>
        </Link>
        <span className="text-white text-xl font-bold">|</span>
        <Link href="/pronosticos/match3">
        <a className="text-xl font-semibold text-yellow-400 hover:text-sky-400">Completa la Fecha 3</a>
        </Link>
      </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await User.find({});
    const users = res.map((item) => {
      const user = item.toObject();
      user._id = item.id.toString();
      return user;
    });
    return { props: { users } };
  } catch (error) {
    console.log(error);
  }
}

export default Podium;
