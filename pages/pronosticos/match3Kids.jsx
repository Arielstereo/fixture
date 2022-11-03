import { useAuth } from "../../utils/Store";
import { Card, Input, Radio } from "@nextui-org/react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { ImSpinner3 } from "react-icons/im";
import Match3Kids from "../../models/Match3Kids";
import dbConnection from "../../utils/database";
import toast from "react-hot-toast";

export default function Stage1({ match3Kids }) {
  const { name, family, setFamily, setName, password, setPassword } = useAuth();
  const [checked, setChecked] = useState("");
  const [checked2, setChecked2] = useState("");
  const [checked3, setChecked3] = useState("");
  const [checked4, setChecked4] = useState("");
  const [checked5, setChecked5] = useState("");
  const [checked6, setChecked6] = useState("");
  const [checked7, setChecked7] = useState("");
  const [checked8, setChecked8] = useState("");
  const [checked9, setChecked9] = useState("");
  const [checked10, setChecked10] = useState("");
  const [checked11, setChecked11] = useState("");
  const [checked12, setChecked12] = useState("");
  const [checked13, setChecked13] = useState("");
  const [checked14, setChecked14] = useState("");
  const [checked15, setChecked15] = useState("");
  const [checked16, setChecked16] = useState("");

  const router = useRouter();

  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const data = async (result) => {
    try {
      const res = await fetch("/api/match3Kids", {
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
      family,
      password,
      checked,
      checked2,
      checked3,
      checked4,
      checked5,
      checked6,
      checked7,
      checked8,
      checked9,
      checked10,
      checked11,
      checked12,
      checked13,
      checked14,
      checked15,
      checked16,
    };
    const duplicate = await match3Kids.find(
      (res) => res.password === Number(result.password)
    );

    if (
      !name ||
      !family ||
      !password ||
      !checked ||
      !checked2 ||
      !checked3 ||
      !checked4 ||
      !checked5 ||
      !checked6 ||
      !checked7 ||
      !checked8 ||
      !checked9 ||
      !checked10 ||
      !checked11 ||
      !checked12 ||
      !checked13 ||
      !checked14 ||
      !checked15 ||
      !checked16
    ) {
      setError("* Complete todos los resultados!");
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
    if (
      name &&
      family &&
      password &&
      checked &&
      checked2 &&
      checked3 &&
      checked4 &&
      checked5 &&
      checked6 &&
      checked7 &&
      checked8 &&
      checked9 &&
      checked10 &&
      checked11 &&
      checked12 &&
      checked13 &&
      checked14 &&
      checked15 &&
      checked16 &&
      !duplicate
    ) {
      const resultSaved = await data(result);
      setIsSubmit(true);
      console.log(resultSaved);
      toast.success("Tus datos han sido guardado correctamente, suerte!", {
        duration: 3500,
        position: "top-center",
        style: {
          background: "#000",
          color: "#fff",
          border: "2px solid #fff",
        },
      });
      router.push("/results/resultsMatch3Kids");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center px-10">
        <div className="flex flex-col text-center pt-32 pb-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-400 font-bold text-4xl md:text-6xl py-4">
              Fase de grupos - Fecha 3{" "}
              <span className="text-yellow-400">Kids</span>
            </h3>
            <span className="text-yellow-500 text-lg font-semibold">
              * Completa todos los resultados antes del 29/11. En esta fase cada
              acierto vale 1 punto!
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
                placeholder="Ingresa el nombre"
                color="warning"
                className="bg-white md:w-80"
                onChange={(e) => setFamily(e.target.value)}
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
                        <Radio value="Senegal" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Senegal</span>
                            <Image
                              src="/sen.png"
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
                        <Radio value="Ecuador" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Ecuador</span>
                            <Image
                              src="/ecu.jpg"
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
                        <Radio value="Qatar" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Qatar</span>
                            <Image
                              src="/qat.jpg"
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
                        <Radio value="Holanda" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Holanda</span>
                            <Image
                              src="/hol.png"
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
                        value={checked3}
                        onChange={setChecked3}
                        label="Partido #3"
                        className="p-4"
                      >
                        <Radio value="Inglaterra" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Inglaterra</span>
                            <Image
                              src="/ing.jpg"
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
                        <Radio value="Gales" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Gales</span>
                            <Image
                              src="/gal.webp"
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
                        value={checked4}
                        onChange={setChecked4}
                        label="Partido #4"
                        className="p-4"
                      >
                        <Radio value="EEUU" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">EEUU</span>
                            <Image
                              src="/usa.jpg"
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
                        <Radio value="Iran" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Iran</span>
                            <Image
                              src="/ira.gif"
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
                        value={checked5}
                        onChange={setChecked5}
                        label="Partido #5"
                        className="p-4"
                      >
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
                        <Radio value="Empate" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value="Polonia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Polonia</span>
                            <Image
                              src="/pol.jpg"
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
                        value={checked6}
                        onChange={setChecked6}
                        label="Partido #6"
                        className="p-4"
                      >
                        <Radio value="Mexico" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Mexico</span>
                            <Image
                              src="/mex.jpg"
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
                        <Radio value="A.Saudita" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">A.Saudita</span>
                            <Image
                              src="/ara.png"
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
                        value={checked7}
                        onChange={setChecked7}
                        label="Partido #7"
                        className="p-4"
                      >
                        <Radio value="Dinamarca" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Dinamarca</span>
                            <Image
                              src="/din.jpg"
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
                        <Radio value="Australia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Australia</span>
                            <Image
                              src="/aus.png"
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
                        value={checked8}
                        onChange={setChecked8}
                        label="Partido #8"
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
                        <Radio value="Tunez" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Tunez</span>
                            <Image
                              src="/tun.jpg"
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
                        value={checked9}
                        onChange={setChecked9}
                        label="Partido #9"
                        className="p-4"
                      >
                        <Radio value="Alemania" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Alemania</span>
                            <Image
                              src="/ale.jpg"
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
                        <Radio value="CostaRica" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">CostaRica</span>
                            <Image
                              src="/cos.png"
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
                        value={checked10}
                        onChange={setChecked10}
                        label="Partido #10"
                        className="p-4"
                      >
                        <Radio value="España" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">España</span>
                            <Image
                              src="/esp.png"
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
                        <Radio value="Japon" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Japon</span>
                            <Image
                              src="/jap.jpg"
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
                        value={checked11}
                        onChange={setChecked11}
                        label="Partido #11"
                        className="p-4"
                      >
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
                        <Radio value="Empate" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value="Canada" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Canada</span>
                            <Image
                              src="/can.png"
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
                        value={checked12}
                        onChange={setChecked12}
                        label="Partido #12"
                        className="p-4"
                      >
                        <Radio value="Belgica" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Belgica</span>
                            <Image
                              src="/bel.gif"
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
                        value={checked13}
                        onChange={setChecked13}
                        label="Partido #13"
                        className="p-4"
                      >
                        <Radio value="Suiza" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Suiza</span>
                            <Image
                              src="/sui.jpg"
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
                        <Radio value="Serbia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Serbia</span>
                            <Image
                              src="/ser.png"
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
                        value={checked14}
                        onChange={setChecked14}
                        label="Partido #14"
                        className="p-4"
                      >
                        <Radio value="Brasil" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Brasil</span>
                            <Image
                              src="/bra.png"
                              width="35"
                              height="25"
                              alt=""
                              className="rounded-lg"
                            />
                          </div>
                        </Radio>
                        <Radio value="Camerun" size="md">
                          <span className="text-base">Empate</span>
                        </Radio>
                        <Radio value="Serbia" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Camerun</span>
                            <Image
                              src="/cam.png"
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
                        value={checked15}
                        onChange={setChecked15}
                        label="Partido #15"
                        className="p-4"
                      >
                        <Radio value="Uruguay" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Uruguay</span>
                            <Image
                              src="/uru.gif"
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
                        <Radio value="Ghana" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Ghana</span>
                            <Image
                              src="/gha.png"
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
                        value={checked16}
                        onChange={setChecked16}
                        label="Partido #16"
                        className="p-4"
                      >
                        <Radio value="Portugal" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Portugal</span>
                            <Image
                              src="/por.jpg"
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
                        <Radio value="Corea" size="md">
                          <div className="flex gap-8">
                            <span className="text-base">Corea</span>
                            <Image
                              src="/cor.gif"
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
              disabled="true" // disabled={isSubmit}
              // className= {isSubmit ?("text-gray-100 font-semibold bg-gray-600 border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4"):("text-gray-800 font-semibold bg-yellow-400 hover:bg-transparent hover:text-white border-2 border-white py-2 px-16 rounded-lg mx-12 mt-4")}
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
    const res = await Match3Kids.find({});
    const match3Kids = res.map((item) => {
      const user = item.toObject();
      user._id = item.id.toString();
      return user;
    });
    return { props: { match3Kids } };
  } catch (error) {
    console.log(error);
  }
}
