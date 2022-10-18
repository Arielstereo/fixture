import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useAuth } from "../utils/Store";
import { useRouter } from "next/router";
import "animate.css";
import Layout from "../components/Layout";

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

  const router = useRouter();

  const data = async (user) => {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    router.push("/results");
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
    const userSaved = await data(newUser);
    setUser(userSaved);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-48">
        <div className="flex flex-col gap-4 text-center">
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
          <span className="text-yellow-400 font-semibold">* Ingresa tus datos y elige tu podio antes del 20/11.</span>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4 mb-8">
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
              <button className="text-gray-800 font-semibold bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4">
                Ingresar
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
