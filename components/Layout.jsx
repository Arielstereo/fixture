import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { Dropdown } from "@nextui-org/react";

export default function Layout({ children }) {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Copa Tredi-Argentina | 2022</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-slate-50 py-2 fixed top-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <a className="text-3xl text-red-700 hover:text-sky-400 font-bold flex items-center gap-4">
                  <Image src="/recicle.png" width="50" height="50" alt="logo" />{" "}
                  Copa Tredi 2022
                </a>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-slate-800"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-slate-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col md:flex-row gap-6 text-red-700 font-bold">
                <li>
                  <Link href="/positions">
                    <a className="hover:text-sky-400 text-lg">Posiciones</a>
                  </Link>
                </li>
                <li>
                  <Link href="/results">
                    <a className="hover:text-sky-400 text-lg">Podio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/resultsMatch1">
                    <a className="hover:text-sky-400 text-lg">Pronósticos</a>
                  </Link>
                </li>
                <li>
                  <Dropdown>
                    <Dropdown.Button
                      flat
                      className="text-red-700 font-bold text-xl pb-3"
                    >
                      Fase de Grupos
                    </Dropdown.Button>
                    <Dropdown.Menu aria-label="Static Actions" className="bg-sky-300">
                      <Dropdown.Item>
                        <Link href="/pronosticos/match1">
                          <a className="text-lg font-semibold px-16">Fecha1</a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/pronosticos/match2">
                          <a className="text-lg font-semibold px-16">Fecha2</a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/pronosticos/match3">
                          <a className="text-lg font-semibold px-16">Fecha3</a>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-blue-800 py-16">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col gap-4 items-center">
            <h4 className="text-white font-bold mb-4 rounded-3xl bg-orange-500 py-2 px-4 w-28">
              CONTACTO
            </h4>
            <ul className="text-white">
              <li className="flex items-center gap-4">
                <IoIosMail className="w-8 h-8" />
                <a href="mailto:info@trediargentina.com.ar">
                  info@trediargentina.com.ar
                </a>
              </li>
              <li className="flex items-center gap-4">
                <TbWorld className="w-8 h-8" />
                <a
                  href="https://www.trediargentina.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.trediargentina.com.ar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/tredi.png"
              width="300"
              height="100"
              alt="logo"
              className="invisible md:visible"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-4 rounded-3xl bg-orange-500 py-2 px-4 w-40">
              REDES SOCIALES
            </h4>
            <ul className="flex gap-8 text-white">
              <li>
                <a
                  href="https://www.facebook.com/groupe.seche.environnement/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/secheenvironnem"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/seche-environnement"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
