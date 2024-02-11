import React from "react";
import { Menu } from "@headlessui/react";
import { BrowserRouter as Router, Link, BrowserRouter } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-5 items-center bg-white">
      <div className="flex items center ">
        <BrowserRouter>
          <Link to="/" className="text-black font-bold mr-6">
            Logo
          </Link>
        </BrowserRouter>
        <div className="flex gap-12">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-black">Funciones</Menu.Button>
                <div
                  className={`relative ${open ? "block" : "hidden"} w-full h-1/2`}
                >
                  <Menu.Items
                    className={`absolute mt-2 ${open ? "block" : "hidden"}`}
                  >
                    <div className="grid grid-cols-3 gap-4 mt-8 bg-gray-400">
                      <Menu.Item className="absolute mt-2">
                        <BrowserRouter>
                          <Link
                            to="/sub-enlace-1"
                            className="block px-4 py-2 text-black"
                          >
                            Vistas
                          </Link>
                          <Link
                            to="/sub-enlace-1"
                            className="block px-4 py-2 text-black"
                          >
                            Automatización
                          </Link>
                          <Link
                            to="/sub-enlace-1"
                            className="block px-4 py-2 text-black"
                          >
                            Power-Ups
                          </Link>
                          <Link
                            to="/sub-enlace-1"
                            className="block px-4 py-2 text-black"
                          >
                            Plantillas
                          </Link>
                          <Link
                            to="/sub-enlace-1"
                            className="block px-4 py-2 text-black"
                          >
                            Integraciones
                          </Link>
                        </BrowserRouter>
                      </Menu.Item>
                    </div>
                    {/* Agrega más sub-enlaces aquí */}
                  </Menu.Items>
                </div>
              </>
            )}
          </Menu>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-black">Soluciones</Menu.Button>
                <Menu.Items
                  className={`absolute mt-2 ${open ? "block" : "hidden"}`}
                >
                  <Menu.Item>
                    <BrowserRouter>
                      <Link
                        to="/sub-enlace-1"
                        className="block px-4 py-2 text-black"
                      >
                        Sub-Enlace 1
                      </Link>
                    </BrowserRouter>
                  </Menu.Item>
                  {/* Agrega más sub-enlaces aquí */}
                </Menu.Items>
              </>
            )}
          </Menu>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-black">Planes</Menu.Button>
                <Menu.Items
                  className={`absolute mt-2 ${open ? "block" : "hidden"}`}
                >
                  <Menu.Item>
                    <BrowserRouter>
                      <Link
                        to="/sub-enlace-1"
                        className="block px-4 py-2 text-black"
                      >
                        Sub-Enlace 1
                      </Link>
                    </BrowserRouter>
                  </Menu.Item>
                  {/* Agrega más sub-enlaces aquí */}
                </Menu.Items>
              </>
            )}
          </Menu>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-black">Precios</Menu.Button>
                <Menu.Items
                  className={`absolute mt-2 ${open ? "block" : "hidden"}`}
                >
                  <Menu.Item>
                    <BrowserRouter>
                      <Link
                        to="/sub-enlace-1"
                        className="block px-4 py-2 text-black"
                      >
                        Sub-Enlace 1
                      </Link>
                    </BrowserRouter>
                  </Menu.Item>
                  {/* Agrega más sub-enlaces aquí */}
                </Menu.Items>
              </>
            )}
          </Menu>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="text-black">Recursos</Menu.Button>
                <Menu.Items
                  className={`absolute mt-2 ${open ? "block" : "hidden"}`}
                >
                  <Menu.Item>
                    <BrowserRouter>
                      <Link
                        to="/sub-enlace-1"
                        className="block px-4 py-2 text-black"
                      >
                        Sub-Enlace 1
                      </Link>
                    </BrowserRouter>
                  </Menu.Item>
                  {/* Agrega más sub-enlaces aquí */}
                </Menu.Items>
              </>
            )}
          </Menu>
        </div>
        {/* Agrega más enlaces y menús desplegables aquí */}
      </div>
      <div className="flex gap-4">
        <button className="text-black">Iniciar Sesión</button>
        <button className="text-white bg-blue-600 p-4">
          Obtener Trello Gratis
        </button>
      </div>
    </header>
  );
};

export default Header;
