const FilterDash = () => {
  return (
    <div className="p-4 border-b border-border flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-2">
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
          aria-label="Semana anterior"
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

        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-white hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
          Semana actual
        </button>

        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10"
          aria-label="Semana siguiente"
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
            className="lucide lucide-chevron-right h-4 w-4"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      <h2 className="text-lg font-medium">19 - 25 de mayo de 2025</h2>
      <div dir="ltr" data-orientation="horizontal" className="w-auto">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground space-x-2 outline-0"
          tabIndex={0}
          data-orientation="horizontal"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r5:-content-week"
            data-state="active"
            id="radix-:r5:-trigger-week"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
            tabIndex={0}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Semana
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r5:-content-month"
            data-state="inactive"
            id="radix-:r5:-trigger-month"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Mes
          </button>
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r5:-content-timeline"
            data-state="inactive"
            id="radix-:r5:-trigger-timeline"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-blue-500 text-blue-500 hover:bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-sm"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Línea de tiempo
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterDash;
