import dbConnection from "../utils/database";
import User from "../models/Users";
import Layout from "../components/Layout";
import { Table } from "@nextui-org/react";

const Results = ({ users }) => {
  return (
    <Layout>
      <div className="m-32">
        <h1 className="text-sky-400 text-4xl md:text-6xl text-center font-bold mb-32">
          Pronósticos - Podio
        </h1>
        <div className="flex flex-col md:flex-wrap md:flex-row mx-auto md:mx-32 gap-6 w-64 md:w-full">
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

export default Results;
