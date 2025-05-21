import React from "react";

const SideBodyDash = () => {
  return (
    <div
      className="sticky left-0 z-30 shrink-0 border-r border-border shadow-sm flex flex-col bg-white"
      style={{ width: "240px", height: "4135px" }}
    >
      <div
        className="border-b border-border flex items-center sticky top-0 z-10 bg-white"
        style={{ height: "40px" }}
      >
        <div
          className="p-2 font-medium text-sm text-center border-r border-border"
          style={{ width: "160px" }}
        >
          Empleado
        </div>
        <div
          className="p-2 font-medium text-sm text-center"
          style={{ height: "80px" }}
        >
          Día
        </div>
      </div>
      <div className="relative flex-1">
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          style={{
            top: "0px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">
              Ana María Santos
            </div>
            <div className="text-xs text-muted-foreground truncate">
              Habitaciones
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          style={{ left: "160px", top: "0px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          // style="top: 455px; left: 0px; height: 455px; width: 160px;"
          style={{
            top: "455px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Juan Pérez</div>
            <div className="text-xs text-muted-foreground truncate">Ventas</div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 455px; width: 80px;"
          style={{ left: "160px", top: "455px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          style={{
            top: "910px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Luis Gómez</div>
            <div className="text-xs text-muted-foreground truncate">
              Mantenimiento
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 910px; width: 80px;"
          style={{ left: "160px", top: "910px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          style={{
            top: "1365px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Sofía Martínez</div>
            <div className="text-xs text-muted-foreground truncate">Cocina</div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          style={{ left: "160px", top: "1365px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          // style="top: 1820px; left: 0px; height: 455px; width: 160px;"
          style={{
            top: "1820px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Ricardo Díaz</div>
            <div className="text-xs text-muted-foreground truncate">
              Administración
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 1820px; width: 80px;"
          style={{ left: "160px", top: "1820px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          // style="top: 2275px; left: 0px; height: 455px; width: 160px;"
          style={{
            top: "2275px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">
              Elena Fernández
            </div>
            <div className="text-xs text-muted-foreground truncate">
              Marketing
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 2275px; width: 80px;"
          style={{ left: "160px", top: "2275px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          // style="top: 2730px; left: 0px; height: 455px; width: 160px;"
          style={{
            top: "2730px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Javier Morales</div>
            <div className="text-xs text-muted-foreground truncate">
              Seguridad
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 2730px; width: 80px;"
          style={{ left: "160px", top: "2730px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          // style="top: 3185px; left: 0px; height: 455px; width: 160px;"
          style={{
            top: "3185px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Patricia Núñez</div>
            <div className="text-xs text-muted-foreground truncate">
              Recursos Humanos
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          // style="left: 160px; top: 3185px; width: 80px;"
          style={{ left: "160px", top: "3185px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
        <div
          className="absolute border-b border-r border-border bg-white hover:bg-gray-50 cursor-context-menu group"
          style={{
            top: "3640px",
            left: "0px",
            height: "455px",
            width: "160px",
          }}
        >
          <div
            className="flex flex-col justify-center h-full w-full p-2"
            data-state="closed"
          >
            <div className="font-semibold text-sm truncate">Andrés Castro</div>
            <div className="text-xs text-muted-foreground truncate">
              Dirección
            </div>
          </div>
        </div>
        <div
          className="absolute flex flex-col bg-white"
          style={{ left: "160px", top: "3640px", width: "80px" }}
        >
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">lun</span>{" "}
            <span>19/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mar</span>{" "}
            <span>20/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">mié</span>{" "}
            <span>21/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">jue</span>{" "}
            <span>22/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">vie</span>{" "}
            <span>23/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">sáb</span>{" "}
            <span>24/05</span>{" "}
          </div>
          <div
            className="border-b border-border p-2 flex items-center justify-center text-xs hover:bg-gray-50"
            style={{ height: "65px" }}
          >
            <span className="font-bold mr-1 capitalize">dom</span>{" "}
            <span>25/05</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBodyDash;
