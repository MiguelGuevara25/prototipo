import React from "react";

export const Clientes = () => {
  return (
    <div className="w-[320px] border-r border-border flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"
            type="button"
            id="radix-:r1:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users h-4 w-4"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>

          <h2 className="font-medium">Empleados</h2>

          <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full">
            0
          </div>
        </div>
        <div className="flex items-center gap-1"></div>
      </div>

      <div className="p-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md bg-white">
            <div className="flex-1 flex items-center min-w-[150px] relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search h-4 w-4 text-muted-foreground mr-2 flex-shrink-0"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                className="flex w-full rounded-md border-input bg-white text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 shadow-none p-0 h-7 focus-visible:ring-0"
                placeholder="Buscar por nombre, departamento..."
              />
            </div>

            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-md"
              type="button"
              id="radix-:r3:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-filter h-4 w-4"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-border">
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Juan Pérez</div>
              <div className="text-xs text-muted-foreground truncate">
                Ventas • Gerente de Ventas
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">
                María Rodríguez
              </div>
              <div className="text-xs text-muted-foreground truncate">
                Recursos Humanos • Especialista de RRHH
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Carlos Gómez</div>
              <div className="text-xs text-muted-foreground truncate">
                TI • Desarrollador Senior
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Ana Martínez</div>
              <div className="text-xs text-muted-foreground truncate">
                Marketing • Coordinadora de Marketing
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Luis Sánchez</div>
              <div className="text-xs text-muted-foreground truncate">
                Ventas • Representante de Ventas
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Laura Torres</div>
              <div className="text-xs text-muted-foreground truncate">
                Finanzas • Contadora
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Pedro Ramírez</div>
              <div className="text-xs text-muted-foreground truncate">
                Operaciones • Supervisor
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Sofía Vargas</div>
              <div className="text-xs text-muted-foreground truncate">
                Atención al Cliente • Representante de Servicio
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">Elena Navarro</div>
              <div className="text-xs text-muted-foreground truncate">
                Marketing • Diseñadora Gráfica
              </div>
            </div>
          </div>
          <div
            className="p-3 flex items-center gap-3 hover:bg-accent transition-colors cursor-pointer"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          >
            <div
              className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 border-gray-300 bg-white"
              aria-hidden="true"
            ></div>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate text-sm">
                Miguel Ángel Castro
              </div>
              <div className="text-xs text-muted-foreground truncate">
                Ventas • Ejecutivo de Cuentas
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="flex items-center justify-between p-2 border-b border-border">
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7"
            // disabled=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-left h-4 w-4"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <div className="text-sm text-muted-foreground">Página 1 de 3</div>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-7 w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right h-4 w-4"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center p-2 cursor-pointer select-none">
          <div className="text-sm text-muted-foreground">
            Seleccionados: 0 de 24
          </div>
        </div>
      </div>
    </div>
  );
};
