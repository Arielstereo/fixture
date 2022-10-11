import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useAuth } from "../utils/Store";
import { useRouter } from "next/router";
import 'animate.css';


export default function Home() {
  const { setName, setSurname, setKids, setFirst, setSecond, setThird } =
    useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="pb-8">
        <Image src="/tredi.png" height="130" width="480" alt="logo" />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-6xl text-yellow-300 font-semibold animate__animated animate__backInLeft">Copa Tredi Argentina</h1>
        <h2 className="text-4xl text-slate-100 font-semibold animate__animated animate__backInRight">Mundial Qatar 2022</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="mt-8 mx-auto">
          <Image src="/logo.png" width="300" height="300" alt="logo" />
        </div>
        <div className="mt-16 mb-8 mx-8">
          <form className="flex flex-col gap-2">
            <Input
              rounded
              bordered
              size="xl"
              label="Nombre"
              placeholder="Nombre"
              color="warning"
              className="bg-white"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              rounded
              bordered
              size="xl"
              label="Apellido"
              placeholder="Apellido"
              color="warning"
              className="bg-white"
              onChange={(e) => setSurname(e.target.value)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/pronosticos/match1");
                setKids("");
                setFirst("");
                setSecond("");
                setThird("");
              }}
              className="text-gray-800 font-semibold bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"
            >
              Ingresar
            </button>
          </form>
        </div>
        <div>
          <Image src="/skipper.png" width="380" height="380" alt="skipper" />
        </div>
      </div>
    </div>
  );
}
