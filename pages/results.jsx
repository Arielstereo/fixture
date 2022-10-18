import dbConnection from "../utils/database";
import User from "../models/Users";
import Layout from "../components/Layout";
import { Table } from "@nextui-org/react";

const Results = ({ users }) => {
  return (
    <Layout>
      <div className="my-32 m-4">
        <h1 className="text-sky-400 text-6xl text-center font-bold mb-32">
          Pronósticos - Podio
        </h1>
        <div className="mx-4 md:mx-72 w-[500px] lg:w-[1000px]">
          <Table aria-label="table" className="w-full z-0">
            <Table.Header>
              <Table.Column>
                <span className="text-gray-800 md:text-sm">NOMBRE</span>{" "}
              </Table.Column>
              <Table.Column>
                <span className="text-gray-800 md:text-sm">CAMPEON</span>
              </Table.Column>
              <Table.Column>
                <span className="text-gray-800 md:text-sm">SUBCAMPEON</span>
              </Table.Column>
              <Table.Column>
                <span className="text-gray-800 md:text-sm">TERCERO</span>
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>
                    <span className="text-sky-400 uppercase md:text-3xl font-semibold">
                      {user.name + ' ' + user.surname}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-yellow-400 uppercase md:text-3xl font-semibold">
                      {user.first}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-yellow-400 uppercase md:text-3xl font-semibold">
                      {user.second}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-yellow-400 uppercase md:text-3xl font-semibold">
                      {user.third}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
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
