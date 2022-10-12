import { Table, Modal, useModal, Button, Text } from "@nextui-org/react";
import Image from "next/image";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Positions() {
  const { setVisible, bindings } = useModal();

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-6xl font-bold text-center text-gray-100 mt-32">
          Posiciones
        </h1>
        <div className="flex justify-center mt-16">
          <Button
            auto
            shadow
            color="warning"
            onClick={() => setVisible(true)}
            className="bg-yellow-300 hover:bg-transparent text-gray-800 text-lg p-6 font-semibold hover:text-white z-0"
          >
            Ver reglamento
          </Button>
          <Modal
            blur
            width="600px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
            className="bg-yellow-500"
          >
            <Modal.Header>
              <Text id="modal-title" size={25}>
                Reglamento del torneo
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description">
                En la primera fase cada acierto vale 1 punto. A partir de
                octavos de final cada acierto vale 3 puntos. En cuartos de final
                5 puntos. En semifinales 8 puntos. Tercer puesto 10 puntos.
                Final 15 puntos. El resultado se toma en cuenta dentro de los 90
                minutos de juego, no cuenta el resultado de la prórroga y/o
                penales. Antes de iniciar el torneo cada participante deberá
                elegir el podio: campeón, subcampeón y el ganador del tercer
                puesto. Puntajes: Campeón 30 puntos, subcampeón 20 y tercero 10.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                auto
                flat
                className="bg-black text-white"
                onClick={() => setVisible(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="divide-y-2">
          <div className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center my-4">
            <div className="w-[350px] md:w-[600px] rounded-3xl">
              <div>
                <h1 className="flex items-center  justify-center text-white text-4xl text-center py-2 font-bold">
                  Torneo Tredi Argentina{" "}
                  <Image
                    src="/trofeo.png"
                    alt="trofeo"
                    width="100"
                    height="100"
                  />
                </h1>
              </div>
              <Table aria-label="table" className="w-full h-96 z-0">
                <Table.Header>
                  <Table.Column>
                    <span className="text-gray-800 text-sm">NOMBRE</span>{" "}
                  </Table.Column>
                  <Table.Column>
                    <span className="text-gray-800 text-sm">PUNTOS</span>
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  {data.users.map((user) => (
                    <Table.Row key={user.name}>
                      <Table.Cell>
                        <span className="text-white text-3xl font-semibold">
                          {user.name}{" "}
                          <span className="text-lg">, {user.surname}</span>
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-white text-3xl font-semibold">
                          {user.points}
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
            <div className="w-[350px] md:w-[600px] rounded-3xl">
              <div>
                <h1 className="flex items-center  justify-center text-white text-4xl text-center py-2 font-bold">
                  Torneo Kids{" "}
                  <Image
                    src="/trofeo.png"
                    alt="trofeo"
                    width="100"
                    height="100"
                  />
                </h1>
              </div>
              <Table aria-label="table" className="w-full h-96">
                <Table.Header>
                  <Table.Column>
                    <span className="text-gray-800 text-sm">NOMBRE</span>{" "}
                  </Table.Column>
                  <Table.Column>
                    <span className="text-gray-800 text-sm">PUNTOS</span>
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  {data.kids.map((user) => (
                    <Table.Row key={user.name}>
                      <Table.Cell>
                        <span className="text-white text-3xl font-semibold">
                          {user.name}
                        </span>
                      </Table.Cell>
                      <Table.Cell>
                        <span className="text-white text-3xl font-semibold">
                          {user.points}
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center my-16">
            <h1 className="text-6xl font-bold text-center text-gray-100 my-8">
              Premios
            </h1>
            <span className="text-yellow-500 font-semibold text-xl">
              1° Puesto: Camiseta Argentina | kids: Pelota mundial
            </span>
            <span className="text-yellow-500 font-semibold text-xl">
              2° Puesto: Asado para 4 personas | kids: Gift card Solo Deportes
              $15000
            </span>
            <span className="text-yellow-500 font-semibold text-xl">
              3° Puesto: Picada para 4 personas| kids: Gift card Solo Deportes
              $10000
            </span>
            <span className="text-yellow-500 font-semibold text-xl">
              4° Puesto: Gift card Solo Deportes $10000 | kids: Gift card Solo
              Deportes $7500
            </span>
            <span className="text-white font-semibold text-base mx-8 mt-6">
              * En caso de empate en algún puesto se definirá el ganador primero
              por acierto al campeón, después por acierto al subcampeón, y luego
              por el acierto al tercer puesto. De seguir la igualdad se tendrá
              en cuenta que participante de su familia obtuvo más puntos en el
              otro torneo. Sino se realizará un sorteo.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
