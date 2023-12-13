"use client";

type Props = {
  placeholder?: string;
};

export const TextInput = ({ placeholder }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="h-16 rounded-lg px-6"
      />
    </div>
  );
};
