import { useAuth } from "../../utils/Store";
import { Card, Input, Radio } from "@nextui-org/react";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";

export default function Match2() {
  const { name, surname, setSurname, setName, setMatch2 } = useAuth();
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

  const data = async (result) => {
    try {
      const res = await axios.post("/api/match2", {
        result,
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
    if (
      !name ||
      !surname ||
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
      setMessage("* Complete todos los resultados!");
    } else {
      const resultSaved = await data(result);
      setIsSubmit(true);
      setMatch2(resultSaved);
      router.push("/positions");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center px-10">
        <div className="flex flex-col text-center pt-32 pb-4 gap-4">
          <div className="flex flex-col gap-4">
            <h3 className="text-sky-400 font-bold text-4xl md:text-6xl py-4">
              Fase de grupos - Fecha 2
            </h3>
            <span className="text-yellow-500 text-lg font-semibold">
              * Completa todos los resultados antes del 24/11. En esta fase cada
              acierto vale 1 punto!
            </span>
          </div>
        </div>
        <div className="mx-8 md:mx-36 lg:mx-32 mb-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex gap-8">
              <Input
                rounded
                bordered
                size="xl"
                label="Nombre"
                placeholder="Ingresa tu nombre"
                color="warning"
                className="bg-white"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                rounded
                bordered
                size="xl"
                label="Apellido"
                placeholder="Ingresa tu apellido"
                color="warning"
                className="bg-white"
                onChange={(e) => setSurname(e.target.value)}
              />
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
                        <Radio value="Camerun" size="md">
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
            </div>
            {message && (
              <span className="text-yellow-500 font-semibold text-center my-4">
                {message}
              </span>
            )}
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
      </div>
    </Layout>
  );
}
