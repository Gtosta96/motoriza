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
        className="px-6 h-16 rounded-lg"
      />
    </div>
  );
};
