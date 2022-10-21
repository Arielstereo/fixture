import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useAuth } from "../utils/Store";
import { useRouter } from "next/router";
import "animate.css";
import Layout from "../components/Layout";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const {
    name,
    setName,
    surname,
    setSurname,
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
    setUser,
  } = useAuth();

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");


  const router = useRouter();

  const data = async (user) => {
    try {
      const res = await axios.post("/api/user", {
        user,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      surname,
      first,
      second,
      third,
    };
    if (!name || !surname || !first || !second || !third) {
      setMessage("* Todos los campos son obligatorios!");
    } else {
      const userSaved = await data(newUser);
      setIsSubmit(true);
      setUser(userSaved);
      router.push("/pronosticos/match1");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-4 text-center mt-32">
          <h1 className="text-6xl text-sky-400 font-bold animate__animated animate__backInLeft">
            Copa Tredi Argentina
          </h1>
          <h2 className="text-5xl text-slate-50 font-bold animate__animated animate__backInRight">
            Mundial Qatar 2022
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:ml-16">
          <div className="mt-8 mx-auto">
            <Image src="/logo.png" width="300" height="300" alt="logo" />
          </div>
          <div className="mt-16 mb-8 mx-8">
            <span className="text-yellow-400 font-semibold">
              * Ingresa tus datos y elige tu podio antes del 11/11.
            </span>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 mt-4 mb-8"
            >
              <Input
                rounded
                bordered
                size="xl"
                label="Nombre"
                placeholder="Ingrese su nombre"
                color="warning"
                className="bg-white"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="xl"
                label="Apellido"
                placeholder="Ingrese su apellido"
                color="warning"
                className="bg-white"
                onChange={(e) => setSurname(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="xl"
                label="Campeón"
                placeholder="Campeón"
                color="warning"
                className="bg-white"
                onChange={(e) => setFirst(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="xl"
                label="Subcampeón"
                placeholder="SubCampeón"
                color="warning"
                className="bg-white"
                onChange={(e) => setSecond(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="xl"
                label="Tercero"
                placeholder="Tercero"
                color="warning"
                className="bg-white"
                onChange={(e) => setThird(e.target.value)}
              />
              {message && <span className="text-yellow-500 font-semibold text-center">{message}</span> }
              <button
                disabled={isSubmit}
                className="text-gray-800 font-semibold bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"
              >
                {isSubmit ? (
                  <div className="flex gap-6">
                    <ImSpinner3 className="h-6 w-6 animate-spin" />
                    <span>Cargando...</span>
                  </div>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
          <div>
            <Image src="/skipper.png" width="380" height="380" alt="skipper" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
