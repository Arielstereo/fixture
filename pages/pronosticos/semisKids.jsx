import { useAuth } from "../../utils/Store";
import { Card, Input, Radio } from "@nextui-org/react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { ImSpinner3 } from "react-icons/im";
import SemisKids from "../../models/SemisKids";
import dbConnection from "../../utils/database";
import toast from "react-hot-toast";

export default function Finals4({ semis }) {
  const {
    name,
    surname,
    password,
    setPassword,
    setSurname,
    setName,
    setSemis,
  } = useAuth();
  const [checked, setChecked] = useState("");
  const [checked2, setChecked2] = useState("");

  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const data = async (result) => {
    try {
      const res = await fetch("/api/semisKids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      name,
      surname,
      password,
      checked,
      checked2
    };
    const duplicate = await semis.find(
      (res) => res.password === Number(result.password)
    );

    if (
      !name ||
      !surname ||
      !password ||
      !checked ||
      !checked2
    ) {
      setError("* Complete todos los resultados!");
      setName("");
      setSurname("");
      setPassword("");
      toast.error("Completa todos los campos!", {
        duration: 3500,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "2px solid #fff",
        },
      });
    }
    if (duplicate) {
      setMessage("* El usuario ya existe!");
      setName("");
      setSurname("");
      setPassword("");
      toast.error("Ya completaste esta fase!", {
        duration: 3500,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "2px solid #fff",
        },
      });
    }
    if (
      name &&
      surname &&
      password &&
      checked &&
      checked2 &&
      !duplicate
    ) {
      const resultSaved = await data(result);
      setIsSubmit(true);
      setSemis(resultSaved);
      toast.success("Tus datos han sido guardado correctamente, suerte!", {
        duration: 3500,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "2px solid #fff",
        },
      });
      router.push("/results/resultsSemisKids");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center px-10">
        <div className="flex flex-col text-center pt-32 pb-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-400 font-bold text-4xl md:text-6xl py-4">
              Semifinales - Kids
            </h3>
            <span className="text-yellow-500 text-lg font-semibold">
              * En esta fase cada acierto vale 8 puntos!
              <br />* Cuenta el resultado solamente de los 90 minutos!
            </span>
          </div>
        </div>
        <div className="mx-8 md:mx-36 lg:mx-32 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-col gap-8">
              <Input
                rounded
                bordered
                size="lg"
                label="Nombre"
                placeholder="Ingresa tu nombre"
                color="warning"
                className="bg-white md:w-80"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="lg"
                label="Nombre del familiar"
                placeholder="Nombre"
                color="warning"
                className="bg-white md:w-80"
                onChange={(e) => setSurname(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="lg"
                label="Contraseña (DNI Adulto)"
                placeholder="Ingrese su DNI"
                color="warning"
                className="bg-white md:w-80"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {message && (
                <span className="text-yellow-500 font-semibold text-center">
                  {message}
                </span>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <div className="mx-4">
                <Card
                  variant="bordered"
                  className="shadow-lg shadow-gray-800 bg-slate-100 w-60"
                >
                  <Card.Body>
                    <div className="px-3 pb-2">
                      <Radio.Group
                        value={checked}
                        onChange={setChecked}
                        label="Partido #1"
                        className="p-4"
                      >
                        <Radio value="Croacia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Croacia</span>
                            <Image
                              src="/cro.png"
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                        <Radio value="Empate" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value="Argentina" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Argentina</span>
                            <Image
                              src="/arg.jpg"
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                      </Radio.Group>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="mx-4">
                <Card
                  variant="bordered"
                  className="shadow-lg shadow-gray-800 bg-slate-100 w-60"
                >
                  <Card.Body>
                    <div className="px-3 pb-2">
                      <Radio.Group
                        value={checked2}
                        onChange={setChecked2}
                        label="Partido #2"
                        className="p-4"
                      >
                        <Radio value="Francia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Francia</span>
                            <Image
                              src="/fra.jpg"
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                        <Radio value="Empate" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value="Marruecos" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Marruecos</span>
                            <Image
                              src="/mar.gif"
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                      </Radio.Group>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
            {error && (
              <span className="text-yellow-500 font-semibold text-center my-4">
                {error}
              </span>
            )}
            <button
              // disabled={isSubmit}
              // className={
              //   isSubmit
              //     ? "text-gray-100 font-semibold bg-gray-600 border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"
              //     : "text-gray-800 font-semibold bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"
              // }
              disabled="true"
              className="text-gray-100 font-semibold bg-gray-600 border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"
            >
              {isSubmit ? (
                <div className="flex gap-6">
                  <ImSpinner3 className="h-6 w-6 animate-spin text-gray-100" />
                  <span>Cargando...</span>
                </div>
              ) : (
                "Guardar"
              )}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await SemisKids.find({});
    const semis = res.map((item) => {
      const user = item.toObject();
      user._id = item.id.toString();
      return user;
    });
    return { props: { semis } };
  } catch (error) {
    console.log(error);
  }
}
