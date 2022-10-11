import Image from "next/image";
import { Input } from "@nextui-org/react";
import { useAuth } from "../utils/Store";
import { useRouter } from "next/router";
import "animate.css";

const Kids = () => {
  const { setKids, setName, setSurname, setFirst, setSecond, setThird } =
    useAuth();
  const router = useRouter();

  return (
    <div className="flex flex-col items-center mt-32">
      <div className="mb-4">
        <Image src="/tredi.png" height="130" width="480" alt="logo" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="mt-8 mx-auto">
          <Image src="/logo.png" width="300" height="300" alt="logo" />
        </div>
        <div className="m-8">
          <h1 className="text-center text-yellow-500 text-6xl mb-8 font-bold animate__animated animate__heartBeat">
            Copa Kids
          </h1>
          <form className="flex flex-col gap-2">
            <Input
              rounded
              bordered
              size="xl"
              label="Nombre"
              placeholder="Nombre del chic@"
              color="warning"
              className="bg-white"
              onChange={(e) => setKids(e.target.value)}
            />

            <button
              onClick={(e) => {
                e.preventDefault();
                router.push("/pronosticos/match1");
                setName("");
                setSurname("");
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
};

export default Kids;
