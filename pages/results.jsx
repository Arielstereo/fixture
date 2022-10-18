import dbConnection from "../utils/database";
import User from "../models/Users";
import Layout from "../components/Layout";
import { Table } from "@nextui-org/react";

const Results = ({ users }) => {
  return (
    <Layout>
      <div className="my-48">
        <h1 className="text-sky-400 text-4xl md:text-6xl text-center font-bold mb-32">
          Pronósticos - Podio
        </h1>
        <div className="flex flex-col md:flex-row mx-48 md:mx-32 gap-6">
          {users.map((user) => (
            <Table aria-label="table" key={user._id} className="w-full z-0">
              <Table.Header>
                <Table.Column>
                  <span className="text-gray-800 md:text-lg uppercase">
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
