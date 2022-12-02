import {
  Table,
  Modal,
  useModal,
  Button,
  Text,
} from "@nextui-org/react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Positions() {
  const { setVisible, bindings } = useModal();

  const users = [
    {
      name: "Alejandra Quintairos",
      points: 25,
    },
    {
      name: "Joaquin Valese",
      points: 25,
    },
    {
      name: "Marcelo De Passos",
      points: 23,
    },
    {
      name: "Angel Valese",
      points: 20,
    },
    
    {
      name: "Victor Gonzalez",
      points: 20,
    },
    {
      name: "Xoana Albornoz",
      points: 19,
    },
    {
      name: "Carlos Arrosa",
      points: 15,
    },
    {
      name: "Maximo Coll",
      points: 15,
    },
    {
      name: "Adolfo Arrosa",
      points: 13,
    },
    {
      name: "Marcela Gulla",
      points: 13,
    },
    {
      name: "Eduardo Avila",
      points: 0,
    },
  ];

  const kids = [
    {
      name: "Jazmín",
      points: 20,
    },
    {
      name: "Joaquín",
      points: 20,
    },

    {
      name: "Lautaro",
      points: 13 ,
    },
    {
      name: "Dana",
      points: 13,
    },
  ];

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-6xl font-bold text-center text-sky-400 mt-32">
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
              <Text
                id="modal-title"
                size={25}
                className="text-white font-bold text-3xl py-4"
              >
                Reglamento del torneo
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description" className="font-semibold">
                En la primera fase cada acierto vale 1 punto.
                <br /> A partir de octavos de final cada acierto vale 3 puntos.
                <br /> En cuartos de final 5 puntos.
                <br /> En semifinales 8 puntos.
                <br /> Tercer puesto 10 puntos.
                <br />
                Final 15 puntos.
                <br /> El resultado se toma en cuenta dentro de los 90 minutos
                de juego, no cuenta el resultado de la prórroga y/o penales.
                <br /> Antes de iniciar el torneo cada participante deberá
                elegir el podio: campeón, subcampeón y el ganador del tercer
                puesto.
                <br /> Puntajes: Campeón 30 puntos, subcampeón 20 y tercero 10.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                auto
                flat
                className="bg-black text-white font-semibold"
                onClick={() => setVisible(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center my-4">
            <div className="w-[380px] md:w-[600px] rounded-3xl">
              <div>
                <h1 className="flex items-center justify-center text-yellow-400 text-2xl md:text-4xl text-center py-2 font-bold">
                  Torneo Tredi Argentina{" "}
                  <Image
                    src="/trofeo.png"
                    alt="trofeo"
                    width="100"
                    height="100"
                  />
                </h1>
              </div>
              <Table aria-label="table" className="w-full h-full z-0">
                <Table.Header>
                  <Table.Column>
                    <span className="text-gray-800 text-xs md:text-lg">
                      NOMBRE
                    </span>
                  </Table.Column>
                  <Table.Column>
                    <span className="text-gray-800 text-xs md:text-lg">
                      PUNTOS
                    </span>
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  {users
                    .sort((a, b) => a.points < b.points)
                    .map(({ index, name, points }) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          <div className="flex gap-2 items-center">
                            <span className="text-sky-400 text-xl md:text-2xl font-semibold">
                              {name}
                            </span>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <span className="text-yellow-400 text-xl md:text-2xl font-semibold px-4">
                            {points}
                          </span>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center my-4">
            <div className="w-[380px] md:w-[600px] rounded-3xl">
              <div>
                <h1 className="flex items-center justify-center text-yellow-400 text-2xl md:text-4xl text-center py-2 font-bold">
                  Torneo Tredi Kids{" "}
                  <Image
                    src="/trofeo.png"
                    alt="trofeo"
                    width="100"
                    height="100"
                  />
                </h1>
              </div>
              <Table aria-label="table" className="w-full h-full z-0">
                <Table.Header>
                  <Table.Column>
                    <span className="text-gray-800 text-xs md:text-lg">
                      NOMBRE
                    </span>
                  </Table.Column>
                  <Table.Column>
                    <span className="text-gray-800 text-xs md:text-lg">
                      PUNTOS
                    </span>
                  </Table.Column>
                </Table.Header>
                <Table.Body>
                  {kids
                    .sort((a, b) => a.points < b.points)
                    .map(({ index, name, points }) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          <div className="flex gap-2 items-center">
                            <span className="text-sky-400 text-xl md:text-2xl font-semibold">
                              {name}
                            </span>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <span className="text-yellow-400 text-xl md:text-2xl font-semibold px-4">
                            {points}
                          </span>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-center my-16">
          <h1 className="text-6xl font-bold text-center text-sky-400 my-8">
            Premios
          </h1>
          <span className="text-yellow-500 font-semibold text-xl">
            1° Puesto: Gift card Solo Deportes $30000
          </span>
          <span className="text-yellow-500 font-semibold text-xl">
            2° Puesto: Gift card Solo Deportes $20000
          </span>
          <span className="text-yellow-500 font-semibold text-xl">
            3° Puesto: Gift card Solo Deportes $10000
          </span>
          <span className="text-sky-400 font-semibold text-base mx-8 mt-6">
            * En caso de empate en algún puesto se definirá el ganador primero
            por acierto al campeón, después por acierto al subcampeón, y luego
            por el acierto al tercer puesto. De seguir la igualdad se tendrá en
            cuenta que participante completo primero sus pronósticos. Sino se
            realizará un sorteo.
          </span>
        </div>
      </div>
    </Layout>
  );
}
