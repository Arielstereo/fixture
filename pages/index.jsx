import Image from "next/image";
import { Input, Link } from "@nextui-org/react";
import { useAuth } from "../utils/Store";
import { useRouter } from "next/router";
import "animate.css";
import Layout from "../components/Layout";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";
import Users from "../models/Users";
import dbConnection from "../utils/database";
import Select from "react-select";
import toast from "react-hot-toast";

export default function Home({ users }) {
  const {
    name,
    setName,
    surname,
    setSurname,
    password,
    setPassword,
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
  } = useAuth();

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const options = [
    { value: "Senegal", label: "Senegal" },
    { value: "Holanda", label: "Holanda" },
    { value: "Qatar", label: "Qatar" },
    { value: "Ecuador", label: "Ecuador" },
    { value: "Inglaterra", label: "Inglaterra" },
    { value: "Iran", label: "Iran" },
    { value: "EEUU", label: "EEUU" },
    { value: "Gales", label: "Gales" },
    { value: "Argentina", label: "Argentina" },
    { value: "A.Saudita", label: "A.Saudita" },
    { value: "Mexico", label: "Mexico" },
    { value: "Polonia", label: "Polonia" },
    { value: "Dinamarca", label: "Dinamarca" },
    { value: "Tunez", label: "Tunez" },
    { value: "Francia", label: "Francia" },
    { value: "Australia", label: "Australia" },
    { value: "Alemania", label: "Alemania" },
    { value: "Japon", label: "Japon" },
    { value: "España", label: "España" },
    { value: "CostaRica", label: "CostaRica" },
    { value: "Marruecos", label: "Marruecos" },
    { value: "Croacia", label: "Croacia" },
    { value: "Belgica", label: "Belgica" },
    { value: "Canada", label: "Canada" },
    { value: "Suiza", label: "Suiza" },
    { value: "Camerun", label: "Camerun" },
    { value: "Brasil", label: "Brasil" },
    { value: "Serbia", label: "Serbia" },
    { value: "Uruguay", label: "Uruguay" },
    { value: "Corea", label: "Corea" },
    { value: "Portugal", label: "Portugal" },
    { value: "Ghana", label: "Ghana" },
  ];

  const router = useRouter();

  const data = async (user) => {
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
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
      password,
      first,
      second,
      third,
    };
    const duplicate = await users.find(
      (user) => user.password === Number(newUser.password)
    );

    if (!name || !surname || !password || !first || !second || !third) {
      setError("* Todos los campos son obligatorios!");
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
    if (name && surname && password && first && second && third && !duplicate) {
      const userSaved = await data(newUser);
      console.log(userSaved);
      setIsSubmit(true);
      toast.success("Tus datos han sido guardado correctamente, suerte!", {
        duration: 3500,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "2px solid #fff",
        },
      });
      router.push("/results/podium");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center w-full">
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
            <Image src="/logo.png" width="400" height="400" alt="logo" />
          </div>
          <div className="flex flex-col gap-8 items-center mt-16 mb-8 mx-2 ">
          <Image src="/trofeo.png" width="400" height="400" alt="logo" />
            <Link href="/pronosticos/octavos">
              <a className="text-2xl font-semibold text-yellow-400 hover:text-sky-400">
                Completa los octavos de final
              </a>
            </Link>
          </div>
          <div>
            <Image src="/skipper.png" width="500" height="500" alt="skipper" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    await dbConnection();
    const res = await Users.find({});
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
