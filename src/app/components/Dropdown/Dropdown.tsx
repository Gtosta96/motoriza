"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ArrowDownIcon from "@/app/assets/icons/ArrowDown.svg";
import { variants } from "../Typography/Typography";

type Person = { id: number; name: string };

const people: Person[] = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

type Props = {
  placeholder: string;
  icon: string | StaticImport;
};

export const Dropdown = ({ placeholder, icon }: Props) => {
  const [selected, setSelected] = useState<Person>();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <div className="w-full cursor-default overflow-hidden rounded-lg bg-white shadow-[0px_8px_20px_0px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-6 pr-2">
            <Image alt="icon" aria-hidden="true" src={icon} />
          </div>
          <Combobox.Input<Person>
            style={variants["paragraph"]}
            className="h-16 w-full py-2 pl-14 pr-8 text-black placeholder-black"
            displayValue={(person) => person.name}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-6">
            <Image alt="arrow down" aria-hidden="true" src={ArrowDownIcon} />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base sm:text-sm">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 pl-10 pr-4">
                Resultado não encontrado
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  value={person}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#3b82f60d]" : "font-normal"
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>

                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "font-medium" : "font-normal"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
